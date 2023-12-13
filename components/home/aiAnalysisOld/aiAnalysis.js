// >> Modules
import styles from './aiAnalysis.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

import aiImg from '@/public/aiImg.png';
import analysisImg from '@/public/analysisImg.png';
import reportsImg from '@/public/reportsImg.png';
import taxImg from '@/public/taxImg.png';
import aiImgLine from '@/public/aiImgLine.png';
import aiBgLeft from '@/public/aiBgLeft.png';
import aiBgRight from '@/public/aiBgRight.png';

const points = [
	{
		title: 'Ai Analysis',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Ut etiam sit amet nisl purus in.',
		image: aiImg,
	},

	{
		title: 'Tax Report',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Ut etiam sit amet nisl purus in.',
		image: taxImg,
	},

	{
		title: 'Lorem Analysis',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Ut etiam sit amet nisl purus in.',
		image: analysisImg,
	},

	{
		title: 'Calls Reports',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id volutpat lacus laoreet non curabitur. Ut etiam sit amet nisl purus in.',
		image: reportsImg,
	},
];

// >> Script
function AiAnalysis(props) {
	const [selectedPoint, setSelectedPoint] = useState(points[0]);
	const [selectedPointNumber, setSelectedPointNumber] = useState(1);

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

				<Typography className={styles.desc} data-aos="fade-up">
					{points.map((element, index) => {
						return (
							<span
								data-selected={
									selectedPointNumber === index + 1
										? true
										: false
								}
								key={index}
							>
								{element.text}
							</span>
						);
					})}
				</Typography>
				<div className={styles.centerImg} data-aos="fade-up">
					{points.map((element, index) => {
						return (
							<span
								data-selected={
									selectedPointNumber === index + 1
										? true
										: false
								}
								key={index}
							>
								<Image
									src={element.image}
									alt=""
									quality={99}
									priority={true}
									className="image"
								/>
							</span>
						);
					})}

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
				<Typography className={styles.title} data-aos="fade-right">
					{points.map((element, index) => {
						return (
							<span
								data-selected={
									selectedPointNumber === index + 1
										? true
										: false
								}
								key={index}
							>
								{element.title}
							</span>
						);
					})}
				</Typography>

				<div className={styles.selectDots}>
					{points.map((element, index) => {
						return (
							<div
								className={styles.dot}
								data-selected={
									selectedPointNumber === index + 1
										? true
										: false
								}
								key={index}
								onClick={() => {
									setSelectedPointNumber(index + 1);
									setSelectedPoint(element);
								}}
							></div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default AiAnalysis;
