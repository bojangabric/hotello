import { useState, useEffect } from 'react';

const Hotel = ({ name, city, country, image, price, reviews, review_grade, stars, facilities }) => {
  const [review, setReview] = useState('');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (review_grade > 4) {
      setReview('Excellent');
      setColor('green');
    } else if (review_grade > 3) {
      setReview('Good');
      setColor('green');
    } else if (review_grade > 2) {
      setReview('Poor');
      setColor('yellow');
    } else {
      setReview('Bad');
      setColor('red');
    }
  });

  return (
    <div className="sm:flex mb-6 bg-white border-gray-200 shadow-sm border-opacity-70 border rounded overflow-hidden sm:h-56">
      <a>
        <img className="min-w-full min-h-full w-80 h-full object-fill object-center" src={image} />
      </a>
      <div className="w-full flex flex-col justify-center">
        <div className="p-3 lg:p-6 lg:flex lg:justify-between h-full">
          <div className="flex flex-col justify-between">
            <div className="space-y-1">
              <a className="text-xl sm:text-2xl font-semibold sm:leading-none">{name}</a>
              <div className="text-gray-600 text-sm leading-none">
                {city}, {country}
              </div>

              <div className="flex items-center pt-2 space-x-2">
                {facilities.map(facility => (
                  <img className="w-6" src={`/images/hotel-icons/${facility}.svg`} key={facility} />
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <div
                  className={`rounded bg-${color}-100 bg-opacity-60 text-${color}-700 w-12 h-10 flex items-center justify-center font-medium`}
                >
                  {review_grade}
                </div>
                <div>
                  <div className="flex space-x-1 items-center">
                    <div className="text-gray-800 font-medium">{review}</div>
                    <div className="text-sm text-gray-700 tracking-wide">({reviews} reviews)</div>
                  </div>
                  <div className="flex space-x-1">
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
              </div>
            </div>
          </div>

          <div className="flex items-center mt-4 lg:mt-0 justify-between lg:flex lg:flex-col lg:items-stretch lg:text-right">
            <div>
              <div className="text-2xl text-gray-800 font-medium">${price}</div>
              <div className="text-sm text-gray-600 hidden lg:block lg:-mt-1">1 Room/Night</div>
            </div>
            <a
              href="/"
              className="bg-blue-500 px-4 py-2 text-white rounded whitespace-nowrap lg:mt-16 hover:bg-blue-600"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hotel;
