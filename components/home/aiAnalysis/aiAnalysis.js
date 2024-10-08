// >> Modules
import styles from './aiAnalysis.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useWindowSize } from '@/hooks/useWindowSize';

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
	const targetRef = useRef(null);

	const size = useWindowSize();

	const { scrollYProgress } = useScroll({ target: targetRef });

	const x = useTransform(scrollYProgress, [0, 1], ['0%', '-310%']);

	return (
		<div
			className={styles.section}
			id="AI"
			style={
				size.width > 1350 ? { height: `${points.length * 100}vh` } : {}
			}
			ref={targetRef}
		>
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

				<motion.div
					className={styles.flex}
					style={size.width > 1350 ? { x } : {}}
				>
					{points.map((element, index) => {
						return (
							<div className={styles.oneCard} key={index}>
								<Typography className={styles.desc}>
									{element.text}
								</Typography>
								<div className={styles.centerImg}>
									<Image
										src={element.image}
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
								<Typography className={styles.title}>
									{element.title}
								</Typography>
							</div>
						);
					})}
				</motion.div>
			</div>
		</div>
	);
}

export default AiAnalysis;
