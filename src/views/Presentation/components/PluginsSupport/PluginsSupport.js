import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    inner: {
        padding: theme.spacing(1, 3),
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

const PluginsSupport = () => {

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
                            variant="h3"
                        >
                            Функционал
                        </Typography>
                        <Typography variant="subtitle2">
                            Огромный простор для творчества и действий: создание и участие в проектах,
                            графики(немножно пока), статистики(тоже немножко), достижения(в планах).
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
                                src="/videos/functions.mp4"
                                type="video/mp4"
                            />
                        </video>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default PluginsSupport;
