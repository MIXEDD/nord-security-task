import { INIT_TABLE } from './constants';
import { Action, OnInitTableAction } from './types';

interface State {
    table: { columns: any; data: any; name: string }[];
}

const initialState: State = {
    table: [],
};

export function tableReducer(state: State = initialState, action: Action) {
    switch (action.type) {
        case INIT_TABLE: {
            const payload = (action as OnInitTableAction).payload;

            return [...state.table, payload];
        }
        default:
            return state;
    }
}
