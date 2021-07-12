import BookNowSearch from '../components/book-now-search';
import TrendingDestinations from '../components/trending-destinations';
import CompareRates from '../components/compare-rates';
import Testimonials from '../components/testimonials';
import TopRates from '../components/top-rates';
import TrendingHotels from '../components/trending-hotels';

const IndexPage = () => (
  <>
    <div className="space-y-32 lg:space-y-64">
      <div className="text-white bg-blue-500 pt-8 md:pt-16 lg:pt-20 lg:pb-52 relative">
        <div className="flex items-center justify-between w-4/5 mx-auto lg:w-3/5 pb-20 lg:pb-0">
          <div>
            <div className="text-4xl md:text-6xl font-bold md:leading-none">
              Looking
              <br /> for a hotel?
            </div>
            <div className="mt-4 text-xl md:text-2xl text-blue-100">
              Find the best hotel
              <br />
              deals from all over the world!
            </div>
          </div>
          <img className="hidden w-1/2 lg:block" src="/images/best_place.svg" alt="" />
        </div>
        <BookNowSearch />
      </div>

      <TrendingDestinations />
      <CompareRates />
      <TopRates />
      <TrendingHotels />
    </div>
    <Testimonials />
  </>
);

export default IndexPage;
