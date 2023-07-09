import { TransitionProvider } from "@/components/context/TransitionContext";
import "./globals.scss";
import { Open_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import Cursor from "@/components/cursor/Cursor";
import Footer from "@/components/sections/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Khaing Myel Khant",
	description: "A guy who love swimming in code pools",
	openGraph: {
		title: "Khaing Myel Khant",
		description: "A guy who love swimming in code pools",
		url: "https://portfolio-plum-alpha-31.vercel.app/",
		siteName: "Next.js",
		images: [
			{
				url: "https://portfolio-plum-alpha-31.vercel.app/og.jpg",
				width: 800,
				height: 600,
			},
			// {
			// 	url: "https://nextjs.org/og-alt.png",
			// 	width: 1800,
			// 	height: 1600,
			// 	alt: "My custom alt",
			// },
		],
		locale: "en_US",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${openSans.className}`}>
				<div className="background"></div>
				<SmoothScroll>
					{children}
					<Footer />
				</SmoothScroll>
				<Cursor />
			</body>
		</html>
	);
}
