import styles from '../styles.ts';
import jaehwan from '../assets/jaehwan.png';

function Title() {
	return (
		<div className={`flex gap-[1.75rem] items-center`}>
			<img src={jaehwan} alt="" className="w-[7.75rem] h-[7.75rem]" />
			<div className={`${styles.flexBetween} items-center w-full`}>
				<h1 className="font-GL text-[2.25rem] leading-[2.8rem] align-middle mt-2">
					안녕하세요!
					<br />
					<b className="font-GM">느린 생각</b>을 하는
					<br />
					개발자 <b className="font-GM">이재환</b>입니다.
				</h1>
				<div className={`font-GL ${styles.flexColumn} gap-[2rem] items-end`}>
					<a href="https://github.com/jaehwan02" className="hover:font-GM transition-all duration-300">
						github
					</a>
					<a href="https://velog.io/@jaehwan0129/posts" className="hover:font-GM">
						velog
					</a>
					<a
						className="hover:font-GM"
						onClick={() => {
							alert('아직 준비중이에요!');
						}}>
						resume
					</a>
				</div>
			</div>
		</div>
	);
}

export default Title;
