// >> Modules
import styles from './home.module.scss';
import Image from 'next/image';
import { useState } from 'react';

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
