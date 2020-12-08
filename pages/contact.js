const ContactPage = () => (
  <div>
    <div className="text-white bg-blue-500">
      <div className="w-4/5 flex justify-between lg:w-1/2 mx-auto items-center pt-20 pb-16">
        <div>
          <div className="leading-none text-6xl font-bold">Contact Us</div>
        </div>
      </div>
    </div>

    <div className="flex py-24 w-4/5 md:w-3/5 mx-auto">
      <form className="w-full max-w-lg mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wider text-gray-700 text-xs font-semibold mb-2"
              htmlFor="first-name"
            >
              First Name
            </label>
            <input
              className="text-gray-600 mt-1 block w-full rounded border-gray-200 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-3"
              id="first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wider text-gray-700 text-xs font-semibold mb-2"
              htmlFor="last-name"
            >
              Last Name
            </label>
            <input
              className="text-gray-600 mt-1 block w-full rounded border-gray-200 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-3"
              id="last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wider text-gray-700 text-xs font-semibold mb-2" htmlFor="email">
              E-mail
            </label>
            <input
              className="text-gray-600 mt-1 block w-full rounded border-gray-200 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-3"
              placeholder="jane@example.com"
              id="email"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wider text-gray-700 text-xs font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="text-gray-600 mt-1 block w-full rounded border-gray-200 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-64 resize-y"
              placeholder="Enter your message..."
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button className="bg-blue-500 px-10 py-3 text-white rounded hover:bg-blue-600" type="button">
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  </div>
);

export default ContactPage;
