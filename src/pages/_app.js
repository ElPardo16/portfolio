import { Provider } from 'react-redux'
import { store } from "../utils/store"
import '../styles/globals.css'
// import dependencies
function MyApp({ Component, pageProps }) {
	return (
		/* set the state accesibility to all components */
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
