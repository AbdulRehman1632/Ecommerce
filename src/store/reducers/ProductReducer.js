import { ProductTypes } from "../actions/ActionType";

const InitialValue = {
  allProducts: [],
  cart: [],
  women: [],
  watches: [],
  jewellery: [],
  beauty: [],
  bags: [],
  fragrances: [],
  tops: [],
  shoe: [],
};

export const ProductReducer = (state = InitialValue, { type, payload }) => {
  switch (type) {
    case ProductTypes.All_Products:
      return { ...state, allProducts: [...state.allProducts, ...payload] };

    case ProductTypes.CART_PRODUCT:
      const isAlreadyInCart = state.cart.some((item) => item.id === payload.id);
      return {
        ...state,
        cart: isAlreadyInCart ? state.cart : [...state.cart, payload],
      };

    case ProductTypes.REMOVE_CART:
      return {
        ...state,
        cart: [...state.cart.filter((item) => item.id !== payload.id)],
      };

    case ProductTypes.WOMEN_PRODUCTS:
      return { ...state, women: [...state.women, ...payload] };

    case ProductTypes.MEN_WATCHES:
      return { ...state, watches: [...state.watches, ...payload] };

    case ProductTypes.JEWELLERY:
      return { ...state, jewellery: [...state.jewellery, ...payload] };

    case ProductTypes.BEAUTY:
      return { ...state, beauty: [...state.beauty, ...payload] };

    case ProductTypes.BAGS:
      return { ...state, bags: [...state.bags, ...payload] };

    case ProductTypes.FRAGRANCES:
      return { ...state, fragrances: [...state.fragrances, ...payload] };

    case ProductTypes.TOPS:
      return { ...state, tops: [...state.tops, ...payload] };

    case ProductTypes.SHOES:
      return { ...state, shoe: [...state.shoe, ...payload] };

    default:
      return state;
  }
};
