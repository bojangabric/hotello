import Filter from './filter';
import Hotel from './hotel';
import hotels from '../../database/hotels.json';

const Hotels = () => (
  <div className="flex justify-center py-32">
    <Filter />
    <div className="flex flex-col xl:w-3/5 lg:w-full lg:max-w-3xl">
      <div className="items-center justify-between py-2 lg:flex">
        <div className="text-lg font-medium text-gray-800">Showing 400 Hotels</div>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <button className="flex items-center justify-center px-6 py-2 my-4 text-white bg-blue-500 rounded lg:hidden">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zM4 17a1 1 0 100 2h7a1 1 0 100-2H4z" />
            </svg>
            Filter
          </button>
          <div className="flex">
            <label className="flex items-center w-full text-gray-600">
              <span className="w-20 mr-3 whitespace-nowrap">Sort by:</span>
              <select className="block w-full mt-1 shadow-sm rounded border-gray-200 border-opacity-70 bg-white focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                <option>Popularity</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rating</option>
                <option>Most Reviews</option>
              </select>
            </label>
          </div>
        </div>
      </div>

      <div>
        {hotels.map(hotel => (
          <Hotel {...hotel} />
        ))}
      </div>

      <div className="flex mx-auto text-blue-500">
        <div className="flex items-center justify-center w-10 h-10 mr-2 text-gray-500 bg-white border shadow-sm rounded border-gray-200 border-opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M13.7 15.3a1 1 0 01-1.4 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.4 1.4L10.42 12l3.3 3.3z" />
          </svg>
        </div>
        <div className="flex items-center justify-center w-10 h-10 mr-2 text-white bg-blue-500 border shadow-sm rounded border-gray-200 border-opacity-70">
          1
        </div>
        <div className="flex items-center justify-center w-10 h-10 mr-2 font-medium bg-white border shadow-sm rounded border-gray-200 border-opacity-70">
          2
        </div>
        <div className="flex items-center justify-center w-10 h-10 font-medium bg-white border shadow-sm rounded border-gray-200 border-opacity-70">
          3
        </div>
        <div className="flex items-center justify-center w-10 h-10 ml-2 font-medium bg-white border shadow-sm rounded border-gray-200 border-opacity-70">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M10.3 8.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l3.29-3.3-3.3-3.3z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Hotels;
