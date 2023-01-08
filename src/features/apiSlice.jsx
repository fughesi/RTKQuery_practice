import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      method: "GET",
      providesTags: ["Products"],
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
      method: "GET",
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Products"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `products/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Products"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productsApi;
