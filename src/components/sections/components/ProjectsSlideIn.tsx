import React from "react";
import { motion } from "framer-motion";

const ProjectsSlideIn = () => {
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
					P
				</motion.span>
			</div>
			<div className="overflow-hidden inline-block">
				<motion.span
					variants={variants}
					className="inline-block"
				>
					R
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
			<div className="overflow-hidden inline-block py-2">
				<motion.span
					variants={variants}
					className="inline-block"
				>
					J
				</motion.span>
			</div>
			<div className="overflow-hidden inline-block">
				<motion.span
					variants={variants}
					className="inline-block"
				>
					E
				</motion.span>
			</div>
			<div className="overflow-hidden inline-block">
				<motion.span
					variants={variants}
					className="inline-block"
				>
					C
				</motion.span>
			</div>
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
					S
				</motion.span>
			</div>
		</motion.div>
	);
};

export default ProjectsSlideIn;
