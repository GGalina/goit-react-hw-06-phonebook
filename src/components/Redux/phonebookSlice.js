import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [],
    filter: '',
};

const phonebookSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },

        deleteContact: (state, action) => {
            const index = state.contacts.findIndex(
                contactItem => contactItem.id === action.payload
            );
            state.contacts.splice(index, 1);
        },

        filterContact: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addContact, deleteContact, filterContact } = phonebookSlice.actions;

export default phonebookSlice.reducer;