import { useContext } from "react";
import { GlobalContext } from "../../context/index.jsx";
import { RecipeItem } from "../../components/recipe-item/index.jsx";
import "../../App.css";

export const Home = () => {
  const { loading, recipes } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="w-[50%] translate-x-1/2 px-5 text-red-700 lg:text-2xl text-xl text-lg font-bold text-center">
        Loading... Please wait.
      </div>
    );
  }

  return (
    <div className="py-8 conatiner mx-auto flex flex-wrap justify-center gap-10">
      {recipes && recipes.length > 0 ? (
        recipes.map((item) => <RecipeItem key={item.id} item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-4xl font-extrabold">
            Nothing to display. Please search for recipes.
          </p>
        </div>
      )}
    </div>
  );
};
