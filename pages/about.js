const AboutPage = () => (
  <div>
    <div className="bg-blue-500">
      <div className="text-white w-4/5 flex flex-col sm:flex-row justify-between pt-16 pb-32 lg:w-1/2 mx-auto lg:items-center">
        <div>
          <div className="leading-none text-6xl font-bold">
            About
            <br />
            Hotello
          </div>
          <div className="text-xl font-light flex items-center mt-16 tracking-wide">
            <div className="flex items-center">
              <div className="mr-4 hidden sm:block">
                <svg
                  className="bg-white rounded-full fill-current text-blue-500 h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.51 11.14a1 1 0 010 1.72l-5 3A1 1 0 019 15V9a1 1 0 011.51-.86l5 3z" />
                </svg>
              </div>
              <div className="leading-none whitespace-no-wrap">
                Watch the video to learn
                <br />
                more about us
              </div>
            </div>
            <div className="ml-10 hidden sm:block">
              <svg className="fill-current h-8 w-8" viewBox="0 0 63 23" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M52.205 0.333C51.776 -0.111 51.062 -0.111 50.618 0.333C50.189 0.762 50.189 1.476 50.618 1.904L58.665 9.951H1.111C0.492 9.952 0 10.444 0 11.063C0 11.682 0.492 12.19 1.111 12.19H58.665L50.618 20.222C50.189 20.666 50.189 21.381 50.618 21.809C51.062 22.253 51.777 22.253 52.205 21.809L62.157 11.857C62.601 11.428 62.601 10.714 62.157 10.286L52.205 0.333Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-0 relative self-end sm:w-1/3 md:w-1/3 lg:w-1/2 lg:ml-6">
          <img style={{ filter: 'brightness(70%)' }} className="rounded" src="/images/corp.jpg" />
          <svg
            className="top-1/2 left-1/2 bg-white rounded-full fill-current text-blue-500 h-10 w-10 -ml-5 -mt-5 absolute"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M15.51 11.14a1 1 0 010 1.72l-5 3A1 1 0 019 15V9a1 1 0 011.51-.86l5 3z" />
          </svg>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row py-32 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
      <div className="text-gray-800 w-full md:w-1/2 px-6 md:px-6 xl:px-10">
        <div className="text-3xl mx-auto font-medium">
          <div className="border-blue-500 w-24 h-1 border-4 border-b mb-2"></div>
          <div>Who we are</div>
        </div>
        <div className="mx-auto pt-10">
          <div className="mb-4">
            So you’re going abroad, you’ve chosen your destination and now you have to choose a hotel.
          </div>
          <div className="mb-4">
            Ten years ago, you’d have probably visited your local trave agent The 21st Century way to select and book
            your hotel is of course on the internet.
          </div>
          <div className="mb-4">
            So you’re going abroad, you’ve chosen your destination and now you have to choose a hotel. Ten years ago,
            you’d have probably visited your local trave agent.
          </div>
          <div className="mb-4">The 21st Century way to select and book your hotel is of course on the internet.</div>
        </div>
      </div>

      <div className="text-gray-800 w-full md:w-1/2 mt-20 md:mt-0 px-6 md:px-6 xl:px-10">
        <div className="text-3xl mx-auto font-medium">
          <div className="border-blue-500 w-24 h-1 border-4 border-b  mb-2"></div>
          <div>Our goals</div>
        </div>
        <div className="mx-auto pt-10">
          <div className="mb-4">
            So you’re going abroad, you’ve chosen your destination and now you have to choose a hotel.
          </div>
          <div className="mb-4">
            Ten years ago, you’d have probably visited your local trave agent The 21st Century way to select and book
            your hotel is of course on the internet.
          </div>
          <div className="mb-4">
            So you’re going abroad, you’ve chosen your destination and now you have to choose a hotel. Ten years ago,
            you’d have probably visited your local trave agent.
          </div>
        </div>
      </div>
    </div>

    <div className="pt-10 pb-32 text-gray-800 ">
      <div className="text-3xl text-center px-12 font-medium">Want to work with us?</div>
      <div className="text-center mt-10">
        <div className="w-4/5 lg:w-1/4 mx-auto mb-8">
          We strive to create a growth culture both on business and personal level everyone involed.
        </div>
        <div>Send us a mail at</div>
        <div className="text-blue-500">example@example.com</div>
      </div>
    </div>
  </div>
);

export default AboutPage;
