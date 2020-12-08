const TopRates = () => (
  <div className="flex items-center justify-between w-4/5 mx-auto lg:space-x-32 lg:w-9/12">
    <div className="hidden w-1/2 lg:block">
      <img className="object-cover object-bottom w-full rounded h-120" src="/images/hotel.jpg" />
    </div>
    <div className="w-full space-y-4 lg:space-y-8 lg:w-1/2">
      <div className="text-2xl md:text-3xl font-semibold md:leading-none text-gray-800">
        Trusted by the world best rating site
      </div>
      <div className="md:text-lg leading-normal text-gray-900">
        So you’re going abroad, you’ve chosen your destination and now you have to choose a hotel. Ten years ago, you’d
        have probably visited your local trave agent The 21st Century way to select and book your hotel is of course on
        the internet.
      </div>
      <a
        href="#!"
        className="inline-flex items-center px-6 py-3 md:text-lg text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        <div>Check top rated hotels</div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M14.59 13H7a1 1 0 0 1 0-2h7.59l-2.3-2.3a1 1 0 1 1 1.42-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.42-1.4l2.3-2.3z" />
          </svg>
        </div>
      </a>
      <div className="flex items-center pt-10 lg:justify-between xl:w-4/5">
        <div className="pr-4 sm:pr-8 xl:pr-6 md:w-1/5 lg:w-full">
          <img src="/images/google.png" />
        </div>
        <div className="pr-4 mt-1 sm:pr-8 xl:pr-6 md:w-1/5 lg:w-full">
          <img src="/images/trivago.png" />
        </div>
        <div className="md:w-1/5 lg:w-full">
          <img src="/images/tripadvisor.png" />
        </div>
      </div>
    </div>
  </div>
);

export default TopRates;
