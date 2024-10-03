import date from '../assets/svgs/date.svg';
import Image from 'next/image';
import github from '../assets/svgs/github.svg';
import email from '../assets/svgs/email.svg';
import location from '../assets/svgs/location.svg';
export default function Home() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<div className="glass flex justify-center items-center">
				<div className="w-[843px] h-[377px] flex flex-col justify-between">
					<div className="w-full flex justify-between items-start">
						<div className="text-[55px] font-syneExtraBold leading-[66px] text-gradient">
							Full
							<br />
							Stack
							<br />
							Developer
						</div>
						<div className="flex gap-[13px]">
							<Image src={date} alt="date" />
							<Image src={github} alt="github" />
							<Image src={email} alt="email" />
							<Image src={location} alt="location" />
						</div>
					</div>
					<div className="w-full flex justify-between items-center">
						<div className="flex gap-[13px] font-inconsolataMedium h-fit">
							<div className="bg-gradient-white py-[0.5px] px-[1px] rounded-[8px] flex justify-center items-center">
								<div className="bg-black text-white py-[8px] px-[21px] rounded-[8px]">Projects</div>
							</div>
							<div className="text-black bg-gradient-white py-[8px] px-[21px] border-[1px] border-white rounded-[8px]">Blogs</div>
						</div>
						<div className="text-white text-[55px] font-syneExtraBold leading-[66px]">JAEHWAN</div>
					</div>
				</div>
			</div>
			<div className="white-ellipse absolute bottom-2 left-32" />
			<div className="black-ellipse absolute top-6 right-44" />
		</div>
	);
}
