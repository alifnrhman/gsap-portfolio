"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Tippy, { tippy } from "@tippyjs/react";
import { followCursor } from "tippy.js";
import "tippy.js/animations/shift-away.css";
import { skills } from "../../../constants";

export default function Skills() {
	gsap.registerPlugin(SplitText, ScrollTrigger);

	useGSAP(() => {
		const titleSkillsSplit = new SplitText(".title-skills", { type: "chars" });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".skills-section",
				start: "top top",
				end: "bottom center",
				scrub: 2,
				pin: true,
			},
		});

		tl.to(".title-skills-underline", {
			opacity: 1,
			duration: 2,
			ease: "expo.out",
			width: "60%",
		})
			.from(titleSkillsSplit.chars, {
				opacity: 0,
				yPercent: 100,
				duration: 3,
				ease: "expo.out",
				stagger: 0.1,
			})
			.from(".tech p, .tech hr", {
				opacity: 0,
				yPercent: 100,
				duration: 4,
				ease: "expo.out",
				stagger: 0.4,
			})
			.from(".skill", {
				opacity: 0,
				xPercent: -50,
				duration: 8,
				ease: "expo.out",
				stagger: 1,
			});
	}, []);

	tippy.setDefaultProps({
		animation: "shift-away",
		followCursor: true,
		plugins: [followCursor],
	});

	return (
		<section className="skills-section h-screen w-screen flex justify-center text-white select-none">
			<div className="noisy" />
			<img
				src="/images/skills-bg.png"
				alt="Background"
				className="absolute w-full h-full object-cover object-bottom z-2"
			/>

			<div className="h-screen w-screen py-30 px-40 flex justify-between">
				<div className="w-full h-full flex flex-col justify-between">
					<div className="grid grid-cols-2 grid-rows-2 gap-20 z-10 w-full">
						<div className="tech">
							<p className="text-xl sm:text-2xl font-bold text-white/90">Languages</p>
							<p className="text-sm 2xl:text-base italic font-light text-white/80">The dialects I speak in the wilderness of code.</p>
							<hr className="my-2 h-0.5 w-6/12 opacity-100 border-0 rounded-r-lg bg-white/80" />

							<div className="mt-5 opacity-70 flex flex-wrap gap-5">
								{skills.languages.map(({ name, Icon }) => (
									<Tippy
										content={name}
										className="tippy-tooltip"
										key={name}>
										<div className="skill w-fit h-fit p-1.5 bg-white/20 backdrop-blur-3xl border border-white/20 rounded-lg flex items-center justify-center">
											<Icon />
										</div>
									</Tippy>
								))}
							</div>
						</div>

						<div className="tech">
							<p className="text-xl sm:text-2xl font-bold text-white/90">Frameworks & Libraries</p>
							<p className="text-sm 2xl:text-base italic font-light text-white/80">Campfires that keep the code warm.</p>
							<hr className="my-2 h-0.5 w-5/12 opacity-100 border-0 rounded-r-lg bg-white/80" />

							<div className="mt-5 opacity-70 flex flex-wrap gap-5">
								{skills.frameworks.map(({ name, Icon }) => (
									<Tippy
										content={name}
										className="tippy-tooltip"
										key={name}>
										<div className="skill w-fit h-fit p-1.5 bg-white/20 backdrop-blur-3xl border border-white/20 rounded-lg flex items-center justify-center">
											<Icon />
										</div>
									</Tippy>
								))}
							</div>
						</div>

						<div className="tech">
							<p className="text-xl sm:text-2xl font-bold text-white/90">Databases</p>
							<p className="text-sm 2xl:text-base italic font-light text-white/80">Where every memory is kept, structured and safe.</p>
							<hr className="my-2 h-0.5 w-7/12 opacity-100 border-0 rounded-r-lg bg-white/80" />

							<div className="mt-5 opacity-70 flex flex-wrap gap-5">
								{skills.databases.map(({ name, Icon }) => (
									<Tippy
										content={name}
										className="tippy-tooltip"
										key={name}>
										<div className="skill w-fit h-fit p-1.5 bg-white/20 backdrop-blur-3xl border border-white/20 rounded-lg flex items-center justify-center">
											<Icon />
										</div>
									</Tippy>
								))}
							</div>
						</div>

						<div className="tech">
							<p className="text-xl sm:text-2xl font-bold text-white/90">Tools & Utilities</p>
							<p className="text-sm 2xl:text-base italic font-light text-white/80">My compass, my rope, my matches.</p>
							<hr className="my-2 h-0.5 w-6/12 opacity-100 border-0 rounded-r-lg bg-white/80" />

							<div className="mt-5 opacity-70 flex flex-wrap gap-5">
								{skills.tools.map(({ name, Icon }) => (
									<Tippy
										content={name}
										className="tippy-tooltip"
										key={name}>
										<div className="skill w-fit h-fit p-1.5 bg-white/20 backdrop-blur-3xl border border-white/20 rounded-lg flex items-center justify-center">
											<Icon />
										</div>
									</Tippy>
								))}
							</div>
						</div>
					</div>

					<div className="z-3 hidden sm:block text-right">
						<h2 className="title-skills font-extrabold text-4xl sm:text-6xl 2xl:text-7xl text-white/80">The Tools Beneath My Steps</h2>
						<hr className="title-skills-underline ms-auto my-2 h-1 w-0 opacity-0 border-0 rounded-s-lg bg-white/80" />
						<p className="title-skills text-xl font-light italic">A collection of tools that carried me through the unknown.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
