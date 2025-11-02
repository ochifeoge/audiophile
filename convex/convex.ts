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
});
