import React from 'react';
import styles from '../styles.ts';

function SectionLayout({ children, title, id }: { children: React.ReactNode; title: string; id?: string }) {
	return (
		<section className={`${styles.flexColumn} gap-[3.75rem]`} id={id}>
			<h1 className="text-[2rem]">{title}::</h1>
			{children}
		</section>
	);
}
export default SectionLayout;
