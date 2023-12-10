// >> Modules
import styles from './press.module.scss';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

import triangle from '@/public/icons/triangle.svg';
import twitter from '@/public/icons/twitter.svg';
import telegram from '@/public/icons/telegram.svg';

import benzinga from '@/public/presale/benzinga.png';
import bitcoinist from '@/public/presale/bitcoinist.png';
import bloomberg from '@/public/presale/bloomberg.png';
import cointelegraph from '@/public/presale/cointelegraph.png';
import marketwatch from '@/public/presale/marketwatch.png';
import yahoo from '@/public/presale/yahoo.png';

const list = [
	{
		logo: benzinga,
		name: 'Benzinga',
		link: 'https://www.benzinga.com',
	},
	{
		logo: bitcoinist,
		name: 'Bitcoinist',
		link: 'https://bitcoinist.com',
	},
	{
		logo: bloomberg,
		name: 'Bloomberg',
		link: 'https://www.bloomberg.com',
	},
	{
		logo: cointelegraph,
		name: 'Cointelegraph',
		link: 'https://cointelegraph.com',
	},
	{
		logo: marketwatch,
		name: 'Marketwatch',
		link: 'https://www.marketwatch.com',
	},
	{
		logo: yahoo,
		name: 'Yahoo',
		link: 'https://www.yahoo.com',
	},
];

// >> Script
function Press(props) {
	return (
		<div className={styles.section} id="Presale Released">
			<div className={styles.press}>
				<Typography className={styles.title}>
					Presale Released
				</Typography>
				<Parallax translateX={[-5, 5]}>
					<div className={styles.pressOutside}>
						<div className={styles.pressInside}>
							<div className={styles.list}>
								{list.map((element, index) => {
									return (
										<div
											className={styles.onePress}
											key={index}
										>
											<a
												href={element.link}
												target="_blank"
											>
												<Image
													src={element.logo}
													alt={element.name}
													quality={99}
													priority={true}
													className="image"
												/>
											</a>
										</div>
									);
								})}
							</div>
							<div className={styles.list}>
								{list.map((element, index) => {
									return (
										<div
											className={styles.onePress}
											key={index}
										>
											<a
												href={element.link}
												target="_blank"
											>
												<Image
													src={element.logo}
													alt={element.name}
													quality={99}
													priority={true}
													className="image"
												/>
											</a>
										</div>
									);
								})}
							</div>
							<div className={styles.list}>
								{list.map((element, index) => {
									return (
										<div
											className={styles.onePress}
											key={index}
										>
											<a
												href={element.link}
												target="_blank"
											>
												<Image
													src={element.logo}
													alt={element.name}
													quality={99}
													priority={true}
													className="image"
												/>
											</a>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</Parallax>
			</div>
			<div className={styles.inside}>
				<div className={styles.community}>
					<div className={styles.oneSocial}>
						<div className={styles.left}>
							<Image
								src={telegram}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
							<Typography>Telegram</Typography>
						</div>
						<Button
							className={styles.rightBtn}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Typography>OPEN TELEGRAM</Typography>
							<Image
								src={triangle}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
						</Button>
					</div>
					<div className={styles.oneSocial}>
						<div className={styles.left}>
							<Image
								src={twitter}
								alt=""
								quality={99}
								priority={true}
								className="image"
							/>
							<Typography>Twitter</Typography>
						</div>
						<Button
							className={styles.rightBtn}
							href="https://google.com"
							target="_blank"
							disableRipple
						>
							<Typography>OPEN TWITTER</Typography>
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

export default Press;
