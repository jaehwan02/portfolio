import { useState, useEffect } from 'react';

function Navbar() {
	const [activeSection, setActiveSection] = useState<string | null>(null);

	useEffect(() => {
		const sections = document.querySelectorAll('section');
		const observerCallback = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		};
		const observerOptions = { threshold: 0.6 };
		const observer = new IntersectionObserver(observerCallback, observerOptions);
		sections.forEach((section) => observer.observe(section));
		return () => observer.disconnect();
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			});
		}
	};

	return (
		<nav className="sticky top-2 w-full z-10 flex justify-end">
			<ul className="flex gap-4 backdrop-blur-md px-4 py-2 rounded-full max-md:hidden">
				<li
					className={`cursor-pointer ${activeSection === 'aboutme' ? 'text-white' : 'text-gray-500'}`}
					onClick={() => scrollToSection('aboutme')}>
					나에 대해서
				</li>
				<li
					className={`cursor-pointer ${activeSection === 'skill' ? 'text-white' : 'text-gray-500'}`}
					onClick={() => scrollToSection('skill')}>
					기술
				</li>
				<li
					className={`cursor-pointer ${activeSection === 'experience' ? 'text-white' : 'text-gray-500'}`}
					onClick={() => scrollToSection('experience')}>
					경험
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
