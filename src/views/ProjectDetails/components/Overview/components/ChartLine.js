import React from 'react';
import { Line } from 'react-chartjs-2';
import {Card, CardContent, CardHeader, Divider} from "@material-ui/core";
import GenericMoreButton from "../../../../../components/GenericMoreButton/GenericMoreButton";
import {makeStyles} from "@material-ui/core/styles";


const options = {
    scale: {
        ticks: {
            beginAtZero: true,
        },
    },
};

const useStyles = makeStyles(theme => ({
    root: {},
    content: {
        padding: 0,
        '&:last-child': {
            paddingBottom: 0
        }
    },
    chartContainer: {
        padding: theme.spacing(2),
        height: '100%',
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


const ChartLine = props => {

    const {title, desc, projectId, userId, data, ...rest} = props;

    const classes = useStyles();

    return (
        <Card
            {...rest}
        >
            <CardHeader
                action={<GenericMoreButton/>}
                title={props.title}
                subheader={props.desc}
            />
            <Divider/>
            <CardContent className={classes.content}>
                <div className={classes.chartContainer}>
                    <Line data={props.data} options={options}/>
                </div>
            </CardContent>
        </Card>
    );
};

export default ChartLine;