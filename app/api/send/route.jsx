import { NextResponse } from "next/server";
import { render } from "@react-email/components";
import nodemailer from "nodemailer";
import Email from "@/emails/Email";

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};

export async function POST(request) {
  const data = await request.json();
  const emailHtml = render(<Email data={data} />);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: data.subject,
      html: emailHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
