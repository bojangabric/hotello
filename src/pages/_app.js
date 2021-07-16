import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { DefaultSeo } from 'next-seo';
import SEO from '/next-seo.config';
import '@/css/tailwind.css';

const App = ({ Component, pageProps }) => (
  <div className="text-gray-800" style={{ backgroundColor: '#F7FCFF' }}>
    <DefaultSeo {...SEO} />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
