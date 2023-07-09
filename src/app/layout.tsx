import { TransitionProvider } from "@/components/context/TransitionContext";
import "./globals.scss";
import { Open_Sans } from "next/font/google";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import Cursor from "@/components/cursor/Cursor";
import Footer from "@/components/sections/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
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
