"use client";

import Image from "next/image";
import Link from "next/link";
import SectionOne from "@/components/sections/SectionOne";
import { useRef } from "react";
import { ParallaxText } from "@/components/motions/ParallaxText";
import SectionTwo from "@/components/sections/SectionTwo";
import SectionThree from "@/components/sections/SectionThree";
import SectionFour from "@/components/sections/SectionFour";
import SectionFive from "@/components/sections/SectionFive";

export default function Home() {
	return (
		<main className="">
			{/* <SplashScreen /> */}
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
		</main>
	);
}
