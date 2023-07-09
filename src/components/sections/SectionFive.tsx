import {
	faArrowDown,
	faCheck,
	faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
const schema = yup
	.object({
		name: yup.string().required(),
		email: yup.string().email().required(),
		subject: yup.string().required(),
		message: yup.string().required(),
	})
	.required();

const container = {
	animate: {
		transition: {
			staggerChildren: 0.6,
		},
	},
};

const variants = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 0.3,
			type: "spring",
			stiffness: 100,
		},
	},
};

interface IRequestForm {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const SectionFive: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const [isSubmitted, setIsSubmitted] =
		useState<boolean>(false);

	const onSubmit = async (data: IRequestForm) => {
		fetch("/api/sendMail", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((data) => data.json())
			.then((data) => setIsSubmitted(true))
			.catch((err) => console.log(err));
	};

	return (
		<section className="min-h-screen mb-16">
			<div className="mx-8 relative min-h-screen w-full">
				<div className="flex justify-center">
					<div className="font-bold md:text-4xl flex space-x-4">
						<div>
							Interested in working with me ? Let&apos; keep
							in touch{" "}
						</div>
						<div className="overflow-hidden">
							<motion.div
								animate={{
									y: [-40, 0, 40],
								}}
								transition={{
									duration: 1,
									repeat: Infinity,
									repeatType: "loop",
									ease: "easeInOut",
								}}
							>
								<FontAwesomeIcon icon={faArrowDown} />
							</motion.div>
						</div>
					</div>
				</div>
				<div className="flex justify-center">
					<div className="mx-32 my-8 font-semibold text-xl">
						<p>
							I am currently interested in a “Full-time
							Full-Stack Javascript SDE role
							(remote/on-site)“ with a major on
							“React.js/Next.js/Nest.js Frameworks“, but
							still open to other opportunities. However, if
							you have other requests or questions, don’t
							hesitate to use the form.
						</p>
						<div className="mx-32 mt-4 grid grid-cols-2 gap-4 text-xl">
							<input
								type="text"
								placeholder="Name"
								className="p-2 bg-transparent border-b-2 border-opacity-40 border-black focus:outline-0 placeholder:text-black placeholder:opacity-60 placeholder:font-normal focus:border-opacity-100 transition-all duration-300 ease-in-out"
								{...register("name")}
							/>
							<input
								type="email"
								placeholder="Email"
								className="p-2 bg-transparent border-b-2 border-opacity-40 border-black focus:outline-0 placeholder:text-black placeholder:opacity-60 placeholder:font-normal focus:border-opacity-100 transition-all duration-300 ease-in-out"
								{...register("email")}
							/>
							<input
								type="text"
								placeholder="Subject"
								className="p-2 bg-transparent col-span-2 border-b-2 border-opacity-40 border-black focus:outline-0 placeholder:text-black placeholder:opacity-60 placeholder:font-normal focus:border-opacity-100 transition-all duration-300 ease-in-out"
								{...register("subject")}
							/>
							<textarea
								className="col-span-2 bg-transparent font-semibold text-black border-b-2 border-opacity-40 focus:border-opacity-100 border-black rounded-md focus:outline-0 focus:ring-0 placeholder:font-normal placeholder:text-black p-2 placeholder:opacity-60 transition-all duration-300 ease-in-out"
								placeholder="Message"
								rows={7}
								{...register("message")}
							/>
							<div className="col-span-2 mt-4 flex justify-center">
								<ul className="list-disc">
									{errors.name && (
										<li>{errors.name.message}</li>
									)}
									{errors.email && (
										<li>{errors.email.message}</li>
									)}
									{errors.subject && (
										<li>{errors.subject.message}</li>
									)}
									{errors.message && (
										<li>{errors.message.message}</li>
									)}
								</ul>
							</div>
							<div className="col-span-2 mt-4">
								<div className="flex justify-center">
									{isSubmitted ? (
										<div>
											Successfully Submitted &emsp;{" "}
											<FontAwesomeIcon icon={faCheck} />
										</div>
									) : (
										<button
											className="disabled:cursor-not-allowed"
											onClick={handleSubmit(onSubmit)}
										>
											Submit &emsp;
											<FontAwesomeIcon
												icon={faPaperPlane}
											/>
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SectionFive;
