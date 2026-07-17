import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/index.jsx";

export const Details = () => {
  const { id } = useParams();
  const { recipeDetails, setRecipeDetails, addToFavorites, favorites } = useContext(GlobalContext);

  useEffect(() => {
    async function fetchRecipeDetails() {
      try {
        const response = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`,
        );
        const data = await response.json();
        if (data?.data?.recipe) {
          setRecipeDetails(data?.data?.recipe);
        }
      } catch (e) {
        console.log(e);
      }
    }
    fetchRecipeDetails();
  }, [id, setRecipeDetails]);

  return (
    <div className="container mx-auto py-10 px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-5 -py-10">
          <span className="text-gray-600 text-sm">
            {recipeDetails?.publisher}
          </span>
          <h2 className="text-lg font-bold text-gray-800">
            {recipeDetails?.title}
          </h2>
          <button onClick={() => addToFavorites(recipeDetails)} className="bg-green-500 text-white py-2 px-4 rounded-lg text-sm uppercase w-[30%] font-semibold hover:bg-green-600 duration-300">
            {
            favorites.find((item) => item.id === recipeDetails?.id) ? "Remove from Favorites" : "Add to Favorites"
            }
          </button>
        </div>
        <div className="row-start-2 lg:row-start-auto">
          <div className="h-96 overflow-hidden rounded-xl group">
            <img
              src={recipeDetails?.image_url}
              alt={recipeDetails?.title}
              className="w-full h-full object-cover block group-hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="font-bold text-3xl">Ingredients</span>
        <ul>
          {recipeDetails?.ingredients?.map((item, index) => (
            <li key={index} className="text-black text-sm font-bold py-2">
              {item.quantity} {item.unit} {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
