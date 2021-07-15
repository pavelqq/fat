import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {},
    inner: {
        padding: theme.spacing(3, 3),
        width: theme.breakpoints.values.lg,
        maxWidth: '90%',
        margin: '0 auto'
    },
    media: {
        '& img': {
            width: '100%',
            height: 'auto'
        }
    }
}));

const UserFlows = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.inner}>
                <Grid
                    alignItems="center"
                    container
                    justify="space-between"
                    spacing={1}
                >
                    <Grid
                        item
                        lg={3}
                        md={3}
                        sm={8}
                        xs={12}
                    >
                        <Typography
                            gutterBottom
                            variant="h2"
                        >
                            Комьюнити
                        </Typography>
                        <Typography variant="subtitle2">
                            Общайся с людьми, обменивайся опытом, спрашивай советы, изучай их проекты
                        </Typography>
                    </Grid>
                    <Grid
                        className={classes.media}
                        item
                        lg={8}
                        md={8}
                        sm={8}
                        xs={12}
                    >
                        <img src="/images/presentation/dialogs.png" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default UserFlows;
