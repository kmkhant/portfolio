import React from "react";
import { ParallaxText } from "../motions/ParallaxText";
import ProjectsSlideIn from "./components/ProjectsSlideIn";
import ProjectCard, {
	IProjectCard,
} from "./components/ProjectCard";

const projects: IProjectCard[] = [
	{
		title: "Drippple",
		description: `Complete Full-Stack Dribbble clone where user can
		like, comment and follow each other just like on
		dribbble. supporting basic features of dribbble related to shots, collections, authenication, users, etc.`,
		githubLink: "https://github.com/kmkhant/drippple",
		detailLink: "",
		tags: `#nextjs #nestjs #axios #redux #headlessui
	#framermotion #reduxsaga #tailwindcss #postgres #typeorm `,
	},
	{
		title: "Taungthutada Website",
		description: `Website for a startup helping farmers crafted using NextJS and typescript, integrated with sanity CMS for blog posts, and making animations using framer motion, MUI and Tailwind for UI`,
		githubLink: "",
		detailLink: "",
		demoLink: "https://taungthutada.vercel.app",
		tags: `#nextjs #sanity #contextapi #headlessui
	#typescript #nodemailer #mui #tailwindcss`,
	},
	{
		title: "Elearning Website Frontend Design",
		description: `Freelance project of converting design to code using vanilla javascript, css and html`,
		githubLink:
			"https://github.com/kmkhant/elearningproject",
		detailLink: "",
		demoLink: "https://kmkhant.github.io/elearningproject/",
		tags: `#javascript #html #css #dom`,
	},
	{
		title: "Mini Social Media App",
		description: `Full-Stack Social Media App created while I was learning frontend development where users can CRUD their posts, comments, likes. `,
		githubLink: "https://github.com/kmkhant/SocialMediaApp",
		detailLink: "",
		tags: `#vite #redux #reactjs #mongoose #expressjs #nodejs #fileuploading #jwt #typescript`,
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
							demoLink={data.demoLink}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default SectionFour;
