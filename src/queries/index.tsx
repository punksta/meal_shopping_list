import gql from 'graphql-tag';

export const USER_MEALPLAN = gql`
  query {
    memberMealplans {
      id
      title
      description
      type
    }
  }
`;

export const MEAL_PLAN_INGREDIENTS = gql`
  query getIngredientsOfUserMealPLan($mealPlanId: ID!) {
    mealplan(id: $mealPlanId) {
      shoppingList {
        id
        optional
        shoppingSection
        values {
          us {
            servingSize
            unit
            value
          }
          metric {
            servingSize
            unit
            value
          }
        }
      }
    }
    ingredients {
      id
      titles {
        singular
        plural
      }
    }
  }
`;
