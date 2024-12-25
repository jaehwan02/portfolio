import React, { useState } from 'react';
import styles from '../styles.ts';

import react from '../assets/React.png';
import javascript from '../assets/javascript.png';
import typescript from '../assets/typescript.png';
import htmlcss from '../assets/htmlcss.png';

const images = [htmlcss, javascript, typescript, react];

function SkillLayout({ children, contents, i }: { children: React.ReactNode; contents: string[]; i: number }) {
	const [hover, setHover] = useState(false);
	return (
		<div className={`${styles.flexBetween} relative`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
			<h1 className="font-GB text-[1.5rem] leading-[120%]">{children}</h1>
			<ul className={`${styles.flexColumn} gap-[1.5rem] text-[1rem] w-[34rem]`}>
				{contents.map((content) => (
					<li className="">{content}</li>
				))}
			</ul>
			<img
				src={images[i]}
				alt={images[i]}
				className={`h-[11rem] absolute top-[-1.875rem] left-0 z-[-1] transition-opacity duration-500 ${
					hover ? 'opacity-100' : 'opacity-0'
				}`}
			/>
		</div>
	);
}
export default SkillLayout;
