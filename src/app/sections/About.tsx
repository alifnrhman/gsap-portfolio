"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function About() {
	gsap.registerPlugin(SplitText, ScrollTrigger);

	useGSAP(() => {
		const paragraphSplit = new SplitText(".paragraph", { type: "lines" });
		const titleAboutSplit = new SplitText(".title-about", { type: "chars" });
		const statsSplit = new SplitText(".stats", { type: "lines" });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".about-section",
				start: "top top",
				end: "+=200%",
				scrub: true,
				pin: true,
			},
		});

		tl.fromTo(
			".foreground",
			{
				yPercent: 10,
				opacity: 0,
				duration: 5,
			},
			{
				yPercent: 0,
				opacity: 1,
				duration: 5,
				ease: "expo.out",
			},
			"<"
		)
			.to(".title-about-underline", {
				opacity: 1,
				duration: 2,
				ease: "expo.out",
				width: "60%",
			})
			.from(titleAboutSplit.chars, {
				opacity: 0,
				yPercent: 100,
				duration: 3,
				ease: "expo.out",
				stagger: 0.1,
			})
			.from(paragraphSplit.lines, {
				opacity: 0,
				yPercent: 100,
				duration: 4,
				ease: "expo.out",
				stagger: 0.4,
				delay: 1,
			})
			.from(statsSplit.lines, {
				opacity: 0,
				yPercent: 100,
				duration: 3,
				ease: "expo.out",
				stagger: 0.4,
				delay: 1,
			});
	}, []);

	return (
		<section className="about-section h-screen w-screen flex justify-center bg-gradient-to-t from-[#0b1b34] to-[#2f3f54] text-white select-none">
			<div className="noisy" />
			<img
				src="/images/about-bg.webp"
				alt="Background"
				className="absolute w-full h-full object-cover object-[0%_90%] opacity-50 z-2"
			/>

			<img
				src="/images/about-foreground.webp"
				alt="Background"
				className="absolute foreground w-full h-full object-cover object-[0%_90%] opacity-100 z-4"
			/>

			<div className="h-screen w-screen py-10 sm:py-20 2xl:py-30 px-10 sm:px-20 2xl:px-40 flex flex-col sm:flex-row justify-between">
				<div className="w-full h-full flex flex-col justify-between">
					<div className="text-base sm:text-xl 2xl:text-2xl text-white/90 w-full sm:w-full 2xl:w-10/12 text-justify text-pretty space-y-2 sm:space-y-4 z-5">
						<p className="paragraph">Indonesian software engineer & tech explorer.</p>
						<p className="paragraph">Thrives in the quiet of the night, weaving thoughts into lines of code.</p>
						<p className="paragraph">Fueled by auroras, caffeine, and curiosity.</p>
						<p className="paragraph">Still learning, still dreaming — on a journey through the unknown.</p>
						<p className="paragraph">
							You can trace the path so far through{" "}
							<a
								href="https://github.com/alifnrhman"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white/80 hover:text-white/100 transition-colors duration-300 underline underline-offset-5">
								GitHub
							</a>{" "}
							or{" "}
							<a
								href="https://www.linkedin.com/in/alifnurahman/"
								target="_blank"
								rel="noopener noreferrer"
								className="text-white/80 hover:text-white/100 transition-colors duration-300 underline underline-offset-5">
								LinkedIn
							</a>
							.
						</p>
					</div>

					<div className="z-3 mb-20 hidden sm:block">
						<h1 className="title-about font-extrabold text-4xl sm:text-6xl 2xl:text-7xl text-white/80">The Explorer’s Origin</h1>
						<hr className="title-about-underline my-2 h-1 w-0 opacity-0 border-0 rounded-r-lg bg-white/80" />
						<p className="title-about text-xl font-light italic">A quiet mind, a curious soul, and a trail of code behind.</p>
					</div>
				</div>

				<div className="grid grid-cols-2 grid-rows-2 gap-x-4 text-center text-white/80 mb-10 sm:mb-50 z-3 w-full sm:w-5/12 2xl:w-4/12">
					<div className="stats">
						<p className="text-3xl sm:text-4xl font-bold text-white/90">1+</p>
						<p className="text-sm sm:text-base/1 2xl:text-lg mt-4">Years of Experience</p>
					</div>
					<div className="stats">
						<p className="text-3xl sm:text-4xl font-bold text-white/90">10+</p>
						<p className="text-sm sm:text-base/1 2xl:text-lg mt-4">Projects Built</p>
					</div>
					<div className="stats">
						<p className="text-3xl sm:text-4xl font-bold text-white/90">4+</p>
						<p className="text-sm sm:text-base/1 2xl:text-lg mt-2">Production Deployments</p>
					</div>
					<div className="stats">
						<p className="text-3xl sm:text-4xl font-bold text-white/90">∞</p>
						<p className="text-sm sm:text-base/1 2xl:text-lg mt-2">Cups of Coffee Consumed</p>
					</div>
				</div>

				<div className="z-3 mb-20 sm:hidden block">
					<h1 className="title-about font-extrabold text-3xl sm:text-6xl 2xl:text-7xl text-white/80">
						The <br className="block sm:hidden" /> Explorer’s Origin
					</h1>
					<hr className="title-about-underline my-2 h-1 w-0 opacity-0 border-0 rounded-e-lg bg-white/80" />
					<p className="title-about text-base sm:text-xl font-light italic">A quiet mind, a curious soul, and a trail of code behind.</p>
				</div>
			</div>
		</section>
	);
}
