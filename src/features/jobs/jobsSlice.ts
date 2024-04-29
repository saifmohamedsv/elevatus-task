import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FetchJobsResponse } from "../../types/job";

export const jobsApi = createApi({
  reducerPath: "jobsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_API_URL }),
  tagTypes: ["Jobs"],
  endpoints: (builder) => ({
    getJobs: builder.query<
      { results: FetchJobsResponse },
      { page?: number; limit?: number }
    >({
      query: ({ page = 0, limit = 10 }) => ({
        url: `/jobs`,
        headers: {
          "accept-account": process.env.REACT_APP_ACCEPT_ACCOUNT,
          "accept-company": process.env.REACT_APP_ACCEPT_COMPANY,
        },

        params: {
          language_profile_uuid: "ee5d991c-cdc6-4e83-b0b3-96f147208549",
          page,
          limit,
        },
      }),
      providesTags: ["Jobs"],
    }),
  }),
});

export const { useGetJobsQuery } = jobsApi;
export default jobsApi;
