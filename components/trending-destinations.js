import destinations from '../database/destinations';

const Destination = ({ location, image, number_of_hotels }) => (
  <div className="mb-4 md:mb-0">
    <div className="relative overflow-hidden bg-white rounded shadow">
      <img src={image} className="object-cover object-center w-full h-96" />
      <div
        className="absolute bottom-0 w-full h-40"
        style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)' }}
      ></div>
      <div className="absolute bottom-0 w-full pb-6 text-center">
        <div className="text-2xl text-white">{location}</div>
        <div className="flex items-center justify-center ml-2 text-blue-600">
          <div>{number_of_hotels}+ Hotels</div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M14.59 13H7a1 1 0 0 1 0-2h7.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l2.3-2.3z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const TrendingDestinations = () => (
  <div className="font-medium">
    <div className="text-3xl text-center">
      <div className="w-24 h-1 mx-auto mb-4 border-4 border-b border-blue-500"></div>
      <div>Top destinations</div>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-12 pt-24 mx-auto w-4/5 lg:w-9/12">
      {destinations.map(destination => (
        <Destination {...destination} />
      ))}
    </div>
  </div>
);

export default TrendingDestinations;
