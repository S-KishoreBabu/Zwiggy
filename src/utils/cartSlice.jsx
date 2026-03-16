import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItems: (state, action) => {
            const incomingItem = action.payload;
            const itemId = incomingItem.card.info.id;
            const existingItem = state.items.find(i => i.dData.card.info.id === itemId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ dData: incomingItem, quantity: 1 });
            }
        },
        removeItems: (state, action) => {
            const incomingItem = action.payload;
            const itemId = incomingItem.card.info.id;
            const existingItemIndex = state.items.findIndex(i => i.dData.card.info.id === itemId);

            if (existingItemIndex !== -1) {
                if (state.items[existingItemIndex].quantity > 1) {
                    state.items[existingItemIndex].quantity -= 1;
                } else {
                    state.items.splice(existingItemIndex, 1);
                }
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }

});

export const {addItems,removeItems,clearCart} = cartSlice.actions;
export default cartSlice.reducer