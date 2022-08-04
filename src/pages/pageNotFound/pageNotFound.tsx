import React from 'react';
import Typography, { ElementType } from '../../atoms/typography/typography';
import Grid, { JustifyContent } from '../../atoms/grid/grid';

const PageNotFound: React.FC = () => {
    return (
        <Grid justifyContent={JustifyContent.Center}>
            <Typography text="Page not found" elementType={ElementType.H1} />
        </Grid>
    );
};

export default PageNotFound;
