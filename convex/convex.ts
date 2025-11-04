import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    category: v.string(),
    image: v.id("_storage"),
    features: v.string(),
    inTheBox: v.array(v.string()),
    extraImages: v.array(v.string()),
    isNew: v.boolean(),
  }),
  // orders schema

  orders: defineTable({
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
        id: v.string(), // required (product id)
        name: v.string(),
        price: v.number(), // required
        quantity: v.number(), // required
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
    createdAt: v.number(),
  }),
});
