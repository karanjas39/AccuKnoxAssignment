import { BACKEND_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store/index";
import { categories_tag, tagTypes } from "@/store/api/tags";
import {
  Api_UserCategoriesResponse,
  GeneralResponse,
} from "@/utils/Types/types";
import { z_categoryCreate_type } from "@singhjaskaran/accuknox-common";
import { setCategories } from "../slices/categoriesSlice";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BACKEND_URL}/user`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes,
  endpoints: (builder) => ({
    allCategories: builder.query<Api_UserCategoriesResponse, void>({
      query: () => "/categories",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCategories(data.categories));
        } catch (error) {
          console.error(error);
        }
      },
      providesTags: [categories_tag],
    }),
    addCategory: builder.mutation<GeneralResponse, z_categoryCreate_type>({
      query: (data) => ({
        url: "/category/create",
        method: "POST",
        body: data,
      }),
      invalidatesTags: [categories_tag],
    }),
  }),
});
