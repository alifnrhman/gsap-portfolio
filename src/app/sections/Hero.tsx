"use client";

import { useGSAP } from "@gsap/react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
	gsap.registerPlugin(ScrollTrigger);

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".hero-section",
				start: "top top",
				end: "+=200%",
				scrub: 2,
				pin: true,
			},
		});

		gsap.fromTo(
			".hero-section",
			{
				opacity: 0,
				scale: 1.1,
			},
			{
				opacity: 1,
				scale: 1.05,
				duration: 1,
				ease: "power2.out",
			}
		);

		gsap.fromTo(".intro-1", { opacity: 0, duration: 2, yPercent: 100, ease: "expo.out" }, { opacity: 1, duration: 2, yPercent: 0, ease: "expo.out" });

		tl.fromTo(".intro-1", { opacity: 1, duration: 1.8, ease: "expo.out", delay: 0.5 }, { opacity: 0, duration: 1.8, ease: "expo.out" })
			.to(".intro-2", { opacity: 1, duration: 1.8, ease: "expo.out" })
			.to(".intro-2", { opacity: 0, duration: 1.2, ease: "expo.out", scale: 0.9 })
			.fromTo(
				".hero-section",
				{
					scale: 1.05,
				},
				{ scale: 1, duration: 2, ease: "power2.inOut" },
				"<"
			)
			.to(".mountain", {
				opacity: 0,
				duration: 0.01,
				ease: "power2.out",
			})
			.fromTo(".name-container", { opacity: 0, scale: 200, yPercent: 1150, xPercent: 800 }, { opacity: 0.9, scale: 1, yPercent: 0, xPercent: 0, duration: 2, ease: "power2.out" }, "<-0")
			.to(".name-container p", { opacity: 0, scale: 1, duration: 5, ease: "power2.inOut", yPercent: -100 })
			.to(".sky", { opacity: 0.4, scale: 1, duration: 0.4, ease: "power2.inOut", yPercent: 0 }, "<");
	}, []);

	return (
		<section className="hero-section h-screen relative overflow-hidden bg-gradient-to-b from-[#040711] via-[#0b1b34] to-[#2f3f54] text-white select-none">
			{/* Background image */}
			<img
				src="/images/sky.webp"
				className="sky absolute w-full h-full object-cover object-center z-0 opacity-50"
				alt="Background"
			/>
			<img
				src="/images/mountain.webp"
				className="mountain absolute w-full h-full object-cover object-center z-2"
				alt="Background"
			/>

			<DotLottieReact
				src="/icons/scroll-down.lottie"
				loop
				autoplay
				className="intro-2 absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 opacity-50 w-70"
			/>

			{/* Text 1: Hello */}
			<div className="absolute w-full text-center inset-0 flex justify-center items-center z-0 hello">
				<h1 className="px-6 text-4xl sm:text-6xl 2xl:text-[5rem] intro-1 absolute opacity-0 font-extrabold -translate-y-3 sm:translate-y-4 text-gradient">In the stillness of the North...</h1>
				<h1 className="px-6 text-3xl sm:text-[4rem] intro-2 absolute opacity-0 font-extrabold -translate-y-2 sm:translate-y-4 text-gradient">...some lines of code quietly take shape.</h1>
				<div className="noisy" />
			</div>

			{/* Text 2: Alif Nurahman */}
			<div className="absolute inset-0 text-center flex flex-col justify-center items-center z-10 name-container opacity-0 bg-gradient-to-b from-[#040711] via-[#0b1b34] to-[#2f3f54]">
				<div className="noisy" />
				<p className="px-6 text-4xl sm:text-[5rem]/25 2xl:text-[6rem]/30 font-extrabold opacity-90 -z-1">
					Hi, <br className="sm:hidden" /> I'm Alif Nurahman
				</p>
				<p className="px-6 text-2xl sm:text-[1.5rem] 2xl:text-[2rem] font-light opacity-90 text-center -z-1">— a software engineer, crafting magical experiences with auroras and caffeine.</p>
			</div>
		</section>
	);
}
