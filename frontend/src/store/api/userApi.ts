import { BACKEND_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "@/store/index";
import { categories_tag, tagTypes } from "@/store/api/tags";
import {
  Api_UserCategoriesResponse,
  Api_UserDetailResponse,
} from "@/utils/Types/types";
import { setCategories } from "../slices/categoriesSlice";

export const userApi = createApi({
  reducerPath: "userApi",
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
    fetchUser: builder.query<Api_UserDetailResponse, void>({
      query: () => "/detail",
    }),
    fetchUserCategories: builder.query<Api_UserCategoriesResponse, void>({
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
  }),
});
