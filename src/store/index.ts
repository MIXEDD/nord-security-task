import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tableReducer, TableState } from './table/reducer';

const rootReducer = combineReducers({
    table: tableReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export interface RootState {
    table: TableState;
}
