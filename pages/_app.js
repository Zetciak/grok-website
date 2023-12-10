// >> Modules
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const ParallaxProvider = dynamic(() => import('@/hooks/ParallaxProvider'), {
	ssr: false,
});

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import '@/styles/variables.scss';
import '@/styles/fonts.css';
import '@/styles/globals.scss';

// >> Script
function MyApp({ Component, pageProps }) {
	useEffect(() => {
		Aos.init({ duration: 700, once: true });
	}, []);

	// >> Render
	return (
		<StyledEngineProvider injectFirst>
			<ParallaxProvider>
				<CssBaseline />

				<Component {...pageProps} />
			</ParallaxProvider>
		</StyledEngineProvider>
	);
}

export default MyApp;
