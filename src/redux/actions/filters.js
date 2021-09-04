export const setSortBy = ({ type, order }) => ({
  type: 'SET_SORT_BY',
  payload: { type, order },
});

export const setCategory = (catIndex) => ({
  type: 'SET_CATEGORY',
  payload: catIndex,
});

export const setCategoryProduct = (catIndex) => ({
  type: 'SET_CATEGORY_PRODUCT',
  payload: catIndex,
});
