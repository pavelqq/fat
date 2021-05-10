import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Divider,
    Typography
} from '@material-ui/core';

import axios from '../../../../../../utils/axios';
import {Chart} from './components';
import GenericMoreButton from "../../../../../../components/GenericMoreButton";


const useStyles = makeStyles(theme => ({
    root: {},
    content: {
        padding: 0,
        '&:last-child': {
            paddingBottom: 0
        }
    },
    chartContainer: {
        padding: theme.spacing(3)
    },
    chart: {
        height: 281
    },
    statsContainer: {
        display: 'flex'
    },
    statsItem: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: theme.spacing(3, 2),
        '&:not(:last-of-type)': {
            borderRight: `1px solid ${theme.palette.divider}`
        }
    }
}));

const ProteinsFatsCarbohydrates = props => {

    const {className, ...rest} = props;

    const classes = useStyles();
    const [pfc, setPfc] = useState([]);

    useEffect(() => {
        let mounted = true;

        const fetchPfc = () => {
            axios.get('/api/projects/2').then(response => {
                if (mounted) {
                    setPfc(response.data.project.tasks.diet.pfc);
                }
            });
        };

        fetchPfc();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader
                action={<GenericMoreButton/>}
                title="БЖУ"
            />
            <Divider/>
            <CardContent className={classes.content}>
                <div className={classes.chartContainer}>
                    <Chart
                        className={classes.chart}
                        data={pfc}
                    />
                </div>
                <Divider/>
                <div className={classes.statsContainer}>
                    {pfc.map(pfc => (
                        <div
                            className={classes.statsItem}
                            key={pfc.id}
                        >
                            <Typography
                                align="center"
                                component="h6"
                                gutterBottom
                                variant="overline"
                            >
                                {pfc.label}
                            </Typography>
                            <Typography
                                align="center"
                                variant="h4"
                            >
                                {pfc.value}%
                            </Typography>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
};


export default ProteinsFatsCarbohydrates;
