import { BACKEND_URL } from "@/utils/constants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { tagTypes } from "@/store/api/tags";
import { z_userLogin_type } from "@singhjaskaran/accuknox-common";
import { Api_LoginResponse } from "@/utils/Types/types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_URL }),
  tagTypes,
  endpoints: (builder) => ({
    logIn: builder.mutation<Api_LoginResponse, z_userLogin_type>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});
