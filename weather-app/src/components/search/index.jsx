import "../index.css";

export const Search = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="w-full mx-auto flex items-center justify-center mt-10">
      <input
        type="text"
        className="text-lg font-semibold px-4 py-2 text-red-600 rounded-full border-2 border-gray-300 focus:outline-none focus:border-blue-500 shadow-md"
        placeholder="Enter city name..."
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button
        className="bg-red-500 text-white py-2 px-4 rounded-full text-lg font-bold m-2 shadow-md cursor-pointer hover:bg-red-600 transition duration-1000"
        onClick={handleSearch}
      >
        Load Weather
      </button>
    </div>
  );
};
