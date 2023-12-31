import { AllData, CartData, Data } from "@/app/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AllData = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, actions: PayloadAction<Data>) => {
      const newItem = actions.payload;
      const isItemExist  = state.items.findIndex(
        (item) => item.items.id === newItem.items.id
        );
     
      if (isItemExist !== -1) {
        state.items[isItemExist].quantity++;
        // alert(`Dear, this option already added to cart! , Now we have increase ite to ${state.items[isItemExist].quantity} items`);

      } else {
        state.items.push({items:newItem.items , quantity:1});
      }
    },
    removeItems:(state ,action : PayloadAction<Data>)=>{
      const newItem = action.payload;
      const isItemExist = state.items.findIndex(index=>(index.items.id === newItem.items.id))
      if(isItemExist != -1){
        state.items.splice(isItemExist,1)
      }
    }
  },
});

export const { addItem,removeItems } = cartSlice.actions;
export default cartSlice.reducer;
// , increaseItems ,decreaseItems ,removeItems
