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
        '& video': {
            width: '100%',
            height: 'auto'
        }
    }
}));

const UserFlows = () => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.inner}>
                <Grid
                    alignItems="center"
                    container
                    justify="space-between"
                    spacing={1}
                >
                    <Grid
                        item
                        lg={4}
                        md={4}
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
                        lg={6}
                        md={6}
                        xs={12}
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            alt="загрузка..."
                        >
                            <source
                                src="/videos/profile.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default UserFlows;
