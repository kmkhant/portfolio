import Image from "next/image";
import Link from "next/link";
import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IProjectCard {
	title: string;
	description: string;
	githubLink: string;
	detailLink: string;
	tags: string;
}

const ProjectCard: React.FC<IProjectCard> = ({
	title,
	description,
	githubLink,
	detailLink,
	tags,
}) => {
	return (
		<div className="px-4 py-4 border-2 border-black rounded-md">
			<p className="font-bold text-2xl">
				<span className="underline">{title}</span> &emsp;
				<Link href="#">
					<FontAwesomeIcon icon={faGithub} />
				</Link>
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
