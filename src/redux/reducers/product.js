const initialState = {
  items: [],
  itemsDrink: [],
  itemsDesserts: [],
  itemsSnacks: [],
  isLoaded: false,
};

const product = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoaded: true,
      };
    case 'SET_DRINKS':
      return {
        ...state,
        itemsDrink: action.payload,
        isLoaded: true,
      };
    case 'SET_DESSERTS':
      return {
        ...state,
        itemsDesserts: action.payload,
        isLoaded: true,
      };
    case 'SET_SNACKS':
      return {
        ...state,
        itemsSnacks: action.payload,
        isLoaded: true,
      };
    case 'SET_LOADED':
      return {
        ...state,
        isLoaded: action.payload,
      };

    default:
      return state;
  }
};

export default product;
