import React from 'react'
import * as ls from "local-storage";
import { Item, Building, Recipe } from "./types"

const KEYS = {
  ITEMS: "ITEMS",
  BUILDINGS: "BUILDINGS",
  RECIPES: "RECIPES"
}

export const ItemContext = React.createContext<Array<Item>>(getItems())
export const BuildingContext = React.createContext<Array<Building>>(getBuildings())
export const RecipeContext = React.createContext<Array<Recipe>>(getRecipes())

export function saveItems(items: Array<Item>): boolean {
  return ls.set(KEYS.ITEMS, items)
}

export function getItems(): Array<Item> {
  return ls.get(KEYS.ITEMS) || []
}

export function saveBuildings(buildings: Array<Building>): boolean {
  return ls.set(KEYS.ITEMS, buildings)
}

export function getBuildings(): Array<Building> {
  return ls.get(KEYS.ITEMS) || []
}

export function saveRecipes(recipes: Array<Recipe>): boolean {
  return ls.set(KEYS.RECIPES, recipes)
}

export function getRecipes(): Array<Recipe> {
  return ls.get(KEYS.RECIPES) || []
}