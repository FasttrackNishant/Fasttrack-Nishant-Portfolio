import React, { FC } from 'react';
import Image from 'next/image';

interface AboutCardProps {
	title: string;
	desc: string;
	src?: string;
	reverse?: boolean;
}

const AboutCard: FC<AboutCardProps> = ({ title, desc, src, reverse }) => {
	return (
		<>
			<div
				className={`flex-row my-4 items-center justify-center p-2 sm:flex md:flex-row lg:flex-row ${
					reverse
						? 'flex-row-reverse md:flex-row-reverse lg:flex-row-reverse '
						: '' // Reverse the layout order if 'reverse' prop is true
				}`}>
				<div className="flex-col w-full sm:w-full mx-3 md:w-[60%] lg:mx-6  ">
					<p
						className="text-xl mb-4 font-poppins  lg:text-2xl 
					 ">
						{title}
					</p>
					<p className="text-sm  text-gray-400 sm:mx-auto lg:text-base">
						{desc}
					</p>
				</div>
				<Image
					src={`/about/${src}`}
					width={400}
					height={400}
					alt="Coding image"
					className=" my-4  mx-auto  rounded-md  hover:scale-105 transition-all duration-200 ease-in shadow-md hover:shadow-yellow-200 sm:mx-auto"
				/>
			</div>
		</>
	);
};

export default AboutCard;
