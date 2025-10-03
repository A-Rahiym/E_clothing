import { createSelector } from "reselect";

export const selectCategoriesReducer = (state) => state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer], // input selector
  (categoriesSlice) => categoriesSlice.categoriesArray // Output selector
);

export const selectCategoryMap = createSelector(
  [selectCategories],
  (categories) =>
    categories.reduce((acc, category) => {
      console.log(`category array: ${category}`)
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);

// first checks if the categories array is present in the state
// then checks if the category param is present in the categories array
// if both are present then it returns the items of that category