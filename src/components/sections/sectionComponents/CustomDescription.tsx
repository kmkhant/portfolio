import React from "react";
import { motion } from "framer-motion";

const container = {
	initial: {},
	animate: {
		transition: {
			delayChildren: 0.2,
			staggerChildren: 0.4,
		},
	},
};

const item = {
	initial: {
		y: 100,
	},
	animate: {
		y: 0,
		transition: {
			duration: 1,
		},
	},
};

const CustomDescription: React.FC = () => {
	return (
		<motion.div
			className="flex flex-col space-y-4"
			variants={container}
			initial="initial"
			whileInView="animate"
		>
			<div className="inline-block overflow-hidden py-2">
				<motion.div className="text-center" variants={item}>
					Over the years, my journey
				</motion.div>
			</div>
			<div className="inline-block overflow-hidden py-2">
				<motion.div className="text-center" variants={item}>
					in web development
				</motion.div>
			</div>
			<div className="inline-block overflow-hidden py-2">
				<motion.div className="text-center" variants={item}>
					has been a fascinating and
				</motion.div>
			</div>
			<div className="inline-block overflow-hidden py-2">
				<motion.div className="text-center" variants={item}>
					transformative one.
				</motion.div>
			</div>
			<div className="inline-block overflow-hidden py-2">
				<motion.div className="text-center" variants={item}>
					What started as a mere curiosity
				</motion.div>
			</div>
			<div className="inline-block overflow-hidden py-2">
				<motion.div className="text-center" variants={item}>
					gradually evolved into a
				</motion.div>
			</div>
			<div className="inline-block overflow-hidden py-2">
				<motion.div className="text-center" variants={item}>
					full-fledged passion.
				</motion.div>
			</div>
			{/* 
			<CustomHeading text="in web development" />
			<CustomHeading text="has been a fascinating and" />
			<CustomHeading text="transformative one." />
			<CustomHeading text="What started as a mere curiosity" />
			<CustomHeading text="gradually evolved into a" />
			<CustomHeading text="full-fledged passion." /> */}
		</motion.div>
	);
};

export default CustomDescription;
