import { configureStore } from '@reduxjs/toolkit';
import { sliceContact } from '../slice/sliceContact';
const store = configureStore({
  reducer: {
    phonebook: sliceContact.reducer,
  },
});
export default store;
