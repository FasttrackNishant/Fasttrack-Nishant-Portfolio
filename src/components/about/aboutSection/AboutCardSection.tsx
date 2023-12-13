import React, { FC } from 'react';
import { IntroCardData } from '@/components/utils/Data';
import AboutCard from './AboutCard';

interface IntroCardDataProps {
	data: IntroCardData[];
}

const AboutCardSection: FC<IntroCardDataProps> = ({ data }) => {
	console.log(data);
	return (
		<div>
			{data.map((card) => (
				<AboutCard
					key={card.id}
					title={card.title}
					desc={card.desc}
					src={card.imageUrl}
					reverse={card.reverse}
				/>
			))}
		</div>
	);
};

export default AboutCardSection;
