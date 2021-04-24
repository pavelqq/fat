import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Card, Typography, Grid, colors} from '@material-ui/core';

import Label from "../../../../components/Label";

const useStyles = makeStyles(theme => ({
    root: {},
    content: {
        padding: 0
    },
    item: {
        padding: theme.spacing(3),
        textAlign: 'center',
        [theme.breakpoints.up('md')]: {
            '&:not(:last-of-type)': {
                borderRight: `1px solid ${theme.palette.divider}`
            }
        },
        [theme.breakpoints.down('sm')]: {
            '&:not(:last-of-type)': {
                borderBottom: `1px solid ${theme.palette.divider}`
            }
        }
    },
    titleWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        marginLeft: theme.spacing(1)
    },
    overline: {
        marginTop: theme.spacing(1)
    }
}));

const Statistics = props => {
    const {className, ...rest} = props;

    const classes = useStyles();
    // const [statistics, setStatistics] = useState(null);
    //
    // useEffect(() => {
    //   let mounted = true;
    //
    //   const fetchStatistics = () => {
    //     axios.get('/api/account/statistics').then(response => {
    //       if (mounted) {
    //         setStatistics(response.data.statistics);
    //       }
    //     });
    //   };
    //
    //   fetchStatistics();
    //
    //   return () => {
    //     mounted = false;
    //   };
    // }, []);
    //
    // if (!statistics) {
    //   return null;
    // }

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid
                alignItems="center"
                container
                justify="space-between"
            >
                <Grid
                    className={classes.item}
                    item
                    md={3}
                    sm={6}
                    xs={12}
                >
                    <div className={classes.titleWrapper}>
                        <Typography
                            component="span"
                            variant="h4"
                        >
                            {/*${statistics.payout}*/}
                            350
                        </Typography>
                        <Label
                            className={classes.label}
                            color={colors.green[600]}
                        >
                            <b>кКал</b>
                        </Label>
                    </div>
                    <Typography
                        className={classes.overline}
                        variant="overline"
                    >
                        <b>Ты сжег сегодня!</b>
                    </Typography>
                </Grid>
                <Grid
                    className={classes.item}
                    item
                    md={3}
                    sm={6}
                    xs={12}
                >
                    <div className={classes.titleWrapper}>
                        <Typography
                            component="span"
                            variant="h4"
                        >
                            {/*${statistics.projects}*/}
                            50
                        </Typography>
                        <Label
                            className={classes.label}
                            color={colors.green[600]}
                        >
                            <b>Грамм Жира</b>
                        </Label>
                    </div>
                    <Typography
                        className={classes.overline}
                        variant="overline"
                    >
                        <b>Ты сжег сегодня!</b>
                    </Typography>
                </Grid>
                <Grid
                    className={classes.item}
                    item
                    md={6}
                    sm={6}
                    xs={12}
                >
                    <Typography variant="h4">
                        {/*{statistics.visitors}*/}
                        -16 кг за 72 дня
                    </Typography>
                </Grid>
                {/*<Grid*/}
                {/*    className={classes.item}*/}
                {/*    item*/}
                {/*    md={3}*/}
                {/*    sm={6}*/}
                {/*    xs={12}*/}
                {/*>*/}
                {/*    <div className={classes.titleWrapper}>*/}
                {/*        <Typography*/}
                {/*            component="span"*/}
                {/*            variant="h3"*/}
                {/*        >*/}
                {/*            /!*{statistics.watching}*!/*/}

                {/*        </Typography>*/}
                {/*        <Label*/}
                {/*            className={classes.label}*/}
                {/*            color={colors.green[600]}*/}
                {/*        >*/}
                {/*            Live*/}
                {/*        </Label>*/}
                {/*    </div>*/}
                {/*    <Typography*/}
                {/*        className={classes.overline}*/}
                {/*        variant="overline"*/}
                {/*    >*/}
                {/*        Watching now*/}
                {/*    </Typography>*/}
                {/*</Grid>*/}
            </Grid>
        </Card>
    );
};

export default Statistics;
