// >> Modules
import styles from './aiAnalysis.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import aiImg from '@/public/aiImg.png';
import aiImgLine from '@/public/aiImgLine.png';
import aiBgLeft from '@/public/aiBgLeft.png';
import aiBgRight from '@/public/aiBgRight.png';

// >> Script
function AiAnalysis(props) {
	return (
		<div className={styles.section} id="AI">
			<div className={styles.inside}>
				<div className={styles.aiBgLeft}>
					<Image
						src={aiBgLeft}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>

				<div className={styles.aiBgRight}>
					<Image
						src={aiBgRight}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>

				<Typography className={styles.safe}>SAF</Typography>
				<Typography className={styles.groku}>GROK</Typography>

				<Typography className={styles.desc}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Id volutpat lacus laoreet non curabitur. Ut etiam
					sit amet nisl purus in.
				</Typography>
				<div className={styles.centerImg}>
					<Image
						src={aiImg}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
					<div className={styles.line}>
						<Image
							src={aiImgLine}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
				</div>
				<Typography className={styles.title}>Ai analysis</Typography>
			</div>
		</div>
	);
}

export default AiAnalysis;
