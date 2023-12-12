import { FC } from 'react';
import Intro from './sections/hero/Intro';

interface IntroductionProps {}

const Introduction: FC<IntroductionProps> = ({}) => {
	return (
		<div className="col-span-1 bg-cardPrimary gap-6 p-6 shadow-lg md:col-span-2 lg:col-span-1">
			<Intro />
		</div>
	);
};

export default Introduction;
