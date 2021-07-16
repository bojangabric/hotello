const Hotel = ({ city, country, image, price, stars }) => (
  <div className="">
    <div className="relative overflow-hidden bg-white rounded shadow">
      <img className="object-cover object-center w-full h-80" src={image} />
    </div>
    <div className="flex items-center justify-between px-1">
      <div>
        <div className="mt-1 text-gray-600 text-sm">{country}</div>
        <div className="mt-px mb-1 font-medium text-gray-800 text-xl leading-tight">{city}</div>
        <div className="flex">
          {[...Array(stars)].map(i => (
            <svg
              key={i}
              className="h-5 w-5 text-yellow-300 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
          {[...Array(5 - stars)].map(i => (
            <svg
              key={i}
              className="h-5 w-5 text-gray-200 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>
      <div className="text-blue-500 text-right">
        <div className="text-xl leading-snug">${price}</div>
        <div className="leading-none">per day</div>
      </div>
    </div>
  </div>
);

export default Hotel;
