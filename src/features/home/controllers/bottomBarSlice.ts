import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type BottomBarState = {
    showBar: boolean
}

const bottomBarSlice = createSlice({
    name: 'bottombar',
    initialState: { showBar: true } as BottomBarState,
    reducers: {
        show: (state) => {
            state.showBar = true;
        },
        hide: (state) => {
            state.showBar = false;
        }
    }
});

export const { show, hide } = bottomBarSlice.actions;

export default bottomBarSlice.reducer;