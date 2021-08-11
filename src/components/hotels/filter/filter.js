import CheckBox from './checkbox';
import { FilterContainer } from './container';

const Filter = () => (
  <div className="top-0 fixed inset-y-0 left-0 z-30 self-start w-64 px-4 mr-4 overflow-y-auto bg-white shadow-sm border-opacity-70 border-r lg:border border-gray-200 whitespace-nowrap lg:rounded lg:translate-x-0 lg:w-auto lg:overflow-visible lg:static lg:block">
    <div className="absolute top-0 left-0 pt-3 pl-2 lg:hidden">
      <button className="block text-gray-600 hover:text-gray-800">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z" />
        </svg>
      </button>
    </div>
    <div className="text-xl font-medium text-gray-800 mt-3">Filter</div>
    <div className="mt-8 lg:mt-0 divide-y">
      <FilterContainer name={'Hotel name'}>
        <input
          className="text-gray-600 mt-1 block w-full rounded border-gray-200 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 py-1"
          type="text"
          placeholder="Search by hotel name..."
        />
      </FilterContainer>

      <FilterContainer name={'Property types'}>
        <CheckBox name="Hotel" count="232" />
        <CheckBox name="Resort" count="192" />
        <CheckBox name="Villa" count="85" />
        <CheckBox name="Heritage" count="115" />
        <CheckBox name="Motel" count="140" />
        <CheckBox name="Guest house" count="20" />
      </FilterContainer>

      <FilterContainer name={'Ratings'}>
        {Array.from(Array(5), (e, i) => (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id={i}
                type="checkbox"
                className="mr-1 rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
              <label htmlFor={i} className="ml-1 text-gray-700 flex space-x-1">
                {Array.from(Array(i + 1), () => (
                  <svg
                    className="h-5 w-5 text-yellow-300 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </label>
            </div>
            <div className="text-sm text-gray-600">{i + 18}</div>
          </div>
        )).reverse()}
      </FilterContainer>

      <FilterContainer name={'User review'}>
        <CheckBox name="Excellent" count="23" />
        <CheckBox name="Good" count="12" />
        <CheckBox name="Fair" count="44" />
        <CheckBox name="Poor" count="13" />
        <CheckBox name="Bad" count="4" />
      </FilterContainer>
    </div>
  </div>
);
export { Filter };
