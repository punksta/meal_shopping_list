type ID = string;

export interface MealPLan {
  id: ID;
  title: String;
  description: String;
  type: String;
}

export interface IngredientValue {
  unit: string;
  value: string;
  servingSize: number;
}

export interface ShoppingIngredient {
  id: ID;
  optional: Boolean;
  shoppingSection: string;
  values: {
    us: Array<IngredientValue>;
    metric: Array<IngredientValue>;
  };
}

export interface Ingredient {
  id: string;
  titles: {
    singular: string;
    plural: string;
  };
}
