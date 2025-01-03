import styles from './styles.ts';
import Title from './components/Title.tsx';
import Aboutme from './components/Aboutme.tsx';
import Skill from './components/Skill.tsx';
import Experience from './components/Experience.tsx';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';

function App() {
	return (
		<div className={`w-full ${styles.flexColumn} ${styles.flexCenter} max-md:my-[-30rem] `}>
			<div
				className={`max-md:scale-50 md:w-[43.75rem] ${styles.flexColumn} gap-[15em] md:my-[calc((100vh-7.75rem)/2-1rem)] max-md:mb-[-30rem]`}>
				<Title />
				<Navbar />
				<Aboutme id="aboutme" />
				<Skill id="skill" />
				<Experience id="experience" />
			</div>
			<Footer />
		</div>
	);
}

export default App;
