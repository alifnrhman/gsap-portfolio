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

export const skills = {
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
