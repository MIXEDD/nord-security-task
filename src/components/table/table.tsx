import React, { useEffect } from 'react';
import { Column, useFilters, useSortBy, useTable } from 'react-table';
import { useDispatch } from 'react-redux';

import SortFilter, { SortOrder } from '../sortFilter/sortFilter';
import { onInitTable } from '../../store/table/actions';

import './table.scss';

interface Props<T> {
    columns: Column<Record<string, unknown>>[];
    data: T[];
    name: string;
}

const Table = <T extends {}>(props: Props<T>) => {
    const { columns, data, name } = props;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(onInitTable(columns, data, name));
    }, []);

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
