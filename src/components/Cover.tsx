import { FC } from 'react';
import ProfilePic from './cover/ProfilePic';
import ProfileName from './cover/ProfileName';
import Button from './ui/Button';
import { Youtube } from 'lucide-react';
import Link from 'next/link';

interface CoverProps {}

const Cover: FC<CoverProps> = ({}) => {
    return (
        <div className="flex rounded-lg w-full  bg-[url('/images/cover.jpeg')] bg-no-repeat bg-cover">
            <div className="flex justify-center md:rounded-ld overflow-hidden md:px-10 py-5 bg-blur backdrop-filter backdrop-blur-md w-full gap-2 md:gap-10">
                <ProfilePic />
                <div className="flex md:flex-1 flex-col justify-center gap-4">
                    <div className="flex justify-between items-center gap-5 ">
                        <ProfileName />
                        <Link
                            className="hidden md:block"
                            target="_blank"
                            href="https://www.youtube.com/@FastTrackNishant/featured"
                        >
                            <Button variant="primary" sizes={'small'}>
                                <Youtube />
                                <span className="hidden md:block">
                                    Subscribe Me on Youtube
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;
