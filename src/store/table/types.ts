import { INIT_TABLE } from './constants';
import { Column } from 'react-table';

export interface OnInitTableAction {
    type: typeof INIT_TABLE;
    payload: {
        columns: Column<Record<string, unknown>>[];
        data: any[];
        name: string;
    };
}

export type Action = OnInitTableAction;
