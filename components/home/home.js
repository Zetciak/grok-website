// >> Modules
import styles from './home.module.scss';
import Image from 'next/image';

import Hero from './hero/hero';

// >> Script
function Home() {
	return (
		<div className={styles.page}>
			<div className={styles.heroBg}>
				<Hero />
			</div>
		</div>
	);
}

export default Home;
