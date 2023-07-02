import React, { useRef } from "react";
import { ParallaxText } from "../motions/ParallaxText";
import CustomDescription from "./sectionComponents/CustomDescription";
import { motion } from "framer-motion";

const SectionTwo = () => {
	const elementRef = useRef<HTMLDivElement>(null);

	return (
		<section className="pb-32">
			<div className="">
				<ParallaxText baseVelocity={2} big>
					javascript
				</ParallaxText>
			</div>
			<motion.div
				className="flex mt-12 justify-center text-6xl font-bold"
				ref={elementRef}
			>
				<CustomDescription />
			</motion.div>
		</section>
	);
};

export default SectionTwo;
