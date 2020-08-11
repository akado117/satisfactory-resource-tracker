import {Item, Recipe, Regent, ItemCategory} from "./types"

const items: Array<Item> = [
  {
    id: "BAU",
    name: "Bauxite",
    recipes: ["AL_SO"],
    category: ItemCategory.Components
  },{
    id: "COP",
    name: "Copper Ore",
    recipes: ["CO_IN", "CO_AL", "PU_CO", "IR_AL"],
    category: ItemCategory.Components
  }
]
