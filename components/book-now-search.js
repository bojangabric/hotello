const BookNowSearch = () => (
  <div className="lg:absolute inset-x-0 bottom-0 lg:-mb-16 block w-full mx-auto font-medium text-center bg-white shadow-xl sm:items-stretch sm:justify-between sm:flex sm:flex-wrap md:flex-nowrap md:text-left md:w-4/5 xl:w-1/2">
    <div className="flex flex-wrap justify-between w-full md:flex-nowrap">
      <div className="order-1 w-full py-6 border-b sm:w-1/2 md:w-auto lg:py-8 md:pl-10 md:pr-4 md:order-1 md:border-0">
        <div className="tracking-wider text-blue-700 uppercase">Location</div>
        <div className="pt-3 md:text-lg text-gray-700">Los Angeles, California</div>
      </div>
      <div className="order-3 w-full py-6 border-b sm:w-1/2 md:w-auto lg:py-8 md:pr-4 md:order-2 md:border-0">
        <div className="tracking-wider text-blue-700 uppercase">Check in</div>
        <div className="flex items-baseline justify-center w-full pt-3 md:text-lg text-gray-700 md:justify-start">
          <div>Fri, 29 Jun 2019</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path
                className="secondary"
                fillRule="evenodd"
                d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="order-4 w-full py-6 border-b sm:w-1/2 md:w-auto lg:py-8 md:pr-4 md:order-3 md:border-0">
        <div className="tracking-wider text-blue-700 uppercase">Check out</div>
        <div className="flex items-baseline justify-center pt-3 md:text-lg text-gray-700 md:justify-start">
          <div>Mon, 03 Jul 2019</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path
                className="secondary"
                fillRule="evenodd"
                d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="order-2 w-full py-6 border-b sm:w-1/2 md:w-auto lg:py-8 md:order-4 md:pr-10 md:border-0">
        <div className="tracking-wider text-blue-700 uppercase">People</div>
        <div className="flex items-baseline justify-center pt-3 md:text-lg text-gray-700 md:justify-start">
          <div>2</div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 fill-current">
              <path d="M8.7 9.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 1 1-1.4 1.4L12 6.42l-3.3 3.3zm6.6 4.6a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center order-5 w-full py-8 text-white uppercase bg-green-400 md:w-40 md:px-2">
      <div className="leading-none tracking-widest">Search</div>
    </div>
  </div>
);

export default BookNowSearch;
