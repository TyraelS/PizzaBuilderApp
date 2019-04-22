import * as actionTypes from '../actions/types';

const initialState = {
  ingredients: {
    salamis: 0,
    mushrooms: 0,
    vegs: 0,
    corns: 0
  },
  totalPrice: 4
};

const INGREDIENT_PRICES = {
  salamis: 5,
  vegs: 2,
  corns: 2,
  mushrooms: 3
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
      };
    case actionTypes.REMOVE_INGREDIENT: {
      if (state.ingredients[action.ingredientName] > 0) {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.ingredientName]:
              state.ingredients[action.ingredientName] - 1
          },
          totalPrice:
            state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
        };
      } else {
        return state;
      }
    }
    default:
      return state;
  }
};

export default reducer;
