const FilterContainer = ({ name, children }) => (
  <div className="py-4">
    <div className="flex items-center justify-between text-blue-600 mb-2">
      <div className="font-medium">{name}</div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 -mt-1 fill-current">
        <path d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z" />
      </svg>
    </div>
    <div className="space-y-1">{children}</div>
  </div>
);

export { FilterContainer };
