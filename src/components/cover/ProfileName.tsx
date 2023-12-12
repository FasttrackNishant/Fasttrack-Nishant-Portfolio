import Link from 'next/link';
import { FC } from 'react';
import Button from '../ui/Button';
import { Youtube } from 'lucide-react';

interface ProfileNameProps {}

const ProfileName: FC<ProfileNameProps> = ({}) => {
	return (
		<div className="text-3xl flex flex-col font-bold text-highlight">
			Nishant Patil
			<div className="text-sm font-thin flex justify-between items-center">
				@ftnishant
				<Link
					className="block md:hidden"
					href="https://www.youtube.com/@FastTrackNishant/featured"
					target="_blank">
					<Button variant="primary" sizes={'iconOnly'}>
						<Youtube />
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default ProfileName;
