import React, { useEffect, useMemo, useState } from 'react';

import Table from '../../components/table/table';
import { Api } from '../../api/api';
import { ServerListModel } from '../../api/interfaces';
import ColumnFilter from '../../components/columnFilter/columnFilter';

const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name',
        Filter: ColumnFilter,
    },
    {
        Header: 'Distance',
        accessor: 'distance',
        Filter: ColumnFilter,
    },
];

const Main: React.FC = () => {
    const [fetchedData, setFetchedData] = useState<ServerListModel[]>([]);

    useEffect(() => {
        Api.getServerList().then((response) => {
            setFetchedData(response.data);
        });
    }, []);

    return <Table columns={COLUMNS} data={fetchedData} />;
};

export default Main;
