import React, { useEffect, useState } from 'react';

import Table from '../../components/table/table';
import { Api } from '../../api/api';
import { ServerListModel } from '../../api/interfaces';
import ColumnFilter from '../../components/columnFilter/columnFilter';

const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'name',
    },
    {
        Header: 'Distance',
        accessor: 'distance',
    },
];

const TABLE_NAME = 'MAIN_TABLE';

const Main: React.FC = () => {
    const [fetchedData, setFetchedData] = useState<ServerListModel[]>([]);

    useEffect(() => {
        Api.getServerList().then((response) => {
            setFetchedData(response.data);
        });
    }, []);

    if (!fetchedData.length) {
        return null;
    }

    return <Table columns={COLUMNS} data={fetchedData} name={TABLE_NAME} />;
};

export default Main;
