import React from 'react';
import Image from 'next/image';
import code from '../../../public/about/code.jpg';
import styles from '@/app/styles/app.module.css';

const IntroCards = () => {
	return (
		<div className="">
			<div className="flex-row  my-4 items-center justify-center p-2 sm:flex md:flex-row lg:flex-row  ">
				<div className="flex-col w-full sm:w-full mx-3 md:w-[60%] lg:mx-6  ">
					<p
						className="text-xl mb-4 font-poppins  lg:text-2xl 
					 ">
						Programmer
					</p>
					<p className="text-sm  text-gray-400 sm:mx-auto lg:text-base">
						Passionate about programming, specializing in the MERN
						stack (MongoDB, Express.js, React, Node.js) for scalable
						web applications. Eager to contribute to meaningful
						projects and actively involved in open-source. Explore
						my GitHub for more.
					</p>
				</div>
				<Image
					src={code}
					width={400}
					height={400}
					alt="Coding image"
					className=" my-4  mx-auto  rounded-md  hover:scale-105 transition-all duration-200 ease-in shadow-md hover:shadow-yellow-200 sm:mx-auto"
				/>
			</div>
		</div>
	);
};

export default IntroCards;
