import { FC, ReactNode } from 'react';
import {
	ChevronRight,
	Gamepad2,
	Share2,
	Shirt,
	Ticket,
	Navigation,
} from 'lucide-react';
import { FaRegUser } from 'react-icons/fa';
import { IoLibraryOutline } from 'react-icons/io5';
import { FaPenToSquare } from "react-icons/fa6";
import Link from 'next/link';

interface MoreProjectsCardsProps {
	title: string;
	icon: string;
	href?: string;
	techStack: string;
}

const iconsMap = {
	shirt: <Shirt />,
	share: <Share2 />,
	lottery: <Ticket />,
	game: <Gamepad2 />,
	navigation: <Navigation />,
	user: <FaRegUser />,
	library: <IoLibraryOutline />,
	pen: <FaPenToSquare  />,
};

const MoreProjectsCards: FC<MoreProjectsCardsProps> = ({
	title,
	href,
	icon,
	techStack,
}) => {
	return (
		<Link target="_blank" href={href || '/'}>
			<div className="flex items-center gap-1 text-primary rounded-lg">
				{
					//@ts-ignore
					iconsMap[icon]
				}
				<div className="flex flex-1 flex-col px-4 py-2">
					<div className="flex text-sm font-medium">{title}</div>
					<div className="flex text-info text-xs ">{techStack}</div>
				</div>
				<ChevronRight />
			</div>
		</Link>
	);
};

export default MoreProjectsCards;
