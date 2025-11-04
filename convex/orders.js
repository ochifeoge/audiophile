import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { Resend } from "resend";

export const createOrder = mutation({
  args: {
    billing: v.object({
      name: v.string(), // required
      email: v.string(), // required
      phone: v.string(), // required
    }),
    shipping: v.object({
      address: v.string(), // required (street)
      zip: v.optional(v.string()),
      city: v.string(), // required
      country: v.string(), // required
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    payment: v.object({
      method: v.string(), // required ("e-money" | "cash" ...)
    }),
    subtotal: v.number(),
    shippingCost: v.optional(v.number()),
    tax: v.optional(v.number()),
    total: v.number(), // required (final charged amount)
    status: v.string(), // required ("pending", "paid", etc.)
  },
  handler: async (ctx, args) => {
    try {
      const orderId = await ctx.db.insert("orders", {
        ...args,
        createdAt: Date.now(),
      });

      const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;
      console.log("resendkey", resendApiKey);

      // ✅ Now initialize Resend
      const resend = new Resend(resendApiKey);
      const itemsList = args.items
        .map((it) => `<li>${it.name} x${it.quantity} — $${it.price}</li>`)
        .join("");

      const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: auto;">
        <h2>Thanks for your order, ${args.billing.name}!</h2>
        <p>Your order <strong>#${orderId}</strong> has been received.</p>

        <h3>Order Summary</h3>
        <ul>${itemsList}</ul>

        <p><strong>Total:</strong> $${args.total}</p>

        <h3>Shipping To</h3>
        <p>${args.shipping.address}, ${args.shipping.city}, ${args.shipping.zip}</p>

        <p>Need help? <a href="mailto:ochifeoge@gmail.com">Contact support</a></p>

        <a href="https://audiophile/orders/${orderId}"
          style="display:inline-block;padding:10px 20px;background:#007bff;color:white;text-decoration:none;border-radius:6px;">
          View your order
        </a>

        <p style="font-size:12px;color:#888;margin-top:20px;">
          © ${new Date().getFullYear()} Your Store. All rights reserved.
        </p>
      </div>
    `;

      await resend.emails.send({
        from: "ochifeoge@gmail.com",
        to: args.billing.email,
        subject: "Your Order Confirmation",
        html,
      });

      return orderId;
    } catch (error) {
      console.log(error);
    }
  },
});
