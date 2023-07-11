import Image from "next/image";
import Link from "next/link";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export interface IProjectCard {
	title: string;
	description: string;
	githubLink: string;
	detailLink: string;
	tags: string;
	demoLink?: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
	title,
	description,
	githubLink,
	detailLink,
	tags,
	demoLink,
}) => {
	return (
		<div className="px-4 py-4 border-2 border-black rounded-md">
			<p className="font-bold text-2xl">
				<span
					className={`${
						demoLink && demoLink.length !== 0
							? `underline`
							: ``
					}`}
				>
					{demoLink && demoLink.length !== 0 ? (
						<Link
							href="https://taungthutada.vercel.app"
							target="_blank"
						>
							{title}
						</Link>
					) : (
						title
					)}
				</span>{" "}
				&emsp;
				{githubLink.length !== 0 && (
					<Link href={githubLink} target="blank">
						<FontAwesomeIcon icon={faGithub} />
					</Link>
				)}
			</p>
			<p className="text-lg mt-4">
				{description}
				<br />
				<br />
				<span className="font-bold">{tags}</span>
			</p>
		</div>
	);
};

export default ProjectCard;
