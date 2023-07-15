"use client";

import "./globals.scss";
import { Open_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import Cursor from "@/components/cursor/Cursor";
import Footer from "@/components/sections/Footer";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Loader from "@/components/Loader/Loader";

const openSans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [mounted, setMounted] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setMounted(true);
		}, 2000);
	}, []);

	return (
		<html lang="en">
			<head>
				<title>Khaing Myel Khant</title>
				<meta
					name="description"
					content="Full-Stack Engineer"
				/>
			</head>
			<body className={`${openSans.className}`}>
				{!mounted && (
					<div className="backgroundLoader">
						<Loader />
					</div>
				)}
				{mounted && (
					<div>
						<div className="background"></div>
						<SmoothScroll>
							{children}
							<Footer />
						</SmoothScroll>
						<Cursor />
					</div>
				)}
				<Analytics />
			</body>
		</html>
	);
}
