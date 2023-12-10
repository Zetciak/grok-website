// >> Modules
import styles from './tokenomics.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import tokenomics from '@/public/tokenomics.png';
import tokenomicsBg from '@/public/tokenomicsBg.png';

const list = [
	{ title: 'Seed Round', percent: 25, color: '#4E022F' },
	{ title: 'Burn', percent: 15, color: '#029F66' },
	{ title: 'Presale Round', percent: 15, color: '#041C28' },
	{ title: 'Investors', percent: 15, color: '#0458AD' },
	{ title: 'Private Round', percent: 5, color: '#01241C' },
	{ title: 'Save', percent: 5, color: '#150387' },
	{ title: 'Referals', percent: 10, color: '#016956' },
	{ title: 'Dex', percent: 10, color: '#4B0477' },
];

// >> Script
function Tokenomics(props) {
	return (
		<div className={styles.section} id="Tokenomics">
			<div className={styles.inside}>
				<div className={styles.bg1}>
					<Image
						src={tokenomicsBg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.bg2}>
					<Image
						src={tokenomicsBg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.bg3}>
					<Image
						src={tokenomicsBg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.left}>
					<Image
						src={tokenomics}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.right}>
					<Typography className={styles.title}>Tokenomics</Typography>

					<Typography className={styles.desc}>
						Tokenomics was designed by us in such a way as to
						guarantee the project&apos;s stable development,
						listings on the best CEXs, and thus reaching a wider
						community and increasing growth.
					</Typography>

					<div className={styles.list}>
						{list.map((element, index) => {
							return (
								<div className={styles.point} key={index}>
									<div
										className={styles.square}
										style={{
											background: `${element.color}`,
										}}
									></div>
									<Typography>
										[{element.percent}%] - {element.title}
									</Typography>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tokenomics;
