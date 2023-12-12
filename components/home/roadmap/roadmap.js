// >> Modules
import styles from './roadmap.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

import topShadow from '@/public/topShadow.png';
import roadmapPhases from '@/public/roadmapPhases.png';
import roadmapCorners from '@/public/roadmapCorners.png';
import triangle from '@/public/icons/triangle.svg';

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
	const [selected, setSelected] = useState(1);

	const changePhase = (type) => {
		let newPhase = selected;
		if (type === 'left') {
			newPhase = newPhase - 1;
		} else {
			newPhase = newPhase + 1;
		}

		if (newPhase <= 0) {
			setSelected(4);
		} else if (newPhase >= 5) {
			setSelected(1);
		} else {
			setSelected(newPhase);
		}
	};

	return (
		<div className={styles.section} id="Roadmap">
			<div className={styles.inside}>
				<div className={styles.corners}>
					<div
						className={styles.leftCorner}
						data-aos="fade"
						onClick={() => {
							changePhase('left');
						}}
					>
						<Image
							src={roadmapCorners}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<span>
							<Image
								src={triangle}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</span>
					</div>
					<div
						className={styles.rightCorner}
						data-aos="fade"
						onClick={() => {
							changePhase('right');
						}}
					>
						<Image
							src={roadmapCorners}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
						<span>
							<Image
								src={triangle}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</span>
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
						data-selected={selected === 1 ? true : false}
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
						data-selected={selected === 2 ? true : false}
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
						data-selected={selected === 3 ? true : false}
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
						data-selected={selected === 4 ? true : false}
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
