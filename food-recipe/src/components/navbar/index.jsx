import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context/index.jsx";

export const NavBar = () => {
  const { searchParam, setSearchParam, handleSubmit } =
    useContext(GlobalContext);

  console.log(searchParam);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h1 className="text-4xl font-bold text-orange-500">
        <NavLink to="/">FOODRECIPE.</NavLink>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Search for a recipe..."
          className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </form>
      <ul className="flex font-bold space-x-4">
        <li>
          <NavLink to="/" className="hover:text-black duration-900">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className="hover:text-black duration-900">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
