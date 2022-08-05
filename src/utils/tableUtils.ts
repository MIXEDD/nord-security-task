import ColumnFilter from '../components/columnFilter/columnFilter';

export const getColumnsWithFilters = (columns: any[]) => {
    return columns.map((column) => {
        return {
            ...column,
            Filter: ColumnFilter,
        };
    });
};
