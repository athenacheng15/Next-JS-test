import "../styles/globals.css";
import Headers from "../components/Headers";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Headers />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
