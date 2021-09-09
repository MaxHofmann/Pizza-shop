const initialState = {
  categoryPizzas: null,
  categoryProduct: null,
  sortBy: {
    type: 'popular',
    order: 'desc',
  },
};

const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };

    case 'SET_CATEGORY':
      return {
        ...state,
        categoryPizzas: action.payload,
      };

    case 'SET_CATEGORY_PRODUCT':
      return {
        ...state,
        categoryProduct: action.payload,
      };

    default:
      return state;
  }
};
export default filters;
