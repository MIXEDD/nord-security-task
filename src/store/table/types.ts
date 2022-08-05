import { INIT_TABLE } from './constants';

export interface OnInitTableAction {
    type: typeof INIT_TABLE;
    payload: {
        columns: any;
        data: any;
        name: string;
    };
}

export type Action = OnInitTableAction;
