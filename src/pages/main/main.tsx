import React, { useEffect, useMemo, useState } from 'react';

import Table from '../../components/table/table';
import { Api } from '../../api/api';
import { ServerListModel } from '../../api/interfaces';

const Main: React.FC = () => {
    const [fetchedData, setFetchedData] = useState<ServerListModel[]>([]);

    useEffect(() => {
        Api.getServerList().then((response) => {
            setFetchedData(response.data);
        });
    }, []);

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Distance',
                accessor: 'distance',
            },
        ],
        [],
    );

    return <Table columns={columns} data={fetchedData} />;
};

export default Main;
