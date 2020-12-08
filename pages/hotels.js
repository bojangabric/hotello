import Hotels from '../components/hotels';
import { NextSeo } from 'next-seo';

const HotelsPage = () => (
  <>
    <NextSeo title={'Browse Hotels'} />
    <Hotels />
  </>
);

export default HotelsPage;
