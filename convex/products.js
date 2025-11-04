import { query } from "./_generated/server";
import { v } from "convex/values";

export const getProducts = query({
  handler: async (ctx) => {
    const products = await ctx.db.query("products").collect();

    return Promise.all(
      products.map(async (p) => ({
        ...p,
        imageUrl: p.image ? await ctx.storage.getUrl(p.image) : null,
        // extraImageUrls: await Promise.all(
        //   (p.extraImages || []).map((id) => ctx.storage.getUrl(id))
        // ),
      }))
    );
  },
});

// Fetch a single product by its _id
export const getProductById = query({
  args: { productId: v.id("products") }, // expects a Convex document ID
  handler: async (ctx, { productId }) => {
    const product = await ctx.db.get(productId);
    if (!product) throw new Error("Product not found");

    // Optional: resolve main image URL
    let imageUrl = product.image;
    if (product.image) {
      imageUrl = await ctx.storage.getUrl(product.image);
    }

    let extraImageUrls = [];
    if (product.extraImages?.length) {
      extraImageUrls = await Promise.all(
        product.extraImages.map((id) => ctx.storage.getUrl(id))
      );
    }

    return { ...product, image: imageUrl, extraImages: extraImageUrls };
  },
});
