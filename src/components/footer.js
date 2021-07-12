const Footer = () => (
  <div className="pt-16 lg:pt-32 pb-24 bg-gray-900 font-light text-white">
    <div className="w-4/5 lg:w-3/5 mx-auto lg:flex lg:space-x-10 xl:space-x-20 justify-between">
      <div className="mb-12 lg:w-1/3">
        <a href="{{ url('/') }}">
          <svg className="fill-current w-32 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207.54 82.85">
            <path d="M92.91 53A11.57 11.57 0 0084 49.43 11.51 11.51 0 0075.15 53a12.49 12.49 0 00-3.35 8.85 12.59 12.59 0 003.35 8.88A11.5 11.5 0 0084 74.37a11.6 11.6 0 008.9-3.59 12.59 12.59 0 003.34-8.91A12.48 12.48 0 0092.91 53zM89 67.51a6.64 6.64 0 01-10 0 8.72 8.72 0 01-1.85-5.64A8.61 8.61 0 0179 56.29a6.64 6.64 0 0110 0 8.55 8.55 0 011.85 5.58A8.66 8.66 0 0189 67.51zM102.5 68.27a6.18 6.18 0 001.55 4.52 6.11 6.11 0 004.55 1.58 6.87 6.87 0 004.87-1.53L112.24 69a3 3 0 01-2.31.83 2 2 0 01-1.67-.76 3.21 3.21 0 01-.59-2V54.54h4.82V50h-4.82v-6.5h-5.17V50h-3.94v4.52h3.94zM139.45 62.36a13.52 13.52 0 00-3.22-9.29 10.78 10.78 0 00-8.49-3.64 11.34 11.34 0 00-8.63 3.57 12.38 12.38 0 00-3.42 8.83 12 12 0 0012.44 12.5q6.06 0 9.64-3.45l-2.36-3.39a8.45 8.45 0 01-3.07 1.92 10.41 10.41 0 01-3.67.69 7.41 7.41 0 01-5.26-1.87 7.2 7.2 0 01-2.31-4.67h18.35zM121.05 60a7.2 7.2 0 011.95-4.45 6.1 6.1 0 014.77-1.89 6.18 6.18 0 014.89 1.92 6.8 6.8 0 011.8 4.38zM144.56 15.83h5.16v57.95h-5.16zM156.42 15.83h5.17v57.95h-5.17zM187.9 53a12.78 12.78 0 00-17.76 0 12.48 12.48 0 00-3.34 8.85 12.58 12.58 0 003.34 8.88 12.74 12.74 0 0017.76 0 12.6 12.6 0 003.35-8.91A12.49 12.49 0 00187.9 53zM184 67.51a6.14 6.14 0 01-5 2.29 6.07 6.07 0 01-5-2.29 8.66 8.66 0 01-1.85-5.64 8.55 8.55 0 011.85-5.58 6 6 0 015-2.29 6.11 6.11 0 015 2.29 8.61 8.61 0 011.85 5.58 8.72 8.72 0 01-1.85 5.64zM203.46 35.47h4.08v.06h-4.08zM71.8 35.53h66.07v4.08H71.8z" />
            <path d="M168.27 35.53v4.08h35.19v39.15H66.34V10l-2.27-1.62V5.84L56 0l-8.46 5.93v2.18l-2.18 1.58v36.64h-8V24.07l-2.45-2.16v-2.82l-8.26-7.28-8.44 7.38V22L16 23.91v54.85H4V39.61h8v-4.08H0v47.32h207.54V35.53zM28.66 78.76h-1.95V17.28L28.66 19zm3.59 0h-2v-58.3l2 1.72zm3.67 0H34V23.7l2 1.72zm9.44 0h-8V59.5h8zm19.68 0H56v-10l9 6.57zm0-5.88L56 66.34v-3.43l9 6.54zM65 67l-9-6.54V57l9 6.56zm0-5.88l-9-6.55v-3.43l9 6.54zm0-5.89l-9-6.54v-3.44l9 6.55zm0-5.88l-9-6.54v-3.44l9 6.54zm0-5.88l-9-6.55v-3.43L65 40zm0-5.89L56 31v-3.4l9 6.54zm0-5.88l-9-6.55v-3.43l9 6.53zm0-5.89l-9-6.55v-3.43l9 6.54zm0-5.88l-9-6.55V10l9 6.48zM65 14l-9-6.5V4.07l9 6.53z" />
          </svg>
        </a>
        <div className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse onsectetur adipisicing elit.
        </div>
      </div>
      <div className="w-full lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-16">
        <div className="mb-8 text-gray-300">
          <div className="font-medium mb-4 text-white">About us</div>
          <a href="#!" className="block mb-2 hover:text-white">
            Partner Help
          </a>
          <a href="#!" className="block mb-2 hover:text-white">
            Careers
          </a>
          <a href="#!" className="block mb-2 hover:text-white">
            Press Center
          </a>
          <a href="#!" className="block mb-2 hover:text-white">
            Investor Relations
          </a>
          <a href="#!" className="block mb-2 hover:text-white">
            Terms&Conditions
          </a>
        </div>
        <div className="mb-8 text-gray-300">
          <div className="font-medium mb-4 text-white">Quicklinks</div>
          <a href="#!" className="block mb-2 hover:text-white">
            Places of Interest
          </a>
          <a href="#!" className="block mb-2 hover:text-white">
            Apartments
          </a>
          <a href="#!" className="block mb-2 hover:text-white">
            Guest houses
          </a>
        </div>
        <div className="mb-8 text-gray-300">
          <div className="font-medium mb-4 text-white">Contact</div>
          <div className="mb-4 hover:text-white">example@mail.com</div>
          <div className="">789-231-1141</div>
          <div className="whitespace-nowrap">161 Limer Street</div>
          <div className="whitespace-nowrap">59201 Montana, USA</div>
        </div>
      </div>
    </div>
    <div className="mt-6 lg:mt-20 w-4/5 lg:w-3/5 mx-auto flex flex-wrap justify-between items-center">
      <div className="order-2 lg:order-1 mt-12 lg:mt-0">Copyright © 2019-2019 Hotello.com™. All rights reserved.</div>
      <div className="flex justify-between order-1 lg:order-2">
        <div className="h-10 w-10 bg-gray-100 rounded-full items-center flex justify-center mr-3">
          <svg
            className="w-5 h-5 fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 96.124 96.123"
          >
            <path d="M72.089.02L59.624 0C45.62 0 36.57 9.285 36.57 23.656v10.907H24.037a1.96 1.96 0 00-1.96 1.961v15.803a1.96 1.96 0 001.96 1.96H36.57v39.876a1.96 1.96 0 001.96 1.96h16.352a1.96 1.96 0 001.96-1.96V54.287h14.654a1.96 1.96 0 001.96-1.96l.006-15.803a1.963 1.963 0 00-1.961-1.961H56.842v-9.246c0-4.444 1.059-6.7 6.848-6.7l8.397-.003a1.96 1.96 0 001.959-1.96V1.98A1.96 1.96 0 0072.089.02z" />
          </svg>
        </div>
        <div className="h-10 w-10 bg-gray-100 rounded-full items-center flex justify-center mr-3">
          <svg className="w-5 h-5 fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
          </svg>
        </div>
        <div className="h-10 w-10 bg-gray-100 rounded-full items-center flex justify-center mr-3">
          <svg
            className="w-5 h-5 fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 169.063 169.063"
          >
            <path d="M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z" />
            <path d="M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22a11.053 11.053 0 00-3.23 7.78c0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z" />
          </svg>
        </div>
        <div className="h-10 w-10 bg-gray-100 rounded-full items-center flex justify-center">
          <svg className="w-5 h-5 fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 310">
            <path d="M72.16 99.73H9.927a5 5 0 00-5 5v199.928a5 5 0 005 5H72.16a5 5 0 005-5V104.73a5 5 0 00-5-5zM41.066.341C18.422.341 0 18.743 0 41.362 0 63.991 18.422 82.4 41.066 82.4c22.626 0 41.033-18.41 41.033-41.038C82.1 18.743 63.692.341 41.066.341zM230.454 94.761c-24.995 0-43.472 10.745-54.679 22.954V104.73a5 5 0 00-5-5h-59.599a5 5 0 00-5 5v199.928a5 5 0 005 5h62.097a5 5 0 005-5V205.74c0-33.333 9.054-46.319 32.29-46.319 25.306 0 27.317 20.818 27.317 48.034v97.204a5 5 0 005 5H305a5 5 0 005-5V194.995c0-49.565-9.451-100.234-79.546-100.234z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
