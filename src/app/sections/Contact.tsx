"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "tippy.js/animations/shift-away.css";

export default function Contact() {
	gsap.registerPlugin(SplitText, ScrollTrigger);

	useGSAP(() => {
		const titleContactSplit = new SplitText(".title-contact", { type: "chars" });

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".contact-section",
				start: "top top",
				end: "+=200%",
				scrub: true,
				pin: true,
			},
		});

		tl.to(".title-contact-underline", {
			opacity: 1,
			duration: 2,
			ease: "expo.out",
			width: "60%",
		})
			.from(titleContactSplit.chars, {
				opacity: 0,
				yPercent: 100,
				duration: 3,
				ease: "expo.out",
				stagger: 0.1,
			})
			.fromTo(
				"form label, form button",
				{
					opacity: 0,
					yPercent: 100,
					duration: 4,
					ease: "expo.out",
					stagger: 0.4,
				},
				{
					opacity: 1,
					yPercent: 0,
					duration: 4,
					ease: "expo.out",
					stagger: 0.4,
				}
			)
			.from("footer", {
				opacity: 0,
				yPercent: 10,
				duration: 4,
				ease: "expo.out",
			});
	}, []);

	return (
		<section className="contact-section h-screen w-screen flex justify-center text-white select-none">
			<div className="noisy" />
			<video
				src="/videos/contact-bg.mp4"
				className="absolute w-full h-full object-cover object-bottom z-2 opacity-80"
				autoPlay
				loop
				muted
			/>

			<div className="h-screen w-screen py-30 px-40 flex justify-between">
				<div className="w-full h-full flex flex-col justify-between">
					<form className="flex flex-col gap-4 z-6 text-lg mx-auto w-1/3 mt-10">
						<label htmlFor="name">
							<div className="text-white/80 font-medium">Name</div>
							<input
								type="text"
								name="name"
								id="name"
								className="mt-2 px-3 py-1.5 bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl w-full text-white/70 outline-none focus:ring focus:ring-white/30 transition-all duration-300"
							/>
						</label>

						<label htmlFor="email">
							<div className="text-white/80 font-medium">Email</div>
							<input
								type="email"
								name="email"
								id="email"
								className="mt-2 px-3 py-1.5 bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl w-full text-white/70 outline-none focus:ring focus:ring-white/30 transition-all duration-300"
							/>
						</label>

						<label htmlFor="message">
							<div className="text-white/80 font-medium">Message</div>
							<textarea
								name="message"
								id="message"
								rows={3}
								className="mt-2 px-3 py-1.5 bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl w-full text-white/70 outline-none focus:ring focus:ring-white/30 transition-all duration-300"></textarea>
						</label>

						<button className="px-6 py-3 text-sm md:text-base font-medium text-white/50 hover:text-white/80 italic bg-white/10 backdrop-blur-md border border-white/20 rounded-xl transition-all duration-300 hover:bg-white/20 hover:shadow-md cursor-pointer">
							Whisper into the fire
						</button>
					</form>
					<div className="z-3 hidden sm:block text-right">
						<h2 className="title-contact font-extrabold text-4xl sm:text-6xl 2xl:text-7xl text-white/80">Leave a Message by the Fire</h2>
						<hr className="title-contact-underline ms-auto my-2 h-1 w-0 opacity-0 border-0 rounded-s-lg bg-white/80" />
						<p className="title-contact text-xl font-light italic">Speak quietly. The forest listens.</p>
					</div>
				</div>
			</div>

			<Footer />
		</section>
	);
}
