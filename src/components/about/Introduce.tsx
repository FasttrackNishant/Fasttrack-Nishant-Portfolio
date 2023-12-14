import React, { useState } from 'react';
import AboutImg from '../../../public/images/about.jpg';
import Image from 'next/image';
import styles from '@/app/styles/app.module.css';

const Introduce = () => {
	return (
		<div className="flex-col flex-1 gap-3  items-center justify-center   sm:flex-row   md:flex  md:flex-row lg:flex-row ">
			<Image
				className="  rounded-lg sm:m-auto"
				src={AboutImg}
				alt="About Image"
				width={500}
				height={400}
			/>
			<div className="bg-cardPrimary flex flex-col items-center my-3">
				<h3 className="text-base w-fit  font-bold sm:text-xl  md:text-3xl   ">
					<span className={styles.wavetext}>
						👋 Hi ! I am Nishant Patil 🙏{' '}
					</span>
				</h3>
				<p className="my-2 text-sm justify-evenly font-serif text-secondary  sm:text-sm text-center">
					{' '}
					Tech enthusiast pursuing a B.Tech in Computer Engineering at
					Pune University. Passionate about programming and
					development.{' '}
				</p>
			</div>
		</div>
	);
};

export default Introduce;
