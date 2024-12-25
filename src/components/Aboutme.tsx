import bssm from '../assets/bssm.png';
import '../styles.ts';
import styles from '../styles.ts';
import SectionLayout from './SectionLayout.tsx';

function Aboutme({ id }: { id: string }) {
	return (
		<SectionLayout title="나에 대해서" id={id}>
			<div className={`${styles.flexBetween} relative`}>
				<div className={`${styles.flexColumn} gap-[1.5rem]`}>
					<i>이메일: jhrick0129@gmail.com</i>
					<i>연락처: 010-5042-7734</i>
					<i>부산소프트웨어마이스터고등학교(공통과정) 재학중</i>
					<i>빠른 결정보다는 깊이 있는 생각을 통해 문제를 해결합니다.</i>
				</div>
				<img src={bssm} alt="" className="w-[20rem] absolute top-[-1.3rem] right-0" />
			</div>
		</SectionLayout>
	);
}
export default Aboutme;
