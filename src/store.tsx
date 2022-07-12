import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './shared/reducers/RootReducer';

const store = configureStore({ reducer: rootReducer });

export default store;
