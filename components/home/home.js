// >> Modules
import styles from './home.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import Spline from '@splinetool/react-spline';

import Hero from './hero/hero';
import AiAnalysis from './aiAnalysis/aiAnalysis';
import Roadmap from './roadmap/roadmap';
import Tokenomics from './tokenomics/tokenomics';
import Press from './press/press';
import Partners from './partners/partners';
import Footer from './footer/footer';

// >> Script
function Home() {
	return (
		<div className={styles.page}>
			<div className={styles.heroBg}>
				<div className={styles.spline}>
					<Spline scene="https://prod.spline.design/C9DHi814Ir7f4e0H/scene.splinecode" />
				</div>
				<Hero />
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
