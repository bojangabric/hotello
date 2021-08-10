import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <button type="button" onClick={openModal} className="font-medium hover:text-white">
        Login/Sign Up
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>
            <span className="inline-block h-screen align-middle" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded">
                <button onClick={closeModal} className="absolute top-0 right-0 mr-6 mt-4">
                  <XIcon className="h-5 w-5 text-gray-500 hover:text-gray-800 transition" />
                </button>
                <form className="" method="POST">
                  <div className="flex flex-col mt-4">
                    <label
                      className="block uppercase tracking-wider text-gray-700 text-xs font-semibold mb-2"
                      htmlFor="email"
                    >
                      E-Mail Address
                    </label>
                    <input
                      className="text-gray-600 mt-1 block w-full rounded border-gray-200 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-3"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                    />
                  </div>
                  <div className="flex flex-col mt-6">
                    <label
                      className="block uppercase tracking-wider text-gray-700 text-xs font-semibold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="text-gray-600 mt-1 block w-full rounded border-gray-200 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-3"
                      name="password"
                      id="password"
                      type="password"
                      placeholder="******************"
                      required
                    />
                  </div>
                  <div className="flex mt-6">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        className="mr-1 rounded border-gray-200 text-blue-600 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                        name="remember"
                        id="remember"
                      />
                      <span className="ml-2 text-sm text-gray-700">Remember Me</span>
                    </label>
                  </div>
                  <div className="flex sm:block sm:text-center md:flex flex-col mt-6">
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-4">
                  <a href="#!" className="no-underline hover:underline text-blue-dark text-xs">
                    Forgot Your Password?
                  </a>
                </div>
                <div className="text-center mx-auto text-sm text-gray-500 my-10 w-full sm:w-4/5 md:w-full border-b border-gray-300 leading-[0.1em]">
                  <span className="bg-white px-3">or</span>
                </div>
                <div className="flex sm:justify-center md:justify-between flex-wrap sm:flex-no-wrap pb-20 md:pb-4">
                  <div className="w-full sm:w-auto mb-6 sm:mb-0">
                    <div className="flex justify-center items-center bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded px-6 py-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" className="fill-current h-5 w-5 mr-2">
                        <path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z" />
                      </svg>
                      <div className="font-medium">Sign in with Google</div>
                    </div>
                  </div>
                  <div className="py-3 border-gray-200 border bg-gray-100 text-gray-500 px-3 rounded flex flex-col justify-center mr-6 md:mr-0 sm:mx-6 md:mx-0 hover:bg-gray-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-current h-5 w-5">
                      <path d="M20.766 0H3.234A3.236 3.236 0 000 3.234v17.532A3.236 3.236 0 003.234 24h8.645l.016-8.578H9.668a.527.527 0 01-.527-.524l-.008-2.761a.522.522 0 01.523-.528h2.223V8.938c0-3.102 1.894-4.79 4.66-4.79h2.27c.289 0 .527.235.527.528v2.328a.528.528 0 01-.527.527h-1.391c-1.504 0-1.797.715-1.797 1.766v2.312h3.305c.316 0 .558.274.523.586l-.328 2.766a.527.527 0 01-.523.46h-2.961L15.62 24h5.145A3.236 3.236 0 0024 20.766V3.234A3.236 3.236 0 0020.766 0zm0 0" />
                    </svg>
                  </div>
                  <div className="py-3 border-gray-200 border bg-gray-100 text-gray-500 px-3 rounded flex flex-col justify-center hover:bg-gray-200 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current h-5 w-5">
                      <path d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default LoginModal;
