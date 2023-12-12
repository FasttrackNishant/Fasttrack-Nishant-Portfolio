import React from 'react';
import AboutImg from '../../../public/images/about.jpg';
import Image from 'next/image';

const Introduce = () => {
	return (
		<div className="flex-col flex-1 gap-3 items-center justify-center   sm:flex-col md:flex  md:flex-row lg:flex-row ">
			<Image
				className="  rounded-lg"
				src={AboutImg}
				alt="About Image"
				width={500}
				height={400}
			/>
			<div className="bg-cardPrimary flex flex-col items-center ">
				<h3 className="font-bold  text-3xl p-4  ">
					👋HI ! I am Nishant Patil 🙏
				</h3>
				<p className="mt-2 px-4 justify-ev font-serif text-secondary">
					{' '}
					A tech domain Personality, Pursuing a B.Tech degree in
					Computer Engineering at Pune University. I am Passionate
					about Programming and development stuff.
				</p>
			</div>
		</div>
	);
};

export default Introduce;
