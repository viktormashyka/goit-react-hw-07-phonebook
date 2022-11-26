import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = (state, action) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsInitialState = { items: [], isLoading: false, error: null };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      // state.items.push = action.payload;
      state.items.push(action.payload);
      // return [...state.items, action.payload];
    },
    [addContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
      // return state.filter(contact => contact.id !== action.payload);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const contactsInitialState = [
//   { id: 0, name: 'Viktor Mashyka', number: '0506644672' },
//   { id: 1, name: 'Yurii Mashyka', number: '0506644673' },
//   { id: 2, name: 'Roman Voloshyn', number: '0506644674' },
//   { id: 3, name: 'Volodymyr Khoptynec', number: '0506644675' },
//   { id: 4, name: 'Dmytro Khoptynec', number: '0506644676' },
// ];

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         return [...state, action.payload];
//       },
//       prepare(newContact) {
//         return {
//           payload: { ...newContact, id: nanoid() },
//         };
//       },
//     },

//     deleteContact: {
//       reducer(state, action) {
//         return state.filter(contact => contact.id !== action.payload);
//       },
//     },
//   },
// });

// export const { addContact, deleteContact, getVisibleContacts } =
//   contactsSlice.actions;
// export const contactsReducer = contactsSlice.reducer;
