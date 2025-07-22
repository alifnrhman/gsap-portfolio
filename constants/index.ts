import MongoDBIcon from "@/assets/icons/databases/MongoDBIcon";
import MySQLIcon from "@/assets/icons/databases/MySQLIcon";
import ExpressJsIcon from "@/assets/icons/frameworks/ExpressJsIcon";
import GSAPIcon from "@/assets/icons/frameworks/GSAPIcon";
import NextJsIcon from "@/assets/icons/frameworks/NextJsIcon";
import NodeJsIcon from "@/assets/icons/frameworks/NodeJsIcon";
import ReactJsIcon from "@/assets/icons/frameworks/ReactJsIcon";
import JavaScriptIcon from "@/assets/icons/languages/JavaScriptIcon";
import PHPIcon from "@/assets/icons/languages/PHPIcon";
import TypeScriptIcon from "@/assets/icons/languages/TypeScriptIcon";
import BootstrapIcon from "@/assets/icons/tools/BootstrapIcon";
import FigmaIcon from "@/assets/icons/tools/FigmaIcon";
import PostmanAPIIcon from "@/assets/icons/tools/PostmanAPIIcon";
import TailwindCSSIcon from "@/assets/icons/tools/TailwindCSSIcon";

type Skill = {
	name: string;
	Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const skills: Record<string, Skill[]> = {
	languages: [
		{
			name: "JavaScript",
			Icon: JavaScriptIcon,
		},
		{
			name: "TypeScript",
			Icon: TypeScriptIcon,
		},
		{
			name: "PHP",
			Icon: PHPIcon,
		},
	],
	frameworks: [
		{
			name: "React.js",
			Icon: ReactJsIcon,
		},
		{
			name: "Next.js",
			Icon: NextJsIcon,
		},
		{
			name: "Node.js",
			Icon: NodeJsIcon,
		},
		{
			name: "Express.js",
			Icon: ExpressJsIcon,
		},
		{
			name: "GSAP",
			Icon: GSAPIcon,
		},
	],
	databases: [
		{
			name: "MySQL",
			Icon: MySQLIcon,
		},
		{
			name: "MongoDB",
			Icon: MongoDBIcon,
		},
	],
	tools: [
		{
			name: "Postman API",
			Icon: PostmanAPIIcon,
		},
		{
			name: "Tailwind CSS",
			Icon: TailwindCSSIcon,
		},
		{
			name: "Bootstrap",
			Icon: BootstrapIcon,
		},
		{
			name: "Figma",
			Icon: FigmaIcon,
		},
	],
};

type Project = {
	id: number;
	name: string;
	description: string;
	images: string[];
	skills: string[];
	github?: string;
	live_site?: string;
};

export const projects: Project[] = [
	{
		id: 1,
		name: "Jeep Workshop Management System",
		description: "A web-based system to manage Jeep workshop operations, including service tracking, spare part usage, invoicing, and inventory control.",
		images: ["jhs.png", "jhs-2.png"],
		skills: ["React.js", "PHP", "MySQL", "Tailwind CSS"],
	},
	{
		id: 2,
		name: "FIK Corner",
		description: "A website for UPNVJ's Computer Science Faculty students to view and participate in recent activities around the faculty. Built as a final project for the Web Programming course.",
		images: ["fik-corner.png"],
		skills: ["PHP Native", "MySQL", "Tailwind CSS"],
		github: "https://github.com/alifnrhman/fik-corner",
	},
	{
		id: 3,
		name: "UPNVJ Library",
		description: "A system for UPNVJ librarian to manage books, library members, and track books status. Built as a final project for the Database Management course.",
		images: ["upnvj-library.png"],
		skills: ["React", "Express.js", "MySQL", "Bootstrap"],
		github: "https://github.com/alifnrhman/upnvjlibrary",
	},
	{
		id: 4,
		name: "BMI Calculator",
		description: "A web-based application to calculate Body Mass Index (BMI) and potential health risks by body weight category. Built as a final project for the RevoU Software Engineering Fundamental course.",
		images: ["bmi-calculator.png"],
		skills: ["HTML", "CSS", "JavaScript"],
		github: "https://github.com/revou-fundamental-course/5-aug-24-alifnrhman",
		live_site: "https://revou-fundamental-course.github.io/5-aug-24-alifnrhman/",
	},
];
