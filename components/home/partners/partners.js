// >> Modules
import styles from './partners.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import topShadow from '@/public/topShadow.png';
import footerShape from '@/public/footerShape.png';

import bscscan from '@/public/partners/bscscan.png';
import coingecko from '@/public/partners/coingecko.png';
import dextools from '@/public/partners/dextools.png';
import dexview from '@/public/partners/dexview.png';
import pancakeswap from '@/public/partners/pancakeswap.png';
import pinksale from '@/public/partners/pinksale.png';
import poocoin from '@/public/partners/poocoin.png';
import coinsult from '@/public/partners/coinsult.png';

const list = [
	{
		name: 'Pinksale',
		url: 'https://pinksale.finance',
		img: pinksale,
	},
	{
		name: 'Poocoin',
		url: 'https://poocoin.app',
		img: poocoin,
	},
	{
		name: 'BscScan',
		url: 'https://bscscan.com',
		img: bscscan,
	},
	{
		name: 'CoinGecko',
		url: 'https://www.coingecko.com',
		img: coingecko,
	},
	{
		name: 'Pancakeswap',
		url: 'https://pancakeswap.finance',
		img: pancakeswap,
	},
	{
		name: 'DEXTools',
		url: 'https://www.dextools.io/',
		img: dextools,
	},
	{
		name: 'Coinsult',
		url: 'https://coinsult.net',
		img: coinsult,
	},
	{
		name: 'DEXView',
		url: 'https://www.dexview.com',
		img: dexview,
	},
];

// >> Script
function Partners(props) {
	return (
		<div className={styles.section} id="Partners">
			<div className={styles.inside}>
				<div className={styles.leftShape}>
					<Image
						src={footerShape}
						alt=""
						quality={99}
						priority={true}
						className="image"
					/>
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
				<div className={styles.topInfos}>
					<Typography className={styles.title} data-aos="fade-right">
						Our partners
					</Typography>
					<Typography className={styles.desc} data-aos="fade-left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt.
					</Typography>
				</div>
				<div className={styles.list} data-aos="fade-up">
					{list.map((element, index) => {
						return (
							<div className={styles.onePartner} key={index}>
								<a href={element.url} target="_blank">
									<Image
										src={element.img}
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
	);
}

export default Partners;
