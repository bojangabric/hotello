const Testimonials = () => (
  <div className="py-32 mt-32 font-medium bg-blue-100 bg-opacity-60">
    <div className="text-3xl text-center">
      <div className="w-24 h-1 mx-auto mb-4 border-4 border-b border-blue-500"></div>
      <div>What People Say About Us</div>
    </div>
    <div className="mt-20 text-center">
      <div className="w-4/5 mx-auto mb-8 italic lg:w-2/6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book.
      </div>
      <div className="flex justify-center mb-4">
        <img
          className="object-cover w-16 h-16 rounded-full"
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=144&h=144&q=80"
          alt=""
        />
      </div>
      <div className="text-lg font-medium text-gray-800">Emily Taylor</div>
      <div className="text-sm text-gray-700">United States</div>
    </div>
  </div>
);

export default Testimonials;
