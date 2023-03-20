import { configureStore } from "@reduxjs/toolkit";
import authReducer from './Auth';
import expenseReducer from './Expenses'
import themeReducer from'./themeSlice';

const store = configureStore({
    reducer : {
        auth : authReducer,
        expense : expenseReducer,
        theme : themeReducer
    }
})

export default store;