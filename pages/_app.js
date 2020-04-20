// import App from 'next/app'
import 'semantic-ui-css/semantic.min.css'
import '../css/style.css'

import Layout from '../components/Layout'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
