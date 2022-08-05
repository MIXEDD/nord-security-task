import { INIT_TABLE } from './constants';
import { OnInitTableAction } from './types';

export const onInitTable = (columns: any, data: any, name: string): OnInitTableAction => ({
    type: INIT_TABLE,
    payload: {
        columns,
        data,
        name,
    },
});
