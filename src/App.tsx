import React from 'react';
import { ItemContext, BuildingContext, RecipeContext, getBuildings, getItems, getRecipes } from "./utils/store"

const initialItems = getItems()
const initialBuildings = getBuildings()
const initialRecipies = getRecipes()

function App() {
  return (
    <RecipeContext.Provider value={initialRecipies}>
      <ItemContext.Provider value={initialItems}>
        <BuildingContext.Provider value={initialBuildings}>
          <div className="App">

          </div>
        </BuildingContext.Provider>
      </ItemContext.Provider>
    </RecipeContext.Provider>

  );
}

export default App;
