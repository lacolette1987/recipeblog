import { createSlice } from '@reduxjs/toolkit';

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState: false, // Standardmäßig ist der Dark Mode deaktiviert.
  reducers: {
    toggleDarkMode: (state) => {
      return !state; // Aktualisiere den Zustand basierend auf dem vorherigen Zustand
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
