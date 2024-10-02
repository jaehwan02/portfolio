import './background.css';
import Image from 'next/image';

export default function Background() {
	return (
		<div className="background-container">
			<Image
				src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1231630/moon2.png"
				alt="moon"
				width={1000}
				height={1000}
				style={{ width: '50vh', height: '50vh' }}
			/>
			<div className="stars" />
			<div className="twinkling" />
			<div className="clouds" />
		</div>
	);
}
