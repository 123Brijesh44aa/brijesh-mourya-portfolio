import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import Link from "next/link";

interface ProjectCardProps {
	projectImage: string;
	projectTitle: string;
	githubLink: string;
	liveLink?: string;
}

const ProjectCard = ({projectImage, projectTitle, githubLink, liveLink}: ProjectCardProps) => {
	return (
		<div
			className="w-full sm:w-[350px] p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-500 shadow-lg hover:shadow-2xl">
			<div className="h-60 w-full relative">
				<Image
					className="object-cover rounded-xl"
					src={projectImage}
					alt="Sample Image"
					layout="fill"
					objectFit="cover"
					quality={100}
					unoptimized={true}
				/>
			</div>
			<h2 className="font-bold text-xl ml-5 mb-5 mt-5">{projectTitle}</h2>
			<div className="flex flex-col md:flex-row justify-between items-center gap-3">
				<Link href={githubLink}>
					<Button variant="project">
						View Project on github
					</Button>
				</Link>
				{
					liveLink &&
				<Link href={liveLink} target={"_blank"}>
					<Button variant="project">
						Visit Site
					</Button>
				</Link>
				}
			</div>
		</div>
	);
};

export default ProjectCard;
