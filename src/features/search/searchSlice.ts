import { createSlice } from "@reduxjs/toolkit";

interface SearchState {
  term: string;
}

const initialState: SearchState = {
  term: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    updateSearchTerm: (state, action) => {
      state.term = action.payload;
    },
  },
});

export const { updateSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
