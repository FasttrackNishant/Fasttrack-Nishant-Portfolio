import React from 'react';
import Introduce from '@/components/about/Introduce';
import IntroCards from '@/components/about/IntroCards';
import { introCards } from '@/components/utils/Data';
import AboutCardSection from '@/components/about/aboutSection/AboutCardSection';
const page = () => {
	return (
		<div className="gap-3 mb-4 ">
			<div className="  bg-cardPrimary rounded-sm gap-6 p-3 mx-3 shadow-lg sm:px-3 md:mx-3 ">
				<Introduce />
			</div>
			<div className=" bg-cardPrimary rounded-sm gap-6 p-3 mt-3  mx-3 shadow-lg sm:px-3 md:mx-3 ">
				{/* <IntroCards /> */}
				<AboutCardSection data={introCards} />
			</div>
		</div>
	);
};

export default page;
