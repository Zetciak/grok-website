// >> Modules
import styles from './roadmap.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import topShadow from '@/public/topShadow.png';
import roadmapPhases from '@/public/roadmapPhases.png';
import roadmapCorners from '@/public/roadmapCorners.png';

const phase1 = [
	'Market Research',
	'Launching the website',
	'Launching social media',
	'Launching testnet',
	'Launching the block explorer',
	'Onboarding KOLs',
	'Launching the Faucet',
	'Deploying $SPACE on testnet',
];

const phase2 = [
	'Market Research',
	'Launching the website',
	'Launching social media',
	'Launching testnet',
	'Launching the block explorer',
	'Onboarding KOLs',
	'Launching the Faucet',
	'Deploying $SPACE on testnet',
];

const phase3 = [
	'Market Research',
	'Launching the website',
	'Launching social media',
	'Launching testnet',
	'Launching the block explorer',
	'Onboarding KOLs',
	'Launching the Faucet',
	'Deploying $SPACE on testnet',
];

const phase4 = [
	'Market Research',
	'Launching the website',
	'Launching social media',
	'Launching testnet',
	'Launching the block explorer',
	'Onboarding KOLs',
	'Launching the Faucet',
	'Deploying $SPACE on testnet',
];

// >> Script
function Roadmap(props) {
	return (
		<div className={styles.section} id="Roadmap">
			<div className={styles.inside}>
				<div className={styles.corners}>
					<div className={styles.leftCorner} data-aos="fade">
						<Image
							src={roadmapCorners}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.rightCorner} data-aos="fade">
						<Image
							src={roadmapCorners}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
				</div>
				<div className={styles.topShadow}>
					<Image
						src={topShadow}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
				<div className={styles.phases}>
					<div
						className={styles.onePhase}
						data-value="phase1"
						data-aos="fade-up"
					>
						<div className={styles.phaseTitle}>
							<Typography>PHASE 1</Typography>
						</div>

						{phase1.map((element, index) => {
							return (
								<div className={styles.phasePoint} key={index}>
									<Typography>{element}</Typography>
								</div>
							);
						})}
					</div>
					<div
						className={styles.onePhase}
						data-value="phase2"
						data-aos="fade-up"
					>
						<div className={styles.phaseTitle}>
							<Typography>PHASE 2</Typography>
						</div>

						{phase2.map((element, index) => {
							return (
								<div className={styles.phasePoint} key={index}>
									<Typography>{element}</Typography>
								</div>
							);
						})}
					</div>
					<div
						className={styles.onePhase}
						data-value="phase3"
						data-aos="fade-up"
					>
						<div className={styles.phaseTitle}>
							<Typography>PHASE 3</Typography>
						</div>

						{phase3.map((element, index) => {
							return (
								<div className={styles.phasePoint} key={index}>
									<Typography>{element}</Typography>
								</div>
							);
						})}
					</div>
					<div
						className={styles.onePhase}
						data-value="phase4"
						data-aos="fade-up"
					>
						<div className={styles.phaseTitle}>
							<Typography>PHASE 4</Typography>
						</div>

						{phase4.map((element, index) => {
							return (
								<div className={styles.phasePoint} key={index}>
									<Typography>{element}</Typography>
								</div>
							);
						})}
					</div>
				</div>
				<div className={styles.bottomPhases}>
					<Image
						src={roadmapPhases}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</div>
			</div>
		</div>
	);
}

export default Roadmap;
