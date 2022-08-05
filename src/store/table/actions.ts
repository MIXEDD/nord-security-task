import { INIT_TABLE } from './constants';
import { OnInitTableAction } from './types';
import { Column } from 'react-table';

export const onInitTable = <T>(
    columns: Column<Record<string, unknown>>[],
    data: T[],
    name: string,
): OnInitTableAction => ({
    type: INIT_TABLE,
    payload: {
        columns,
        data,
        name,
    },
});
