import { Link } from "react-router-dom";
import "../../App.css";

export const RecipeItem = ({ item }) => {
  return (
    <div className="flex flex-col w-80 overflow-hidden bg-white/75 gap-5 shadow-xl border-2 rounded-2xl border-white">
      <div className="h-40 flex justify-center items-center overflow-hidden rounded-xl">
        <img src={item?.image_url} alt={item.title} className="block w-full"/>
      </div>
      <div className="px-5 py-3 flex flex-col gap-2">
        <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>
        <p className="text-gray-600 text-sm">{item.publisher}</p>
        <Link to={`/recipe-item/${item.id}`} className="text-green-500 text-sm hover:text-yellow-700 duration-500 font-semibold">
          Learn More
        </Link>
      </div>
    </div>
  );
};
