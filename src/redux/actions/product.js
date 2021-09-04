import axios from 'axios';

export const SetLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(
      `/items?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
        sortBy.order
      }`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });

  axios.get(`/drinks?&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
    dispatch(setDrinks(data));
  });

  axios.get(`/desserts?&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
    dispatch(setDesserts(data));
  });

  axios.get(`/snacks?&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
    dispatch(setSnacks(data));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const setDrinks = (items) => ({
  type: 'SET_DRINKS',
  payload: items,
});

export const setDesserts = (items) => ({
  type: 'SET_DESSERTS',
  payload: items,
});

export const setSnacks = (items) => ({
  type: 'SET_SNACKS',
  payload: items,
});
