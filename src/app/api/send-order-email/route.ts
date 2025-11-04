import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Generate HTML email template
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function generateOrderEmailHTML(order: any): string {
  const itemsHTML = order.items
    .map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (item: any) => `
      <tr>
        <td style="padding: 15px 0; border-bottom: 1px solid #f1f1f1;">
        <div>
          <p style="margin: 0; font-weight: bold; font-size: 15px;">${item.name}</p>
          <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">$${item.price.toLocaleString()} x ${item.quantity}</p>
          </div>
        </td>
        <td style="padding: 15px 0; border-bottom: 1px solid #f1f1f1; text-align: right; font-weight: bold;">
          $${(item.price * item.quantity).toLocaleString()}
        </td>
      </tr>
    `
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Order Confirmation</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f5f5f5;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">

          <!-- Header -->
          <tr>
            <td style="background-color: #D87D4A; padding: 40px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: bold; text-transform: uppercase;">Thank You</h1>
              <p style="margin: 10px 0 0 0; color: #ffffff; font-size: 16px;">For Your Order 😊😊</p>
            </td>
          </tr>

          <!-- Order Info -->
          <tr>
            <td style="padding: 40px;">
              <p style="margin: 0 0 10px 0; color: #666; font-size: 15px;">Order Number:</p>
              <p style="margin: 0 0 20px 0; font-weight: bold; font-size: 18px; color: #D87D4A;">${order.orderNumber}</p>

              <p style="margin: 0 0 30px 0; color: #666; font-size: 15px;">Hi ${order.customerName}, your order has been confirmed and will be shipping soon.</p>

              <!-- Items Table -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <thead>
                  <tr>
                    <th style="text-align: left; padding-bottom: 15px; border-bottom: 2px solid #D87D4A; font-size: 14px; text-transform: uppercase; color: #333;">Item</th>
                    <th style="text-align: right; padding-bottom: 15px; border-bottom: 2px solid #D87D4A; font-size: 14px; text-transform: uppercase; color: #333;">Total</th>
                  </tr>
                </thead>
                <tbody>
                  ${itemsHTML}
                </tbody>
              </table>

              <!-- Totals -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 30px;">
                <tr>
                  <td style="padding: 10px 0; color: #666;">Subtotal:</td>
                  <td style="padding: 10px 0; text-align: right; font-weight: bold;">$${order.subtotal.toLocaleString()}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666;">Shipping:</td>
                  <td style="padding: 10px 0; text-align: right; font-weight: bold;">$${order.shipping}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #666;">VAT (Included):</td>
                  <td style="padding: 10px 0; text-align: right; font-weight: bold;">$${order.vat.toLocaleString()}</td>
                </tr>
                <tr style="border-top: 2px solid #f1f1f1;">
                  <td style="padding: 15px 0; font-size: 16px; font-weight: bold;">Grand Total:</td>
                  <td style="padding: 15px 0; text-align: right; font-size: 20px; font-weight: bold; color: #D87D4A;">$${order.grandTotal.toLocaleString()}</td>
                </tr>
              </table>

              <!-- Shipping Address -->
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                <h3 style="margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; color: #333;">Shipping Address</h3>
                <p style="margin: 0; line-height: 1.6; color: #666;">
                  ${order.customerName}<br>
                  ${order.address}<br>
                  ${order.city}, ${order.zipCode}<br>
                  ${order.country}
                </p>
              </div>

              <!-- Payment Method -->
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
                <h3 style="margin: 0 0 10px 0; font-size: 16px; text-transform: uppercase; color: #333;">Payment Method</h3>
                <p style="margin: 0; color: #666;">${order.paymentMethod === "e-money" ? "e-Money" : "Cash on Delivery"}</p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9f9f9; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px 0; color: #666; font-size: 14px;">Questions about your order?</p>
              <p style="margin: 0; color: #666; font-size: 14px;">Contact us at dev.blessingubiomor.com</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { order } = body;

    if (!order?.customerEmail) {
      return NextResponse.json(
        { error: "Missing order or customer email" },
        { status: 400 }
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailHtml = generateOrderEmailHTML(order);

    // Send email
    const info = await transporter.sendMail({
      from: `"Audiophile" <${process.env.EMAIL_USER}>`,
      to: order.customerEmail,
      subject: `Order Confirmation - ${order.orderNumber}`,
      html: emailHtml,
    });

    console.log("✅ Email sent:", info.messageId);

    return NextResponse.json({ success: true, id: info.messageId });
  } catch (error) {
    console.error("Email sending failed:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: String(error) },
      { status: 500 }
    );
  }
}
