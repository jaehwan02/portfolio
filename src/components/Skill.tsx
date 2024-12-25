import styles from '../styles.ts';
import SectionLayout from './SectionLayout.tsx';
import SkillLayout from './SkillLayout.tsx';

function Skill({ id }: { id: string }) {
	const skills = [
		{
			title: 'HTML\n/CSS',
			contents: [
				'HTML5를 활용하여 웹 페이지의 구조와 콘텐츠를 설계할 수 있습니다.',
				'미디어 쿼리를 활용하여 반응형 웹 디자인을 구현할 수 있습니다.',
				'CSS 애니메이션을 사용하여 동적인 사용자 경험을 구현할 수 있습니다.',
			],
		},
		{
			title: 'Java\nScript',
			contents: [
				'ES6 문법을 사용하여 변수, 함수, 객체, 배열 등을 선언하고 활용할 수 있습니다.',
				'DOM을 조작하여 동적인 웹 페이지를 구현할 수 있습니다.',
				'Promise와 async/await을 활용하여 비동기 코드를 작성할 수 있습니다.',
			],
		},
		{
			title: 'Type\nScript',
			contents: [
				'타입스크립트로 React/Next js 프로젝트를 진행할 수 있습니다.',
				'타입 추론과 명시적 타입 지정을 적절히 조합하여 사용할 수 있습니다.',
				'JavaScript 코드베이스를 TypeScript로 마이그레이션할 수 있습니다.',
			],
		},
		{
			title: 'React',
			contents: [
				'React 컴포넌트를 활용하여 웹 페이지를 구성할 수 있습니다.',
				'React Hook을 사용하여 함수형 컴포넌트를 작성할 수 있습니다.',
				'Redux, Zustand를 사용해 전역 상태를 관리할 수 있습니다.',
			],
		},
	];

	return (
		<SectionLayout title="기술" id={id}>
			<div className={`${styles.flexColumn} gap-[3.75rem]`}>
				{skills.map((skill, i) => (
					<SkillLayout contents={skill.contents} i={i}>
						{skill.title}
					</SkillLayout>
				))}
			</div>
		</SectionLayout>
	);
}
export default Skill;
