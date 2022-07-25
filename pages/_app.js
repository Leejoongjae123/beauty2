import '../styles/globals.css'
import '../public/static/fonts/style.css'
import Top from '../src/component/Top'
import Footer from '../src/component/Footer'
import 'semantic-ui-css/semantic.min.css'

function MyApp({ Component, pageProps }) {
  return (
  <div>
  <Top></Top>
  <Component {...pageProps} />
  <Footer></Footer>
  </div>
  )
}

export default MyApp
