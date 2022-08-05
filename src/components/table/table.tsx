import React from 'react';
import { Column, useFilters, useSortBy, useTable } from 'react-table';
import SortFilter, { SortOrder } from '../sortFilter/sortFilter';

import './table.scss';

interface Props<T> {
    columns: Column<Record<string, unknown>>[];
    data: T[];
}

const Table = <T extends {}>(props: Props<T>) => {
    const { columns, data } = props;

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns,
            data,
        },
        useFilters,
        useSortBy,
    );

    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column: any) => (
                            <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                {column.canFilter && <div>{column.render('Filter')}</div>}
                                {column.isSorted && (
                                    <SortFilter
                                        sortOrder={
                                            column.isSortedDesc ? SortOrder.Desc : SortOrder.Asc
                                        }
                                    />
                                )}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell) => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;
