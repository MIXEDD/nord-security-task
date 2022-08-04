import React from 'react';
import Typography, { ElementType } from '../../atoms/typography/typography';
import Layout, { JustifyContent } from '../../atoms/layout/layout';

const PageNotFound: React.FC = () => {
    return (
        <Layout justifyContent={JustifyContent.Center}>
            <Typography text="Page not found" elementType={ElementType.H1} />
        </Layout>
    );
};

export default PageNotFound;
