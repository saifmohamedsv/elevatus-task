import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Job } from "../../types/job";

export const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_API_URL }),
  tagTypes: ["Job"],
  endpoints: (builder) => ({
    getJobByUri: builder.query<Job, string>({
      query: (uri) => ({
        url: `/jobs/${uri}`,
      }),
      providesTags: ["Job"],
    }),
  }),
});

export const { useGetJobByUriQuery } = jobApi;
export default jobApi;
