import { useState } from 'react';
import LoginModal from './login-modal';
import Link from 'next/link';

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
    document.body.classList.toggle('fixed');
    document.body.classList.toggle('overflow-y-scroll');
  };

  return (
    <div className="bg-blue-500 text-white">
      <LoginModal show={modal} toggle={toggleModal} />
      <nav className="flex flex-wrap items-center justify-between w-4/5 py-8 md:py-12 mx-auto lg:w-3/5">
        <div>
          <Link href={'/'}>
            <a>
              <svg className="w-24 md:w-32 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 207.54 82.85">
                <path d="M92.91 53A11.57 11.57 0 0084 49.43 11.51 11.51 0 0075.15 53a12.49 12.49 0 00-3.35 8.85 12.59 12.59 0 003.35 8.88A11.5 11.5 0 0084 74.37a11.6 11.6 0 008.9-3.59 12.59 12.59 0 003.34-8.91A12.48 12.48 0 0092.91 53zM89 67.51a6.64 6.64 0 01-10 0 8.72 8.72 0 01-1.85-5.64A8.61 8.61 0 0179 56.29a6.64 6.64 0 0110 0 8.55 8.55 0 011.85 5.58A8.66 8.66 0 0189 67.51zM102.5 68.27a6.18 6.18 0 001.55 4.52 6.11 6.11 0 004.55 1.58 6.87 6.87 0 004.87-1.53L112.24 69a3 3 0 01-2.31.83 2 2 0 01-1.67-.76 3.21 3.21 0 01-.59-2V54.54h4.82V50h-4.82v-6.5h-5.17V50h-3.94v4.52h3.94zM139.45 62.36a13.52 13.52 0 00-3.22-9.29 10.78 10.78 0 00-8.49-3.64 11.34 11.34 0 00-8.63 3.57 12.38 12.38 0 00-3.42 8.83 12 12 0 0012.44 12.5q6.06 0 9.64-3.45l-2.36-3.39a8.45 8.45 0 01-3.07 1.92 10.41 10.41 0 01-3.67.69 7.41 7.41 0 01-5.26-1.87 7.2 7.2 0 01-2.31-4.67h18.35zM121.05 60a7.2 7.2 0 011.95-4.45 6.1 6.1 0 014.77-1.89 6.18 6.18 0 014.89 1.92 6.8 6.8 0 011.8 4.38zM144.56 15.83h5.16v57.95h-5.16zM156.42 15.83h5.17v57.95h-5.17zM187.9 53a12.78 12.78 0 00-17.76 0 12.48 12.48 0 00-3.34 8.85 12.58 12.58 0 003.34 8.88 12.74 12.74 0 0017.76 0 12.6 12.6 0 003.35-8.91A12.49 12.49 0 00187.9 53zM184 67.51a6.14 6.14 0 01-5 2.29 6.07 6.07 0 01-5-2.29 8.66 8.66 0 01-1.85-5.64 8.55 8.55 0 011.85-5.58 6 6 0 015-2.29 6.11 6.11 0 015 2.29 8.61 8.61 0 011.85 5.58 8.72 8.72 0 01-1.85 5.64zM203.46 35.47h4.08v.06h-4.08zM71.8 35.53h66.07v4.08H71.8z" />
                <path d="M168.27 35.53v4.08h35.19v39.15H66.34V10l-2.27-1.62V5.84L56 0l-8.46 5.93v2.18l-2.18 1.58v36.64h-8V24.07l-2.45-2.16v-2.82l-8.26-7.28-8.44 7.38V22L16 23.91v54.85H4V39.61h8v-4.08H0v47.32h207.54V35.53zM28.66 78.76h-1.95V17.28L28.66 19zm3.59 0h-2v-58.3l2 1.72zm3.67 0H34V23.7l2 1.72zm9.44 0h-8V59.5h8zm19.68 0H56v-10l9 6.57zm0-5.88L56 66.34v-3.43l9 6.54zM65 67l-9-6.54V57l9 6.56zm0-5.88l-9-6.55v-3.43l9 6.54zm0-5.89l-9-6.54v-3.44l9 6.55zm0-5.88l-9-6.54v-3.44l9 6.54zm0-5.88l-9-6.55v-3.43L65 40zm0-5.89L56 31v-3.4l9 6.54zm0-5.88l-9-6.55v-3.43l9 6.53zm0-5.89l-9-6.55v-3.43l9 6.54zm0-5.88l-9-6.55V10l9 6.48zM65 14l-9-6.5V4.07l9 6.53z" />
              </svg>
            </a>
          </Link>
        </div>
        <div className="block sm:hidden">
          <button className="flex items-center px-3 py-2">
            <svg className="w-6 h-6 fill-current -mr-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full slideup sm:flex sm:items-center sm:w-auto font-medium text-gray-200 space-x-8">
          <Link href="/hotels">
            <a className="hover:text-white">Hotels</a>
          </Link>
          <Link href="/about">
            <a className="hover:text-white">About</a>
          </Link>
          <Link href="/contact">
            <a className="hover:text-white">Contact</a>
          </Link>
          <div onClick={toggleModal} className="cursor-pointer hover:text-white">
            Login/Sign Up
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
