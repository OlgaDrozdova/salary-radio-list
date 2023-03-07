import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    form: formReducer
});

const store = configureStore({ reducer: rootReducer });

export default store;