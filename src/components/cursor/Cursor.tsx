"use client";

import React, { useEffect, useRef, useState } from "react";
import Ball from "./Ball";
import {
	motion,
	useMotionValue,
	useSpring,
} from "framer-motion";

const Cursor: React.FC = () => {
	const baseX = useMotionValue(-200);
	const baseY = useMotionValue(-200);

	const x = useSpring(baseX, {
		damping: 50,
		stiffness: 400,
	});
	const y = useSpring(baseY, {
		damping: 50,
		stiffness: 400,
	});
	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			baseX.set(e.clientX - 8);
			baseY.set(e.clientY - 8);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () =>
			window.removeEventListener(
				"mousemove",
				handleMouseMove
			);
	}, []);

	return (
		<div className="">
			<motion.div
				className="fixed pointer-events-none left-0 top-0 w-5 h-5 bg-black rounded-full bg-blend-exclusion"
				style={{ x, y }}
				transition={{
					x: {
						duration: 0,
						ease: "easeIn",
					},
					y: {
						duration: 0,
						ease: "easeIn",
					},
				}}
			></motion.div>
		</div>
	);
};

export default Cursor;
