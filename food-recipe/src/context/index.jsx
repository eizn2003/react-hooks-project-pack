import { createContext } from "react";
import { useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [favorites, setFavorites] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`,
      );
      const data = await response.json();
      if (data?.data?.recipes) {
        setRecipes(data?.data?.recipes);
        setLoading(false);
        setSearchParam("");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  function addToFavorites(getCurrentItem) {
    let cpyFavorites = [...favorites];
    const index = cpyFavorites.findIndex((item) => item.id === getCurrentItem.id);
    if (index === -1) {
      cpyFavorites.push(getCurrentItem);
      setFavorites(cpyFavorites);
    } else {
      cpyFavorites.splice(index, 1);
      setFavorites(cpyFavorites);
    }
  }

  console.log(loading, recipes);

  return (
    <GlobalContext.Provider
      value={{ searchParam, loading, recipes, setSearchParam, handleSubmit, recipeDetails, setRecipeDetails, favorites, setFavorites, addToFavorites }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
