import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import SkillsSlideIn from "./components/SkillsSlideIn";
import ToolsSlideIn from "./components/ToolsSlideIn";
import Image from "next/image";

const container = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.4,
		},
	},
};

const listContainer = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.2,
		},
	},
};

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.6,
		},
	},
};

const SectionThree = () => {
	return (
		<section className="min-h-screen">
			<div className="mx-8 relative min-h-[100vh] w-full">
				<div className="relative right-0 top-0 text-[6rem] font-bold">
					<SkillsSlideIn />
				</div>
				<motion.div
					className="relative flex justify-between"
					variants={container}
					initial="initial"
					whileInView="animate"
				>
					<div className="block" />
					<motion.div variants={variants} className="mt-8">
						<div className="text-4xl font-bold uppercase">
							Languages
						</div>
						<div className="text-2xl font-semibold mt-4">
							<motion.ul
								className="list-disc list-inside"
								variants={listContainer}
							>
								<motion.li variants={variants}>
									HTML / CSS
								</motion.li>
								<motion.li variants={variants}>
									Sass / Scss
								</motion.li>
								<motion.li variants={variants}>
									Vanilla Javascript
								</motion.li>
								<motion.li variants={variants}>
									Node.js
								</motion.li>
								<motion.li variants={variants}>
									Typescript
								</motion.li>
							</motion.ul>
						</div>
					</motion.div>
					<motion.div variants={variants}>
						<div className="text-4xl font-bold uppercase">
							frameworks
						</div>
						<div className="text-2xl font-semibold mt-4">
							<motion.ul
								className="list-disc list-inside"
								variants={listContainer}
							>
								<motion.li variants={variants}>
									ReactJS / NextJS
								</motion.li>
								<motion.li variants={variants}>
									ExpressJS / NestJS
								</motion.li>
								<motion.li variants={variants}>
									Tailwind / MUI / Bootstrap
								</motion.li>
								<motion.li variants={variants}>
									Framer Motion / Gsap
								</motion.li>
							</motion.ul>
						</div>
					</motion.div>
					<motion.div variants={variants} className="mt-8">
						<div className="text-4xl font-bold uppercase">
							Others
						</div>
						<div className="text-2xl font-semibold mt-4">
							<motion.ul
								className="list-disc list-inside"
								variants={listContainer}
							>
								<motion.li variants={variants}>
									UI/UX
								</motion.li>
								<motion.li variants={variants}>
									Figma
								</motion.li>
								<motion.li variants={variants}>
									Adobe Creative Suite
								</motion.li>
								<motion.li variants={variants}>
									Microsoft Office Suite
								</motion.li>
								<motion.li variants={variants}>
									Web Animation
								</motion.li>
							</motion.ul>
						</div>
					</motion.div>
					<div className="block"></div>
				</motion.div>
				<div className="mt-8" />
				<div className="relative right-0 top-0 text-[6rem] font-bold">
					<ToolsSlideIn />
				</div>
				<div className="relative my-8">
					<motion.div
						className="flex justify-between mx-32 space-x-8"
						variants={listContainer}
						initial="initial"
						whileInView="animate"
					>
						<motion.div variants={variants}>
							<Image
								src="/logos/windows10.svg"
								alt="windowsLogo"
								width={100}
								height={100}
							/>
						</motion.div>
						<motion.div variants={variants}>
							<Image
								src="/logos/tux.svg"
								alt="windowsLogo"
								width={100}
								height={100}
							/>
						</motion.div>
						<motion.div variants={variants}>
							<Image
								src="/logos/vscode.svg"
								alt="windowsLogo"
								width={100}
								height={100}
							/>
						</motion.div>
						<motion.div variants={variants}>
							<Image
								src="/logos/figma.svg"
								alt="windowsLogo"
								width={100}
								height={100}
							/>
						</motion.div>
						<motion.div variants={variants}>
							<Image
								src="/logos/postman.svg"
								alt="windowsLogo"
								width={100}
								height={100}
							/>
						</motion.div>
						<motion.div variants={variants}>
							<Image
								src="/logos/vercel.svg"
								alt="windowsLogo"
								width={100}
								height={100}
							/>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default SectionThree;
