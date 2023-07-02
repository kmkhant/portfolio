"use client";

import React, { useEffect, useRef, useState } from "react";
import {
	MotionValue,
	motion,
	useMotionTemplate,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from "framer-motion";
import Image from "next/image";
import { ParallaxText } from "../motions/ParallaxText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLinkedin,
	faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const MotionImage = motion(Image);

const container = {
	animate: {
		opacity: 1,
		transition: {},
	},
};

const item = {
	initial: {
		y: 400,
	},
	animate: {
		y: 0,
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
};

const letterContainer = {
	initial: {},
	animate: {
		transition: {
			delayChildren: 2.5,
			staggerChildren: 0.1,
		},
	},
};

const letterAnimation = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.6,
			ease: "easeIn",
		},
	},
};

const AnimatedLetters = ({
	letters,
}: {
	letters: string;
}) => (
	<div className="flex overflow-hidden justify-end">
		{letters.split("").map((c, idx) => (
			<motion.span variants={letterAnimation} key={idx}>
				{c}
			</motion.span>
		))}
	</div>
);

const SectionOne: React.FC = () => {
	// const targetRef = useRef<HTMLDivElement>(null);
	// const [clipPath, setClipPath] = useState<string>("");

	// const { scrollYProgress } = useScroll({
	// 	target: targetRef,
	// 	offset: ["start end", "end end"],
	// });

	//polygon(0 0, 100% 0, 100% 100%, 0 100%);

	// margin
	// clip-path: polygon(0px 10%, 100% 10%, 100% 90%, 0px 90%);

	// const clipPercent = useTransform(
	// 	scrollYProgress,
	// 	[0.5, 1],
	// 	[0, 50]
	// );

	// const opacityPercent = useTransform(
	// 	scrollYProgress,
	// 	[0.5, 1],
	// 	[1, 0]
	// );

	// const polygonTransform = useTransform(
	// 	clipPercent,
	// 	(v) => {
	// 		const percentRounded = Math.ceil(v);

	// 		if (percentRounded < 1 || percentRounded === 1) {
	// 			return "";
	// 		}

	// 		const current = `polygon(0 ${
	// 			percentRounded === 0
	// 				? "0"
	// 				: `${
	// 						percentRounded < 50
	// 							? percentRounded
	// 							: 100 - percentRounded
	// 				  }%` // correct
	// 		}, 100% ${
	// 			percentRounded === 0 ? "0" : `${percentRounded}%` // correct
	// 		}, 100% ${
	// 			percentRounded === 0
	// 				? "0"
	// 				: `${100 - percentRounded}%` // correct
	// 		}, 0 ${
	// 			percentRounded === 0
	// 				? "0"
	// 				: `${100 - percentRounded}%` // correct
	// 		})`;

	// 		return current;
	// 	}
	// );

	// polygonTransform.on("change", (latest) => {
	// 	// console.log(polygonTransform.get());

	// 	setClipPath(polygonTransform.get());
	// });

	return (
		<section
			className={`relative`}
			// ref={targetRef}
		>
			<div className="px-8">
				<div className="flex justify-center pt-8">
					<div
						className="relative flex justify-between min-h-screen w-full"
						// style={{
						// 	clipPath,
						// 	opacity: opacityPercent,
						// }}
					>
						<div className="flex flex-col justify-between">
							<div className="font-bold md:text-6xl xxl:text-[6rem]">
								<motion.div
									variants={container}
									initial="initial"
									animate="animate"
								>
									<div className="overflow-hidden">
										<motion.div
											className=""
											variants={item}
										>
											DEVELOPER / <br />
										</motion.div>
									</div>

									<div className="overflow-hidden">
										<motion.div
											className=""
											variants={item}
											transition={{
												delay: 0.5,
											}}
										>
											DESIGNER
										</motion.div>
									</div>
								</motion.div>

								<motion.div
									className="flex items-center space-x-3 xxl:mt-8 overflow-x-hidden"
									initial={{
										opacity: 0,
										x: -100,
									}}
									animate={{
										opacity: 1,
										x: 0,
									}}
									transition={{
										duration: 0.5,
										delay: 1,
									}}
								>
									<div className="w-[24px] h-[1.5px] bg-black"></div>
									<div className="text-lg font-semibold">
										student@ucsm
									</div>
									<div className="flex items-center text-lg font-semibold space-x-4">
										<div className="">
											<FontAwesomeIcon icon={faEnvelope} />
										</div>
										<div>
											<FontAwesomeIcon icon={faLinkedin} />
										</div>
									</div>
								</motion.div>
								<motion.p
									className="text-2xl font-semibold mt-8"
									initial={{
										opacity: 0,
									}}
									animate={{
										opacity: 1,
									}}
									transition={{
										delay: 1.2,
										duration: 1,
										ease: "easeInOut",
									}}
								>
									Hi! 👋🏻, I&apos;m Khaing Myet Khant (a.k.a
									Kimmel Kent), <br /> a digital designer
									and fullstack javascript developer.
									<br />
									Currently looking for a job and open to
									new opportunies!
								</motion.p>
							</div>
							<div className="bottom-0 w-[60px] flex flex-col mb-16">
								<motion.div
									className="flex flex-col items-center space-y-2"
									initial={{
										opacity: 0,
									}}
									animate={{
										opacity: 1,
									}}
									transition={{
										delay: 1.4,
										duration: 0.5,
									}}
								>
									<div className="inline-block overflow-hidden">
										<motion.div
											className="text-3xl font-bold"
											animate={{
												y: [-40, 0, 40],
											}}
											transition={{
												duration: 1,
												repeat: Infinity,
												repeatType: "loop",
												ease: "easeInOut",
											}}
										>
											↓
										</motion.div>
									</div>

									<div className="font-semibold text-xl">
										Scroll
									</div>
								</motion.div>
							</div>
						</div>
						<div className="flex flex-col xxl:justify-between mb-16">
							<div className="relative right-0">
								<div className="overflow-hidden md:min-h-[400px] xxl:min-h-[600px]">
									<MotionImage
										src="/profile.jpg"
										alt="profile"
										width={500}
										height={400}
										initial={{
											scale: 1.3,
											display: "none",
										}}
										animate={{
											display: "block",
											clipPath:
												"polygon(0 100%, 100% 100%, 100% 0, 0 0)",
											scale: 1,
											transition: {
												delay: 1.8,
												duration: 2,
												ease: "easeInOut",
											},
										}}
										whileHover={{
											scale: 1.3,
											transition: {
												delay: 0,
												duration: 1.5,
												ease: "easeInOut",
											},
										}}
									/>
								</div>
							</div>
							<div className="flex justify-end">
								<motion.span
									variants={letterContainer}
									initial="initial"
									animate="animate"
									className="md:text-6xl xxl:text-[6rem] font-bold mt-0"
								>
									<div className="flex justify-end">
										<motion.div
											className="flex justify-end items-center space-x-2 md:translate-y-2 xxl:translate-y-10"
											initial={{
												opacity: 0,
											}}
											animate={{
												opacity: 1,
											}}
											transition={{
												delay: 4,
											}}
										>
											<div className="w-[24px] h-[2px] bg-black"></div>
											<p className="tracking-wider inline-block text-2xl">
												FULL STACK DEVELOPMENT
											</p>
										</motion.div>
									</div>

									<div className="relative flex mt-0 overflow-hidden justify-end">
										<AnimatedLetters letters="KHAING" />
										<AnimatedLetters letters="MYEL" />
									</div>

									<div>
										<AnimatedLetters letters="KHANT" />
									</div>
								</motion.span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div>
				<ParallaxText baseVelocity={-2} big>
					fullstack
				</ParallaxText>
			</div>
		</section>
	);
};

export default SectionOne;
