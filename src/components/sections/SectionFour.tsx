import React from "react";
import { ParallaxText } from "../motions/ParallaxText";
import ProjectsSlideIn from "./components/ProjectsSlideIn";

const SectionFour = () => {
	return (
		<section className="min-h-screen">
			<div className="mx-8 relative min-h-[100vh] w-full">
				<ParallaxText baseVelocity={2} big>
					EAT SLEEP
				</ParallaxText>
				<ParallaxText baseVelocity={-2} big>
					CODE REPEAT
				</ParallaxText>
				<div className="mt-12">
					<div className="font-bold md:text-6xl xxl:text-[6rem]">
						<ProjectsSlideIn />
					</div>
				</div>
				<div className="mt-12 flex justify-center">
					<div>
						<div>MOM</div>
						<div>DAD</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionFour;
