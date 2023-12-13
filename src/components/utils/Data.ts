import {
	Gamepad2,
	Headphones,
	Image,
	LucideIcon,
	Share2,
	Shirt,
	Navigation,
	ShoppingCart,
	Ticket,
} from 'lucide-react';

export interface ISectionCardData {
	id: number;
	title: string;
	src: string;
	exp: string;
	snippetCount: number;
	progress: number;
	href?: string;
}

export interface IProjectSectionCardData {
	id: number;
	imageUrl?: string;
	icon?: string;
	title: string;
	techStack: string;
	href?: string;
}

export interface IntroCardData {
	id: number;
	title: string;
	desc: string;
	imageUrl?: string;
	reverse?: boolean;
}

export const projectCard: IProjectSectionCardData[] = [
	{
		id: 1,
		title: 'Study Notion',
		techStack: 'ReactJS NodeJs Express, MongoDB Tailwind CSS, REST API',
		imageUrl: 'studynotion.png',
		href: 'https://github.com/FasttrackNishant/Study-Notion-Platform-FInal',
	},
	{
		id: 2,
		title: 'Ecomzy-ShoppingCart',
		techStack: 'ReactJS, React-Redux ,Tailwind CSS , API Integration',
		imageUrl: 'ecomzy.png',
		href: 'https://github.com/FasttrackNishant/EcomZY',
	},
	{
		id: 3,
		title: 'RazorPay Clone',
		techStack: 'HTML,Javascript, Tailwind CSS',
		imageUrl: 'RazorPayClone.png',
		href: 'https://github.com/FasttrackNishant/RazorPayClone',
	},
	{
		id: 4,
		title: ' Random Gif Generator',
		techStack: ' ReactJS, Tailwind CSS, REST API ',
		imageUrl: 'randomgif.png',
		href: 'https://github.com/FasttrackNishant/Random_Gif_Generator',
	},
];

export const moreProjects = [
	{
		id: 1,
		title: 'Tour Planner',
		techStack: 'React JS , Tailwind CSS',
		icon: 'navigation',
		href: 'https://github.com/FasttrackNishant/plan-with-nishant',
	},
	{
		id: 2,
		title: 'FasttrackNishant Portfolio',
		techStack: 'HTML, CSS, Javascript',
		icon: 'user',
		href: 'https://github.com/nwaliaez/HardhatLottery',
	},
	{
		id: 3,
		title: 'Digital Library',
		techStack: 'HTML, CSS, Javascript , Bootstrap',
		icon: 'library',
		href: 'https://github.com/FasttrackNishant/Digital-Library',
	},

	{
		id: 4,
		title: 'Note WebApp',
		techStack: 'HTML,CSS, Javascript',
		icon: 'pen',
		href: 'https://github.com/FasttrackNishant/Note-Taking-WebApp',
	},
];

export const frontendCard: ISectionCardData[] = [
	{
		id: 1,
		title: 'HTML, CSS',
		src: '/tech/frontend/htmlcss.jpeg',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 90,
	},
	{
		id: 2,
		title: 'Tailwind',
		src: '/tech/frontend/tailwind.jpg',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 90,
	},
	{
		id: 3,
		title: 'Javascript, Typescript',
		src: '/tech/frontend/jsts.jpeg',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 85,
	},
	{
		id: 4,
		title: 'Reactjs',
		src: '/tech/frontend/reactjs.jpg',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 80,
	},
	{
		id: 5,
		title: 'Nextjs 13',
		src: '/tech/frontend/nextjs13.jpeg',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 80,
	},
];

export const backendCard: ISectionCardData[] = [
	{
		id: 1,
		title: 'NodeJs',
		src: '/tech/backend/nodejs.webp',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 90,
	},
	{
		id: 2,
		title: 'ExpressJs',
		src: '/tech/backend/express.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 90,
	},
	{
		id: 3,
		title: 'DenoJs',
		src: '/tech/backend/denojs.webp',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 60,
	},
	{
		id: 4,
		title: 'Next Auth',
		src: '/tech/backend/nextauth.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 90,
	},
	{
		id: 5,
		title: 'PHP',
		src: '/tech/backend/php.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 70,
	},
];

export const databaseCard: ISectionCardData[] = [
	{
		id: 1,
		title: 'MySQL',
		src: '/tech/database/mysql.jpeg',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 80,
	},
	{
		id: 2,
		title: 'MongoDB',
		src: '/tech/database/mongo.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 80,
	},
	{
		id: 3,
		title: 'Redis',
		src: '/tech/database/redis.jpeg',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 70,
	},
	{
		id: 4,
		title: 'PostgreSQL',
		src: '/tech/database/postgres.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 70,
	},
	{
		id: 5,
		title: 'Elastic Search',
		src: '/tech/database/elasticSearch.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 70,
	},
];

export const devopsCards: ISectionCardData[] = [
	{
		id: 1,
		title: 'Docker',
		src: '/tech/devops/docker.webp',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 80,
	},
	{
		id: 2,
		title: 'Kubernetes',
		src: '/tech/devops/k8s.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 80,
	},
	{
		id: 3,
		title: 'GIT',
		src: '/tech/devops/git.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 80,
	},
	{
		id: 4,
		title: 'Jenkins',
		src: '/tech/devops/jenkins.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 70,
	},
	{
		id: 5,
		title: 'Terraform',
		src: '/tech/devops/terraform.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 60,
	},
];

export const web3Cards: ISectionCardData[] = [
	{
		id: 1,
		title: 'Solidity',
		src: '/tech/web3/solidity.jfif',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 90,
	},
	{
		id: 2,
		title: 'Hardhat',
		src: '/tech/web3/hardhat.jpeg',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 80,
	},
	{
		id: 3,
		title: 'Metamask',
		src: '/tech/web3/metamask.webp',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 90,
	},
	{
		id: 4,
		title: 'Chainlink',
		src: '/tech/web3/chainlink.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 80,
	},
	{
		id: 5,
		title: 'OpenZeppelin',
		src: '/tech/web3/openzeppelin.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 70,
	},
];

export const otherCards: ISectionCardData[] = [
	{
		id: 1,
		title: 'Rest API',
		src: '/tech/others/rest.png',
		exp: '1 day ago',
		snippetCount: 1128,
		progress: 90,
	},
	// ,
	// {
	// 	id: 2,
	// 	title: 'SOAP API',
	// 	src: '/tech/others/soap.jpg',
	// 	exp: '1 day ago',
	// 	snippetCount: 1128,
	// 	progress: 70,
	// },
	// {
	// 	id: 3,
	// 	title: 'GraphQl',
	// 	src: '/tech/others/graphql.png',
	// 	exp: '1 day ago',
	// 	snippetCount: 1128,
	// 	progress: 70,
	// },
];

export const introCards: IntroCardData[] = [
	{
		id: 1,
		title: 'Programmer',
		desc: `Passionate about programming, specializing in the MERN
		stack (MongoDB, Express.js, React, Node.js) for scalable
		web applications. Eager to contribute to meaningful
		projects and actively involved in open-source. Explore
		my GitHub for more.`,
		imageUrl: 'code.jpg',
		reverse: false,
	},
	{
		id: 2,
		title: 'Content Creator',
		desc: `This is my self-exploration stage, where I create valuable content. Through blogging and YouTube, I share insights in the software industry on "Software Fortune" and cover personality development, finance, and investing on "The Fast Track Nishant."`,
		imageUrl: 'content.jpg',
		reverse: true,
	},
	{
		id: 3,
		title: 'Blogging',
		desc: `Passion drives me to blog and engage in creative writing. It opens new mental doors, expanding my thoughts and vision. Explore my blogs to delve into my perspectives.`,
		imageUrl: 'blog.jpg',
		reverse: false,
	},
];
