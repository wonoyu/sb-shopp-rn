import { apiSlice } from "@/features/api/apiSlice";
import { Product, ProductId } from "../domain/homeTypes";
import { Endpoints } from "@/shared/constants/endpoints";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => Endpoints.products,
            providesTags: (result = [], error, arg) => ['Product', ...result.map(({ id }) => ({ type: 'Product', id }) as const)],
        }),
        getProduct: builder.query<Product, ProductId>({
            query: (productId) => `${Endpoints.products}/${productId}`,
            providesTags: (result, error, arg) => [{ type: 'Product', id: arg }],
        }),
    }),
});

export const { useGetProductsQuery, useGetProductQuery } = extendedApiSlice;