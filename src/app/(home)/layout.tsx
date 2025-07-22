import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import ScrollProvider from "@/components/ScrollProvider";

const raleway = Raleway({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Alif Nurahman | Full Stack Developer",
	description: "A portfolio showcasing my work and skills.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${raleway.className} antialiased overflow-x-hidden`}>
				<ScrollProvider />
				{children}
			</body>
		</html>
	);
}
