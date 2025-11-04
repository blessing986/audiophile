import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  orders: defineTable({
    orderNumber: v.string(),
    // Customer info
    customerName: v.string(),
    customerEmail: v.string(),
    phoneNumber: v.string(),

    // Shipping info
    address: v.string(),
    city: v.string(),
    zipCode: v.string(),
    country: v.string(),

    // Payment info
    paymentMethod: v.string(),

    // Order items
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
      })
    ),

    // Totals
    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),

    // Status
    status: v.string(), // "pending", "processing", "shipped", "delivered"

    // Timestamps
    createdAt: v.number(),
  })
    .index("by_email", ["customerEmail"])
    .index("by_order_number", ["orderNumber"]),
});
