import React from 'react';
import Introduce from '@/components/about/Introduce';

const page = () => {
	return (
		<div className='gap-3 '>
			<div className="  bg-cardPrimary gap-6 p-6 pr-5 mx-3 shadow-lg sm:px-3 md:mx-3 ">
				<div className="    ">
					<Introduce />
				</div>
			</div>
			<div className=" bg-cardPrimary gap-6 p-6 mt-3 pr-5 mx-3 shadow-lg sm:px-3 md:mx-3 ">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde
				minus, soluta recusandae corporis ipsa officia culpa a, at ad
				corrupti omnis autem dicta molestiae magnam. Asperiores, culpa?
				Dolore maiores natus reprehenderit ullam nemo aut!
			</div>
		</div>
	);
};

export default page;
