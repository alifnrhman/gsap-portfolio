"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "tippy.js/animations/shift-away.css";
import { projects } from "../../../constants";
import { useState } from "react";

export default function Projects() {
	gsap.registerPlugin(SplitText, ScrollTrigger);

	useGSAP(() => {
		const titleProjectsSplit = new SplitText(".title-projects", { type: "chars" });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".projects-section",
				start: "top top",
				end: "+=200%",
				scrub: true,
				pin: true,
			},
		});

		tl.to(".title-projects-underline", {
			opacity: 1,
			duration: 2,
			ease: "expo.out",
			width: "60%",
		})
			.from(titleProjectsSplit.chars, {
				opacity: 0,
				yPercent: 100,
				duration: 3,
				ease: "expo.out",
				stagger: 0.1,
			})
			.from(".project-container", {
				opacity: 0,
				yPercent: 20,
				duration: 5,
				ease: "expo.out",
			})
			.fromTo(
				".nav",
				{
					opacity: 0,
					yPercent: -10,
					duration: 1,
					stagger: 0.2,
					ease: "expo.out",
				},
				{
					opacity: 1,
					yPercent: 0,
					duration: 1,
					ease: "expo.out",
					stagger: 0.2,
				}
			);
	}, []);

	const [projectIndex, setProjectIndex] = useState<number>(0);
	const [projectImageIndex, setProjectImageIndex] = useState<number>(0);
	const currentProject = projects[projectIndex];

	const handlePrevProject = () => {
		setProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
		setProjectImageIndex(0);
	};
	const handleNextProject = () => {
		setProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
		setProjectImageIndex(0);
	};

	const handleNextImage = () => {
		setProjectImageIndex((prev) => (prev === currentProject.images.length - 1 ? 0 : prev + 1));
	};

	const handlePrevImage = () => {
		setProjectImageIndex((prev) => (prev === 0 ? currentProject.images.length - 1 : prev - 1));
	};

	return (
		<section className="projects-section h-screen w-screen flex justify-center text-white select-none">
			<div className="noisy" />
			<img
				src="/images/projects-section-background.png"
				alt="Background"
				className="absolute w-full h-full object-cover object-top z-2 opacity-80"
			/>

			<div className="h-screen w-screen py-30 px-40 flex justify-between">
				<div className="w-full h-full flex flex-col justify-between">
					<div className="flex flex-col gap-y-5">
						<div className="project-container flex gap-x-10 z-6 p-3 pe-10 bg-white/10 backdrop-blur-xs border border-white/20 rounded-lg">
							<div className="min-w-5/12 max-w-5/12 w-5/12 h-80 flex items-center justify-center rounded-lg overflow-hidden relative">
								{currentProject.images.length > 1 && (
									<button
										className={`absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/10 border border-white/20 hover:border-white/30 rounded-xl px-2.5 py-1.5 cursor-pointer transition-all duration-300 z-10 ${
											projectImageIndex === 0 ? "opacity-50 cursor-auto!" : "cursor-pointer hover:bg-white/20"
										}`}
										onClick={handlePrevImage}
										disabled={projectImageIndex === 0}>
										{"<"}
									</button>
								)}

								<img
									src={`/images/projects/` + projects[projectIndex].images[projectImageIndex]}
									alt="Project Image"
									className="opacity-60 w-full h-full object-cover object-top"
									loading="eager"
								/>

								{currentProject.images.length > 1 && (
									<button
										className={`absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/10 border border-white/20 hover:border-white/30 rounded-xl px-2.5 py-1.5 cursor-pointer transition-all duration-300 z-10 ${
											projectImageIndex === currentProject.images.length - 1 ? "opacity-50 cursor-auto!" : "cursor-pointer hover:bg-white/20"
										}`}
										onClick={handleNextImage}
										disabled={projectImageIndex === currentProject.images.length - 1}>
										{">"}
									</button>
								)}
							</div>

							<div className="flex flex-col justify-between">
								<div>
									<p className="text-xl sm:text-3xl font-bold text-white/80 mt-5">{currentProject.name}</p>
									<hr className="my-2 h-0.5 w-5/12 opacity-100 border-0 rounded-r-lg bg-white/50" />
									<p className="text-sm 2xl:text-base italic font-light text-white/80">{currentProject.description}</p>
								</div>

								<div>
									<div className="mt-5 opacity-70 flex flex-wrap gap-5">
										{currentProject.skills.map((skill: string) => (
											<span
												key={skill}
												className="bg-white/20 px-3 py-1 rounded-full text-sm">
												{skill}
											</span>
										))}
									</div>

									<hr className="my-3 h-0.5 w-full opacity-100 border-0 rounded-r-lg bg-white/20" />

									<div className="mb-4 flex items-center justify-between gap-x-10">
										{currentProject.live_site && (
											<a
												href={currentProject.live_site}
												target="_blank"
												rel="noopener noreferrer"
												className="text-base font-medium text-white/80 hover:underline z-50">
												View Live Site
											</a>
										)}

										{currentProject.github && (
											<a
												href={currentProject.github}
												target="_blank"
												rel="noopener noreferrer"
												className="text-base font-medium text-white/80 hover:underline z-50">
												View GitHub Repository
											</a>
										)}
									</div>
								</div>
							</div>
						</div>

						<div className="flex justify-center gap-x-4 z-10">
							<button
								className={`nav bg-white/10 backdrop-blur-3xl border border-white/20 hover:border-white/30 rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 ${
									projectIndex === 0 ? "opacity-50 cursor-auto!" : "cursor-pointer hover:bg-white/20"
								}`}
								disabled={projectIndex === 0}
								onClick={handlePrevProject}>
								{"<"}
							</button>

							{projects.map((project, index) => (
								<button
									key={project.id}
									className={`nav bg-white/10 hover:bg-white/20 backdrop-blur-3xl border border-white/20 hover:border-white/30 rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 ${
										index === projectIndex ? "bg-white/20" : ""
									}`}
									onClick={() => {
										setProjectIndex(index);
										setProjectImageIndex(0);
									}}>
									{project.id}
								</button>
							))}

							<button
								className={`nav bg-white/10 backdrop-blur-3xl border border-white/20 hover:border-white/30 rounded-xl px-4 py-2 cursor-pointer transition-all duration-300 ${
									projectIndex === projects.length - 1 ? "opacity-50 cursor-auto!" : "cursor-pointer hover:bg-white/20"
								}`}
								disabled={projectIndex === projects.length - 1}
								onClick={handleNextProject}>
								{">"}
							</button>
						</div>
					</div>

					<div className="z-3 hidden sm:block text-left mt-auto">
						<h2 className="title-projects font-extrabold text-4xl sm:text-6xl 2xl:text-7xl text-white/80">Built Along the Way</h2>
						<hr className="title-projects-underline me-auto my-2 h-1 w-0 opacity-0 border-0 rounded-s-lg bg-white/80" />
						<p className="title-projects text-xl font-light italic">Traces of builds scattered across the trail.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
