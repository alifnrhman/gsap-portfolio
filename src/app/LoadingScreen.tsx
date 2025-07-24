"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
	const [loaded, setLoaded] = useState(false);
	const loadingRef = useRef(null);
	const logoRef = useRef(null);
	const barRef = useRef(null);

	useEffect(() => {
		const MIN_DURATION = 1000; // 1 detik
		const start = Date.now();

		const finishLoading = () => {
			const elapsed = Date.now() - start;
			const delay = Math.max(0, MIN_DURATION - elapsed);

			setTimeout(() => {
				gsap.to(loadingRef.current, {
					opacity: 0,
					duration: 1.2,
					ease: "power2.inOut",
					onComplete: () => setLoaded(true),
				});
			}, delay);
		};

		const handleLoad = () => {
			const tl = gsap.timeline();

			tl.fromTo(logoRef.current, { opacity: 0, scale: 0.9, rotate: -5 }, { opacity: 1, scale: 1, rotate: 0, duration: 1.2, ease: "power2.out" }).to(barRef.current, { width: "100%", duration: 2, ease: "power1.inOut" }, "<+=0.3");

			finishLoading();
		};

		if (document.readyState === "complete") {
			handleLoad();
		} else {
			window.addEventListener("load", handleLoad);
			return () => window.removeEventListener("load", handleLoad);
		}
	}, []);

	useEffect(() => {
		document.body.style.overflowY = loaded ? "auto" : "hidden";
	}, [loaded]);

	if (loaded) return <>{children}</>;

	return (
		<div
			ref={loadingRef}
			className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center text-white transition-opacity duration-500 overflow-hidden">
			{/* Logo */}
			<img
				src="/images/logo.png"
				alt="Logo"
				ref={logoRef}
				className="w-20 opacity-0"
			/>

			{/* Loading Bar */}
			<div className="mt-6 w-48 h-1 bg-white/20 overflow-hidden rounded-full">
				<div
					ref={barRef}
					className="h-full bg-white w-0"></div>
			</div>

			{/* Loading text */}
			<p className="mt-3 text-sm text-white/60 italic animate-pulse">Preparing your journey...</p>
		</div>
	);
}
