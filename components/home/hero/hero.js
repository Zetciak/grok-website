// >> Modules
import styles from './hero.module.scss';

import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
import { useWindowSize } from '@/hooks/useWindowSize';

import triangle from '@/public/icons/triangle.svg';
import twitter from '@/public/icons/twitter.svg';
import telegram from '@/public/icons/telegram.svg';
import titleShadow from '@/public/titleShadow.png';
import logo from '@/public/logo.png';
import scrollArrow from '@/public/scrollArrow.svg';
import scrollText from '@/public/scrollText.svg';
import hero_topRight from '@/public/hero_topRight.png';
import hero_bottomLeft from '@/public/hero_bottomLeft.png';

// >> Script
function Hero(props) {
	const size = useWindowSize();

	return (
		<div className={styles.section}>
			<div
				className={styles.logo}
				data-aos="fade-down"
				data-aos-duration="2500"
			>
				<Image
					src={logo}
					alt=""
					quality={99}
					priority={true}
					className="image"
				/>
			</div>

			<div className={styles.topLeft}>
				<Parallax translateY={[50, -50]}>
					<Typography
						className={styles.title}
						data-aos="fade-right"
						data-aos-duration="2500"
					>
						SAFE
						<br />
						GROK
						<span className={styles.shadow1}>
							<Image
								src={titleShadow}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</span>
						<span className={styles.shadow2}>
							<Image
								src={titleShadow}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</span>
					</Typography>
					<div
						className={styles.buttons}
						data-aos="fade-up"
						data-aos-duration="2500"
					>
						<Button
							className={styles.longBtn}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Typography>PRESALE</Typography>
							<Image
								src={triangle}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</Button>
						<Button
							className={styles.socialBtn}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Image
								src={twitter}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</Button>
						<Button
							className={styles.socialBtn}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Image
								src={telegram}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</Button>
						<span className={styles.shadow1}>
							<Image
								src={titleShadow}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</span>
					</div>
				</Parallax>
			</div>
			<div
				className={styles.scroll}
				onClick={() => {
					const htmlElement = document.getElementById('AI');
					if (htmlElement) {
						htmlElement.scrollIntoView();
					}
				}}
				data-aos={size.width > 430 ? 'fade-up' : ''}
				data-aos-duration="1500"
			>
				<span className={styles.text}>
					<Image
						src={scrollText}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</span>
				<span className={styles.arrow}>
					<Image
						src={scrollArrow}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
				</span>
			</div>

			<div className={styles.topRightSlide}>
				<div className={styles.topRightSlideInside}>
					<div className={styles.bgImg}>
						<Image
							src={hero_topRight}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.square}>
						<Typography className={styles.title}>
							AI ANALYSIS
						</Typography>

						<Button
							className={styles.bottomBtn}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Typography>READ MORE</Typography>
							<Image
								src={triangle}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</Button>
					</div>
				</div>
			</div>

			<div className={styles.bottomLeftSlide}>
				<div className={styles.bottomLeftSlideInside}>
					<div className={styles.bgImg}>
						<Image
							src={hero_bottomLeft}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<div className={styles.square}>
						<Typography className={styles.title}>
							CALL REPORTS
						</Typography>

						<Button
							className={styles.bottomBtn}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Typography>READ MORE</Typography>
							<Image
								src={triangle}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
