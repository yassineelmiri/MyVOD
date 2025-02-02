import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  films: [],
  loading: false,
};

const filmSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms: (state, action) => {
      state.films = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setFilms, setLoading } = filmSlice.actions;
export default filmSlice.reducer;
