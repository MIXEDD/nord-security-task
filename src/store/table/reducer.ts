import { INIT_TABLE } from './constants';
import { Action, OnInitTableAction } from './types';

export interface TableState {
    tableState: { columns: any; data: any; name: string }[];
}

const initialState: TableState = {
    tableState: [],
};

export function tableReducer(state: TableState = initialState, action: Action) {
    switch (action.type) {
        case INIT_TABLE: {
            const payload = (action as OnInitTableAction).payload;

            return {
                tableState: [...state.tableState, payload],
            };
        }
        default:
            return state;
    }
}
