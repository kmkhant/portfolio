// prettier-ignore
"use client";

import React, { useContext, useRef } from "react";
import Script from "next/script";
import { TransitionContext } from "../context/TransitionContext";
import { motion } from "framer-motion";

type TransitionContextProps = {
	background: string;
	setBackground: React.Dispatch<
		React.SetStateAction<string>
	>;
	isFirstTime: boolean;
	setIsFirstTime:
		| React.Dispatch<React.SetStateAction<boolean>>
		| (() => void);
};

const SplashScreen = () => {
	const { isFirstTime, setIsFirstTime } = useContext(
		TransitionContext
	) as TransitionContextProps;

	// console.log(isFirstTime);
	if (isFirstTime) {
		setTimeout(() => {
			setIsFirstTime(false);
		}, 7000);

		return (
			<main className="relative w-full h-full">
				<Script
					async
					src="https://unpkg.com/typer-dot-js@0.1.0/typer.js"
				></Script>
				<motion.div
					className="fixed z-[1004] w-[50%] left-0 h-[100vh] bg-white"
					animate={{
						x: "-100%",
					}}
					transition={{
						duration: 3,
						ease: "easeInOut",
						delay: 3.5,
					}}
				></motion.div>
				<motion.div
					className="fixed z-[1004] w-[50%] right-0 h-[100vh] bg-white"
					animate={{
						x: "100%",
					}}
					transition={{
						duration: 3,
						ease: "easeInOut",
						delay: 3.5,
					}}
				></motion.div>
				<motion.div
					className="fixed z-[1004] top-[42%] text-6xl font-bold"
					animate={{
						opacity: 0,
					}}
					transition={{
						duration: 1,
						ease: "easeInOut",
						delay: 3,
					}}
				>
					<div className="flex w-[100vw] justify-center items-center">
						<h1>
							<span
								className="typer"
								data-words="eat;,sleep;,code;,repeat;"
								data-delay="10"
								data-loop="0.3"
							></span>
							<span
								className="cursor"
								data-cursor-display="_"
								data-owner="abc"
							></span>
						</h1>
					</div>
				</motion.div>
			</main>
		);
	} else {
		return null;
	}
};

export default SplashScreen;
