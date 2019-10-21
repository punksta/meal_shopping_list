import {Ingredient, ShoppingIngredient} from './index';
import {ShoppingSettings} from '../components/ShoppingSettingsComponent';

const isPlural = (n: number) => n > 1;

export const buildShoppingSections = (
  items: Array<ShoppingIngredient>,
  settings: ShoppingSettings,
  ingredients: Array<Ingredient>,
): Array<{
  title: string;
  data: Array<string>;
}> => {
  const dataInObject: Record<string, Array<string>> = items.reduce(
    (
      p: Record<string, Array<string>>,
      shoppingIngredient: ShoppingIngredient,
    ) => {
      const sectionValue = p[shoppingIngredient.shoppingSection] || [];

      const valueAndUnit = shoppingIngredient.values[settings.system].find(
        r => r.servingSize == settings.servingCount,
      );

      const ingredient = ingredients.find(i => shoppingIngredient.id === i.id);

      if (valueAndUnit && ingredient) {
        const name = isPlural(Number.parseFloat(valueAndUnit.value))
          ? ingredient.titles.plural
          : ingredient.titles.singular;

        sectionValue.push(
          `${name},${shoppingIngredient.optional ? '(optional)' : ''} ${
            valueAndUnit.value
          } ${valueAndUnit.unit}`,
        );
      }

      p[shoppingIngredient.shoppingSection] = sectionValue;

      return p;
    },
    {},
  );

  return Object.entries(dataInObject).map(([k, v]) => ({title: k, data: v}));
};
