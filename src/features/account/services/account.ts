import { apiSlice } from "@/features/api/apiSlice";
import { User } from "@/features/auth/domain/userTypes";
import { Endpoints } from "@/shared/constants/endpoints";

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => Endpoints.users,
        }),
    }),
});