import {Resend} from 'resend';
import {NextResponse} from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend('re_AaXYyiZR_EZAVcoGp6gCXhQP2SaRgeB9f');
const fromEmail = "kassinopoulou.stephane@gmail.com"
const toEmail = "kassinopoulou.stephane@gmail.com"


export async function POST(req, res) {
    const {body} = await req.json();
    const {email, subject, message} = body;

    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: toEmail,
            subject: 'Hello world',
            react: (
                <>
                    <h1>{subject}</h1>
                    <p>Thank you for contacting me!</p>
                    <p>New message submitted </p>
                    <p>{message}</p>
                </>
            )
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({error});
    }
}