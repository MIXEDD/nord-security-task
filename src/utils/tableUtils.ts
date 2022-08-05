import { Column } from 'react-table';

import ColumnFilter from '../components/columnFilter/columnFilter';

export const getColumnsWithFilters = (columns: Column<Record<string, unknown>>[]) =>
    columns.map((column) => ({
        ...column,
        Filter: ColumnFilter,
    }));
