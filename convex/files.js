import { query } from "./_generated/server";
import { v } from "convex/values";

// Return a publicly accessible URL for a given file ID
export const getImageUrl = query({
  args: { fileId: v.id("_storage") },
  handler: async (ctx, { fileId }) => {
    return await ctx.storage.getUrl(fileId);
  },
});
