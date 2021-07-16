import Hotel from './hotel';
import hotels from '../../database/hotels.json';
import Link from 'next/link';

const TrendingHotels = () => (
  <div className="font-medium">
    <div className="text-3xl text-center">
      <div className="w-24 h-1 mx-auto mb-4 border-4 border-b border-blue-500"></div>
      <div className="px-12">Trending Hotels Right Now</div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 sm:gap-8 w-4/5 pt-24 mx-auto lg:w-9/12">
      {hotels.slice(0, 4).map(hotel => (
        <Hotel key={hotel.name} {...hotel} />
      ))}
    </div>
    <div className="mt-16 text-center">
      <Link href={'/hotels'}>
        <a className="inline-flex items-center px-6 py-3 sm:text-lg text-white bg-blue-500 rounded hover:bg-blue-600">
          <span>Check out more</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M14.59 13H7a1 1 0 0 1 0-2h7.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l2.3-2.3z" />
          </svg>
        </a>
      </Link>
    </div>
  </div>
);

export default TrendingHotels;
