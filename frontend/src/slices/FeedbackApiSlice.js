import { apiSlice } from "./apiSlice";
import { LISTS_URL } from "../constants";

export const listApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getLists: builder.query({
      query: (id) => ({
        url: `${LISTS_URL}`,
      }),
      providesTags: ["List"],
    }),
    createList: builder.mutation({
      query: (data) => ({
        url: `${LISTS_URL}/create-list`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["List"],
    }),
    deleteList: builder.mutation({
      query: ({ id }) => ({
        url: `${LISTS_URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["List"],
    }),
    updateList: builder.mutation({
      query: (data) => ({
        url: `${LISTS_URL}/${data._id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["List"],
    }),
  }),
});

export const {
  useCreateListMutation,
  useGetListsQuery,
  useUpdateListMutation,
  useDeleteListMutation,
} = listApiSlice;
