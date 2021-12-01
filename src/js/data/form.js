import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: nanoid(), count: 1, productName: "brood" },
  { id: nanoid(), count: 6, productName: "appels" },
  { id: nanoid(), count: 3, productName: "yoghurt" },
];

const mySlice = createSlice({
  name: "shoplist",
  initialState,
  reducers: {
    addItem(state, { payload }) {
      state.push(payload);
    },
    deleteItem(state, { payload }) {
      const foundItem = state.findIndex((el) => el.id === payload);
      state.splice(foundItem, 1);
    },
  },
});

export const { addItem, deleteItem } = mySlice.actions;
export default mySlice.reducer;
