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
			.to(".name-container p", { opacity: 0, scale: 1, duration: 5, ease: "power2.inOut", yPercent: -100, delay: 2 })
			.to(".sky", { opacity: 0.4, scale: 1, duration: 0.4, ease: "power2.inOut", yPercent: 0 }, "<");
	}, []);

	return (
		<section className="hero-section h-screen relative overflow-hidden bg-gradient-to-b from-[#040711] via-[#0b1b34] to-[#2f3f54] text-white select-none">
			{/* Background image */}
			<div className="noisy" />
			<img
				src="/images/hero-bg.webp"
				className="sky absolute inset-0 h-screen w-full object-cover object-top pointer-events-none select-none opacity-80"
				alt="Background"
			/>
			<img
				src="/images/hero-fg.webp"
				className="mountain absolute inset-0 h-screen w-full object-cover object-top pointer-events-none select-none z-2"
				alt="Background"
			/>

			<DotLottieReact
				src="/icons/scroll-down.lottie"
				loop
				autoplay
				className="intro-2 absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 opacity-50 w-70"
			/>

			{/* Text 1: Hello */}
			<div className="absolute w-full text-center inset-0 flex justify-center items-center z-0 hello px-3 sm:px-10 md:px-20 lg:px-30">
				<h1 className="px-6 text-3xl sm:text-4xl md:text-6xl intro-1 opacity-0 font-extrabold translate-y-0 sm:translate-y-4 text-gradient">In the stillness of the North...</h1>
				<h2 className="px-6 text-2xl sm:text-[4rem] md:text-[3.5rem]/15 intro-2 absolute opacity-0 font-extrabold translate-y-0 sm:translate-y-4 text-gradient">...some lines of code quietly take shape.</h2>
			</div>

			{/* Text 2: Alif Nurahman */}
			<div className="absolute inset-0 px-3 sm:px-5 md:px-10 lg:px-20 text-center flex flex-col justify-center items-center z-10 name-container opacity-0 bg-gradient-to-b from-[#040711] via-[#0b1b34] to-[#2f3f54]">
				<div className="noisy" />
				<p className="px-6 text-2xl sm:text-[5rem]/25 lg:text-[5rem]/30 font-extrabold opacity-90 -z-1 whitespace-nowrap">
					Hi, <br className="xl:hidden" /> I&apos;m Alif Nurahman
				</p>
				<p className="px-6 text-lg sm:text-[1.5rem] lg:text-[2rem] font-light opacity-90 text-center -z-1">— a software engineer, crafting magical experiences with auroras and caffeine.</p>
			</div>
		</section>
	);
}
