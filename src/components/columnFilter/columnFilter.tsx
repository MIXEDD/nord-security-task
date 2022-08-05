import React from 'react';

import styles from './columnFilter.scss';

interface Props {
    column: any;
}

const ColumnFilter: React.FC<Props> = (props) => {
    const {
        column: { filterValue, setFilter },
    } = props;

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    return (
        <input
            className={styles.input}
            value={filterValue || ''}
            onClick={(event) => event.stopPropagation()}
            onChange={onChange}
        />
    );
};

export default ColumnFilter;
