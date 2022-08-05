import React from 'react';
import classnames from 'classnames';

import styles from './sortFilter.scss';

export enum SortOrder {
    Asc = 'asc',
    Desc = 'desc',
}

interface Props {
    sortOrder: SortOrder;
}

const SortFilter: React.FC<Props> = (props) => {
    const { sortOrder } = props;

    return <i className={classnames(styles.arrow, styles[sortOrder])} />;
};

export default SortFilter;
