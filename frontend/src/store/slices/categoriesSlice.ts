import { CategoryType } from "@/utils/Types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CategoriesState {
  categories: CategoryType[];
}

const initialState: CategoriesState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoryType[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
