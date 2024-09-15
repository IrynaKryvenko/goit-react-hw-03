import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialFilterState,
  reducers: {
    onFilterChange(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;

export const { onFilterChange } = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;