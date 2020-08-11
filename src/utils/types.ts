import Item from "../components/item";

export interface Regent {
  id: string,
  item: Item,
  quantity: number
}

export interface Recipe {
  id: string,
  name: string
  inputs: Array<Regent>,
  outputs: Array<Regent>,
  baseRate: number,
}

export enum ItemCategory {
  Parts = "Parts",
  Components = "Components",
  Equipment = "Equipment"
}

export interface Item {
  id: string,
  name: string,
  img?: string,
  recipes: Array<string>,
  category: ItemCategory
}

export function itemD(): Item {
  return {
    id: "DEF_ITM",
    name: "",
    recipes: [],
    category: ItemCategory.Parts
  }
}

export enum BuildingType {

}

export enum BuildingCategory {
  Special = "Special",
  Production = "Production",
  Power = "Power",
  Logistics = "Logistics",
  Organization = "Organization",
  Foundations = "Foundations",
  Walls = "Walls",
  Transportation = "Transportation"
}

export interface Building {
  id: string,
  name: string,
  category: BuildingCategory,
  type: BuildingType,
  imgId: string,
  recipies: Array<Recipe>
  consumes: Array<Item>,
  produces: Array<Item>,
  rate: number
}