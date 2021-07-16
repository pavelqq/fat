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
        '& img': {
            width: '100%',
            height: 'auto'
        }
    }
}));

const Details = () => {

    const classes = useStyles();

    return (
        <div>
            <div className={classes.inner}>
                <Grid
                    alignItems="center"
                    container
                    justify="space-between"
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
                            Детализация планов
                        </Typography>
                        <Typography variant="subtitle2">
                            Огромные возможности детализации планов питания и тренировок. Следите за каждым шагом ваших
                            друзей или
                            сравнивайте свой прогресс.
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
                        <img src="/images/presentation/details.png" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Details;
