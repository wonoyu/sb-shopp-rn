import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type SearchState = {
    keyword: string,
}

const searchSlice = createSlice({
    name: 'search',
    initialState: { keyword: '' } as SearchState,
    reducers: {
        find: (state, action: PayloadAction<string>) => {
            state.keyword = action.payload;
        }
    },
})

export const { find } = searchSlice.actions;

export default searchSlice.reducer;