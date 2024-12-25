import '../styles.ts';
import styles from '../styles.ts';
import SectionLayout from './SectionLayout.tsx';
import github from '../assets/github.png';
import velog from '../assets/velog.png';

function Experience({ id }: { id: string }) {
	const experiences = [
		{
			year: '2024',
			message: 'Hello Wolrd!',
			contents: [
				{
					name: '2024학년도 1학년 2반',
					role: '반장',
					github: null,
					velog: null,
				},
				{
					name: '2024 교내 클론 웹페이지 경진대회',
					role: '대상(1위)',
					github: 'https://github.com/jaehwan02/woghks.com',
					velog: null,
				},
				{
					name: '2024 여름 AI캠프 교내 해커톤',
					role: '최우수상(2위)',
					github: 'https://github.com/jaehwan02/FamilyGO',
					velog:
						'https://velog.io/@jaehwan0129/%EB%B6%80%EC%86%8C%EB%A7%88%EA%B3%A0-1%ED%95%99%EA%B8%B0-%EA%B5%90%EB%82%B4-%ED%95%B4%EC%BB%A4%ED%86%A4-%ED%9A%8C%EA%B3%A0%EB%A1%9D',
				},
				{
					name: '1학년 1학기 컴퓨터 구조, 사회',
					role: '교과 우수상',
					github: null,
					velog: null,
				},
				{
					name: '2024 교내 AI 공모전',
					role: '우수상(3위)',
					github: 'https://github.com/Team-Found/SANDDEOT-App',
					velog:
						'https://velog.io/@jaehwan0129/%EA%B5%90%EB%82%B4-AI-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EB%B0%8F-AI-KOREA-%ED%9A%8C%EA%B3%A0%EB%A1%9D',
				},
				{
					name: 'AI KOREA 2024',
					role: 'Exhibitor',
					github: 'https://github.com/Team-Found/SANDDEOT-App',
					velog:
						'https://velog.io/@jaehwan0129/%EA%B5%90%EB%82%B4-AI-%EA%B3%B5%EB%AA%A8%EC%A0%84-%EB%B0%8F-AI-KOREA-%ED%9A%8C%EA%B3%A0%EB%A1%9D',
				},
				{
					name: '제 11회 대한민국 SW융합 해커톤 대회',
					role: '예선 통과',
					github: 'https://github.com/FindOut-Hackathon',
					velog:
						'https://velog.io/@jaehwan0129/SW%EC%9C%B5%ED%95%A9-%ED%95%B4%EC%BB%A4%ED%86%A4-%EB%8C%80%ED%9A%8C-%ED%9A%8C%EA%B3%A0%EB%A1%9D',
				},
				{
					name: '2024 대한민국 고등학생 소프트웨어 개발 공모전',
					role: '대상(1위)',
					github: 'https://github.com/Team-Found/SANDDEOT-App',
					velog: null,
				},
				{
					name: '제9회 대한민국 소프트웨어 대전, 소프트웨이브 2024',
					role: 'Exhibitor',
					github: 'https://github.com/Team-Found/SANDDEOT-App',
					velog: null,
				},
			],
		},
	];

	return (
		<SectionLayout title="경험" id={id}>
			<div className={`w-full`}>
				{experiences.map((experience) => (
					<div className={`${styles.flexBetween}`}>
						<div className={`flex flex-col justify-start w-[7rem]`}>
							<h1 className="font-GB text-[2.5rem] max-md:text-[2rem]">{experience.year}</h1>
							<i className="text-[1rem] max-md:text-[0.8rem]">{experience.message}</i>
						</div>
						<div className={`${styles.flexColumn} w-[34rem] gap-[1.5rem]`}>
							{experience.contents.map((content) => (
								<div className={`flex gap-[0.625rem]`}>
									<div className={`flex gap-[0.5rem]`}>
										<i>{content.name}</i>
										<i className="font-GB">{content.role}</i>
									</div>
									{content.github && (
										<a href={content.github}>
											<img src={github} alt="github" className="w-[1.25rem]" />
										</a>
									)}

									{content.velog && (
										<a href={content.velog}>
											<img src={velog} alt="velog" className="w-[1.25rem]" />
										</a>
									)}
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</SectionLayout>
	);
}
export default Experience;
