import React from "react";
import { motion } from "framer-motion";

const ToolsSlideIn = () => {
	const container = {
		initial: {
			x: -40,
		},
		animate: {
			x: 0,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const variants = {
		initial: {
			x: -100,
		},
		animate: {
			x: 0,
			transition: {
				delay: 0.3,
				duration: 1,
			},
		},
	};
	return (
		<motion.div
			variants={container}
			initial="initial"
			whileInView="animate"
		>
			<div className="overflow-hidden inline-block">
				<motion.span
					variants={variants}
					className="inline-block"
				>
					T
				</motion.span>
			</div>
			<div className="overflow-hidden inline-block">
				<motion.span
					variants={variants}
					className="inline-block"
				>
					O
				</motion.span>
			</div>
			<div className="overflow-hidden inline-block">
				<motion.span
					variants={variants}
					className="inline-block"
				>
					O
				</motion.span>
			</div>
			<div className="overflow-hidden inline-block">
				<motion.span
					variants={variants}
					className="inline-block"
				>
					L
				</motion.span>
			</div>
			<div className="overflow-hidden inline-block">
				<motion.span
					variants={variants}
					className="inline-block"
				>
					S
				</motion.span>
			</div>
		</motion.div>
	);
};

export default ToolsSlideIn;
