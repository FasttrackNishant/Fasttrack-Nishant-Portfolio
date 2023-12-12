import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_KEY);

export async function POST(req: Request) {
	const { name, email, message } = await req.json();
	console.log(resend);
	await resend.sendEmail({
		from: 'Acme <onboarding@resend.dev>',
		to: 'devnishant63@gmail.com',
		subject: 'hello world',
		text: `text from mail`,
	});

	return NextResponse.json({
		status: 'ok',
	});
}
