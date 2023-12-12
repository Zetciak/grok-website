// >> Modules
import styles from './home.module.scss';
import { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Triangle } from 'react-loader-spinner';

import Hero from './hero/hero';
import AiAnalysis from './aiAnalysis/aiAnalysis';
import Roadmap from './roadmap/roadmap';
import Tokenomics from './tokenomics/tokenomics';
import Press from './press/press';
import Partners from './partners/partners';
import Footer from './footer/footer';

// >> Script
function Home() {
	const [robotLoaded, setRobotLoaded] = useState(null);
	const [openPage, setOpenPage] = useState(false);

	useEffect(() => {
		if (robotLoaded === 'loaded') {
			setTimeout(function () {
				setOpenPage(true);
			}, 3000);
		}
	}, [robotLoaded]);

	function onLoad(spline) {
		if (spline) {
			setTimeout(function () {
				if (spline.dt > 0) {
					setRobotLoaded('loaded');
				}
			}, 100);
		}
	}

	return (
		<div className={styles.page}>
			<div className={styles.loader} data-visible={robotLoaded}>
				<div className={styles.triangle}>
					<Triangle color="#adff00" width="100%" />
				</div>
			</div>
			<div className={styles.heroBg}>
				<div className={styles.spline}>
					<Spline
						scene="https://prod.spline.design/C9DHi814Ir7f4e0H/scene.splinecode"
						onLoad={onLoad}
					/>
				</div>
				{openPage === true ? <Hero /> : null}
			</div>
			<AiAnalysis />
			<Roadmap />
			<Tokenomics />
			<Press />
			<Partners />
			<Footer />
		</div>
	);
}

export default Home;
