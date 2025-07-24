"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Tippy, { tippy } from "@tippyjs/react";
import { followCursor } from "tippy.js";
import "tippy.js/animations/shift-away.css";
import { skills } from "../../../constants";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

export default function Skills() {
	const [iconSize, setIconSize] = useState<number>(40);
	gsap.registerPlugin(SplitText, ScrollTrigger);

	const isMobile = useMediaQuery({ maxWidth: 767 });
	useEffect(() => {
		if (isMobile) {
			setIconSize(30);
		} else {
			setIconSize(40);
		}
	}, [isMobile]);

	useGSAP(() => {
		const titleSkillsSplit = new SplitText(".title-skills", { type: "chars" });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".skills-section",
				start: "top top",
				end: "+=200%",
				scrub: true,
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
			})
			.to(
				".skill",
				{
					opacity: 1,
					duration: 2,
				},
				"+=5"
			);
	}, []);

	tippy.setDefaultProps({
		animation: "shift-away",
		plugins: [followCursor],
		followCursor: true,
	});

	return (
		<section className="skills-section h-screen w-screen flex justify-center text-white select-none">
			<div className="noisy" />
			<img
				src="/images/skills-bg.webp"
				alt="Background"
				className="absolute inset-0 h-screen w-full object-cover object-top pointer-events-none select-none"
			/>

			<div className="container-padding relative h-screen w-screen flex justify-between">
				<div className="w-full h-full flex flex-col justify-between">
					<div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 md:grid-rows-2 gap-5 md:gap-20 z-10 w-full">
						<div className="tech">
							<p className="text-base sm:text-2xl font-bold text-white/90">Languages</p>
							<p className="text-xs 2xl:text-base italic font-light text-white/80">The dialects I speak in the wilderness of code.</p>
							<hr className="my-2 h-0.5 w-6/12 opacity-100 border-0 rounded-r-lg bg-white/70" />

							<div className="mt-3 md:mt-5 opacity-70 flex overflow-x-auto gap-3 md:gap-5">
								{skills.languages.map(({ name, Icon }) => (
									<Tippy
										content={name}
										className="tippy-tooltip"
										key={name}>
										<div className="skill w-fit h-fit p-0.5 md:p-1.5 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-lg flex items-center justify-center">
											<Icon size={iconSize} />
										</div>
									</Tippy>
								))}
							</div>
						</div>

						<div className="tech">
							<p className="text-base sm:text-2xl font-bold text-white/90">Frameworks & Libraries</p>
							<p className="text-xs 2xl:text-base italic font-light text-white/80">Campfires that keep the code warm.</p>
							<hr className="my-2 h-0.5 w-5/12 opacity-100 border-0 rounded-r-lg bg-white/80" />

							<div className="mt-3 md:mt-5 opacity-70 flex overflow-x-auto gap-3 md:gap-5">
								{skills.frameworks.map(({ name, Icon }) => (
									<Tippy
										content={name}
										className="tippy-tooltip"
										key={name}>
										<div className="skill w-fit h-fit p-0.5 md:p-1.5 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-lg flex items-center justify-center">
											<Icon size={iconSize} />
										</div>
									</Tippy>
								))}
							</div>
						</div>

						<div className="tech">
							<p className="text-base sm:text-2xl font-bold text-white/90">Databases</p>
							<p className="text-xs 2xl:text-base italic font-light text-white/80">Where every memory is kept, structured and safe.</p>
							<hr className="my-2 h-0.5 w-7/12 opacity-100 border-0 rounded-r-lg bg-white/80" />

							<div className="mt-3 md:mt-5 opacity-70 flex overflow-x-auto gap-3 md:gap-5">
								{skills.databases.map(({ name, Icon }) => (
									<Tippy
										content={name}
										className="tippy-tooltip"
										key={name}>
										<div className="skill w-fit h-fit p-0.5 md:p-1.5 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-lg flex items-center justify-center">
											<Icon size={iconSize} />
										</div>
									</Tippy>
								))}
							</div>
						</div>

						<div className="tech">
							<p className="text-base sm:text-2xl font-bold text-white/90">Tools & Utilities</p>
							<p className="text-xs 2xl:text-base italic font-light text-white/80">My compass, my rope, my matches.</p>
							<hr className="my-2 h-0.5 w-6/12 opacity-100 border-0 rounded-r-lg bg-white/80" />

							<div className="mt-3 md:mt-5 opacity-70 flex overflow-x-auto gap-3 md:gap-5">
								{skills.tools.map(({ name, Icon }) => (
									<Tippy
										content={name}
										className="tippy-tooltip"
										key={name}>
										<div className="skill w-fit h-fit p-0.5 md:p-1.5 bg-white/10 backdrop-blur-3xl border border-white/20 rounded-lg flex items-center justify-center">
											<Icon size={iconSize} />
										</div>
									</Tippy>
								))}
							</div>
						</div>
					</div>

					<div className="z-3 text-right text-pretty">
						<h1 className="title-skills font-extrabold text-3xl sm:text-6xl 2xl:text-7xl text-white/80">
							The Tools <br className="block sm:hidden" /> Beneath My Steps
						</h1>
						<hr className="title-skills-underline my-2 h-1 w-0 ms-auto opacity-0 border-0 rounded-e-lg bg-white/80" />
						<p className="title-skills text-base sm:text-xl font-light italic text-pretty">A collection of tools that carried me through the unknown.</p>
					</div>
				</div>
			</div>
		</section>
	);
}
