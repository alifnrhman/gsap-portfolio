"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProvider() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.5,
			easing: (t) => t * (2 - t),
			smoothWheel: true,
		});

		lenis.scrollTo(0, {
			offset: 0,
			immediate: false,
		});

		// RAF loop
		const raf = (time: DOMHighResTimeStamp) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};
		requestAnimationFrame(raf);

		// Integrate with ScrollTrigger
		lenis.on("scroll", ScrollTrigger.update);

		ScrollTrigger.scrollerProxy(document.body, {
			scrollTop(value) {
				if (arguments.length && typeof value === "number") {
					lenis.scrollTo(value, { immediate: true });
				}
				return window.scrollY;
			},
			getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: window.innerWidth,
					height: window.innerHeight,
				};
			},
			pinType: document.body.style.transform ? "transform" : "fixed",
		});

		ScrollTrigger.refresh();

		return () => {
			lenis.destroy();
		};
	}, []);

	return null;
}
