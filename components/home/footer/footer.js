// >> Modules
import styles from './footer.module.scss';
import { Typography } from '@mui/material';
import Image from 'next/image';

import logo from '@/public/logo.png';
import footerShape from '@/public/footerShape.png';

// >> Script
function Footer(props) {
	return (
		<div className={styles.section} id="Footer">
			<div className={styles.inside}>
				<div className={styles.leftInfos}>
					<div className={styles.logo}>
						<Image
							src={logo}
							alt=""
							quality={99}
							priority={true}
							className="image"
						/>
					</div>
					<Typography className={styles.desc}>
						Watch the video to know how the space Chain ecosystem
						will break through
					</Typography>
					<Typography className={styles.copyright}>
						Copyright © 2023 SAFE-GROK Inc. All Rights Reserved
					</Typography>
				</div>
				<div className={styles.oneTable} data-value="bot">
					<Typography className={styles.tableTitle}>
						Bot Features
					</Typography>
					<div className={styles.texts}>
						<a href="https://google.com" target="_blank">
							<Typography>Ai Analysis</Typography>
						</a>
						<a href="https://google.com" target="_blank">
							<Typography>Tax Report</Typography>
						</a>
						<a href="https://google.com" target="_blank">
							<Typography>Analysis</Typography>
						</a>
						<a href="https://google.com" target="_blank">
							<Typography>Calls Reports</Typography>
						</a>
					</div>
				</div>
				<div className={styles.oneTable} data-value="social">
					<Typography className={styles.tableTitle}>
						Social Media
					</Typography>
					<div className={styles.texts}>
						<a href="https://google.com" target="_blank">
							<Typography>Twitter / X</Typography>
						</a>
						<a href="https://google.com" target="_blank">
							<Typography>Telegram</Typography>
						</a>
					</div>
				</div>

				<div className={styles.footerShape}>
					<Image
						src={footerShape}
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

export default Footer;
