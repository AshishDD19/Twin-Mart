import { babyCare } from "./babyCare";
import { toysSports } from "./toysSports";
import { healthBeauty } from "./healthBeauty";
import { electronics } from "./electronics";
import { homeKitchen } from "./homeKitchen";
import { giftsStationery } from "./giftsStationery";
import { fashionLifestyle } from "./fashionLifestyle";
import { sweetCravings } from "./sweetCravings";
import { frozenFoods } from "./frozenFoods";
import { iceCreamDesserts } from "./iceCreamDesserts";
import { masalaDryFruits } from "./masalaDryFruits";
import { dairyBreadEggs } from "./dairyBreadEggs";
import { fruitsVegetables } from "./fruitsVegetables_list";

export const allProducts = {
  babyCare,
  toysSports,
  healthBeauty,
  electronics,
  homeKitchen,
  giftsStationery,
  fashionLifestyle,
  sweetCravings,
  frozenFoods,
  iceCreamDesserts,
  masalaDryFruits,
  dairyBreadEggs,
  fruitsVegetables,
}

// Combine all product lists into one unified array
export const allProductsList = [
  ...babyCare,
  ...toysSports,
  ...healthBeauty,
  ...electronics,
  ...homeKitchen,
  ...giftsStationery,
  ...fashionLifestyle,
  ...sweetCravings,
  ...frozenFoods,
  ...iceCreamDesserts,
  ...masalaDryFruits,
  ...dairyBreadEggs,
  ...fruitsVegetables,
];
