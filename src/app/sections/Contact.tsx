"use client";

import Footer from "@/components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import "tippy.js/animations/shift-away.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

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

	const form = useRef<HTMLFormElement>(null);
	const [loading, setLoading] = useState(false);

	const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		if (form.current) {
			emailjs
				.sendForm("service_nndxptq", "template_7rl5o5q", form.current, {
					publicKey: "8N_WA7dv6Am-3JuIe",
				})
				.then(
					() => {
						toast("The fire has received your words.", {
							icon: "🔥",
							style: {
								borderRadius: "4px",
								background: "#333",
								color: "#fff",
							},
						});
						form.current?.reset();
						setLoading(false);
					},
					(error) => {
						toast("The wind stole your message. Please resend.", {
							icon: "❌",
							style: {
								borderRadius: "4px",
								background: "#333",
								color: "#fff",
							},
						});
						setLoading(false);
					}
				);
		} else {
			console.log("Form reference is null.");
		}
	};

	return (
		<section className="contact-section h-screen w-screen flex justify-center text-white select-none">
			<div className="noisy" />
			<video
				src="/videos/campfire.mp4"
				className="absolute inset-0 h-screen w-full object-cover object-[35%_100%] pointer-events-none select-none z-2 opacity-80"
				autoPlay
				loop
				muted
			/>
			<div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-black to-transparent pointer-events-none z-10" />

			<div className="container-padding h-screen w-screen flex justify-between">
				<div className="w-full h-full flex flex-col justify-between">
					<form
						className="flex flex-col gap-4 z-6 text-lg mx-auto px-4 w-full md:w-2/3 xl:w-1/3 mt-10"
						ref={form}
						onSubmit={sendMessage}>
						<label htmlFor="name">
							<div className="text-white/80 font-medium">Name</div>
							<input
								type="text"
								name="name"
								id="name"
								required
								placeholder="Your name"
								className="mt-2 px-4 py-2 bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl w-full text-white/70 outline-none focus:ring focus:ring-white/30 transition-all duration-300"
							/>
						</label>

						<label htmlFor="email">
							<div className="text-white/80 font-medium">Email</div>
							<input
								type="email"
								name="email"
								id="email"
								required
								placeholder="Your email"
								className="mt-2 px-4 py-2 bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl w-full text-white/70 outline-none focus:ring focus:ring-white/30 transition-all duration-300"
							/>
						</label>

						<label htmlFor="message">
							<div className="text-white/80 font-medium">Message</div>
							<textarea
								name="message"
								id="message"
								required
								placeholder="Your message"
								rows={3}
								className="mt-2 px-4 py-2 bg-white/10 backdrop-blur-xs border border-white/20 rounded-xl w-full text-white/70 outline-none focus:ring focus:ring-white/30 transition-all duration-300"></textarea>
						</label>

						<button
							className={`px-6 py-3 text-sm md:text-base font-medium text-white/50 italic bg-white/10 backdrop-blur-md border border-white/20 rounded-xl transition-all duration-300 hover:shadow-md ${
								loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-white/20 hover:text-white/80"
							}`}
							disabled={loading}>
							Whisper into the fire
						</button>
					</form>

					<div className="z-3 mb-10 md:mb-0 block text-right">
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
