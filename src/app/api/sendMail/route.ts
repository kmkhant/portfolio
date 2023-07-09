import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(
	req: NextRequest,
	res: NextResponse
) {
	const { name, email, subject, message } =
		await req.json();

	let transporter = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			type: "OAUTH2",
			user: process.env.MAIL_USER,
			accessToken: process.env.OAUTH_ACCESS_TOKEN,
			refreshToken: process.env.OAUTH_REFRESH_TOKEN,
			clientId: process.env.OAUTH_CLIENT_ID,
			clientSecret: process.env.OAUTH_CLIENT_SECRET,
		},
	});

	let mailOptions = {
		from: email,
		to: process.env.MAIL_RECEIVER,
		subject: subject,
		text: `Message from: ${name}, \n ${message}`,
	};

	transporter.sendMail(mailOptions, (err, data) => {
		if (err) {
			console.log(err);
			return NextResponse.json(
				{ message: "ERROR" },
				{ status: 500 }
			);
		} else {
			return NextResponse.json(
				{ message: "OK" },
				{ status: 200 }
			);
		}
	});

	return NextResponse.json({ message: "OK" });
}
