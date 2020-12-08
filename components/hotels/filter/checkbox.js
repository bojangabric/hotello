const CheckBox = ({ name, count }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center">
      <input
        id={name}
        type="checkbox"
        className="mr-1 rounded border-gray-200 text-blue-600 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
      />
      <label htmlFor={name} className="ml-1 text-gray-600">
        {name}
      </label>
    </div>
    <div className="text-sm text-gray-600">{count}</div>
  </div>
);
export default CheckBox;
