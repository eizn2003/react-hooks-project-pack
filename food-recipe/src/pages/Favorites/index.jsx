import { useContext } from "react";
import { GlobalContext } from "../../context/index.jsx";
import { RecipeItem } from "../../components/recipe-item/index.jsx";
import "../../App.css";

export const Favorites = () => {
  const { favorites } = useContext(GlobalContext);

  return (
    <div className="py-8 conatiner mx-auto flex flex-wrap justify-center gap-10">
      {favorites && favorites.length > 0 ? (
        favorites.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-4xl font-extrabold">
            You Got No Favorites. Please add some recipes to your favorites.
          </p>
        </div>
      )}
    </div>
  );
};
