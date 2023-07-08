import React from "react";
import { ParallaxText } from "../motions/ParallaxText";
import ProjectsSlideIn from "./components/ProjectsSlideIn";
import ProjectCard, {
	IProjectCard,
} from "./components/ProjectCard";

const projects: IProjectCard[] = [
	{
		title: "DRIPPPLE",
		description: `Comple Full-Stack Dribbble clone where user can
		like, comment and follow each other just like on
		dribbble. Have features like add shot to users&apos;
		collection and saving as favourites`,
		githubLink: "",
		detailLink: "",
		tags: `#nextjs #nestjs #axios #redux #headlessui
	#framermotion #reduxsaga #tailwindcss`,
	},
	{
		title: "Taungthutada Website",
		description: `Website for a startup helping farmers crafted using NextJS and typescript, integrated with sanity CMS for blog posts, and making animations using framer motion, MUI and Tailwind for UI`,
		githubLink: "",
		detailLink: "",
		tags: `#nextjs #sanity #contextAPI #headlessui
	#typescript #nodemailer #mui #tailwindcss`,
	},
	{
		title: "DRIPPPLE",
		description: `Comple Full-Stack Dribbble clone where user can
		like, comment and follow each other just like on
		dribbble. Have features like add shot to users&apos;
		collection and saving as favourites`,
		githubLink: "",
		detailLink: "",
		tags: `#nextjs #nestjs #axios #redux #headlessui
	#framermotion #reduxsaga`,
	},
	{
		title: "DRIPPPLE",
		description: `Comple Full-Stack Dribbble clone where user can
		like, comment and follow each other just like on
		dribbble. Have features like add shot to users&apos;
		collection and saving as favourites`,
		githubLink: "",
		detailLink: "",
		tags: `#nextjs #nestjs #axios #redux #headlessui
	#framermotion #reduxsaga`,
	},
];

const SectionFour = () => {
	return (
		<section className="min-h-screen my-16">
			<ParallaxText baseVelocity={2} big>
				EAT SLEEP
			</ParallaxText>
			<ParallaxText baseVelocity={-2} big>
				CODE REPEAT
			</ParallaxText>
			<div className="mx-8 relative min-h-[100vh] w-full">
				<div className="mt-12">
					<div className="font-bold md:text-6xl xxl:text-[6rem]">
						<ProjectsSlideIn />
					</div>
				</div>
				<div className="mt-12 grid grid-cols-2 mx-32 justify-center gap-4">
					{projects.map((data, idx) => (
						<ProjectCard
							key={idx}
							title={data.title}
							description={data.description}
							githubLink={data.githubLink}
							detailLink={data.detailLink}
							tags={data.tags}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionFour;
