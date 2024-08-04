import EmailView from "@/emails/EmailView";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    await resend.emails.send({
        from: "...",
        to: "murod.london@gmail.com",
        subject: "Hello",
        text: "Hello World",
        react: <EmailView name="Murod" />
    })

    return NextResponse.json({ success: true })
}
