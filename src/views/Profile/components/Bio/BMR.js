import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import {
    Card,
    colors,
    Grid,
    Paper,
    Slider, Table, TableBody,
    TableCell, TableContainer,
    TableHead,
    TableRow,
    Typography,
    withStyles
} from "@material-ui/core";
import {Line} from "react-chartjs-2";


const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            marginRight: theme.spacing(2)
        },
        paddingTop: theme.spacing(1)
    },
    table: {
        minWidth: 420,
        [theme.breakpoints.down('md')]: {
            minWidth: 300,
        },
    },
    calrate: {
        color: colors.red[500]
    },
    lineChart: {
        minWidth: 400,
        [theme.breakpoints.down('md')]: {
            minWidth: 300,
        },
        marginBottom: theme.spacing(2)
    }
}));

function createData(name, calories) {
    return {name, calories};
}

const rows = [
    createData('Сидячий образ жизни', 2351),
    createData('Тренировки 1-3 раза в нед.', 2693),
    createData('Упражнения 4-5 раз в нед.', 2870),
    createData('Ежедневные тренировки', 3036),
    createData('Тяжелые ежед.тренировки', 3490),
];

const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
        {
            label: 'Расход калорий по дням в течении проекта',
            data: [3090, 2940, 3120, 3030, 2990, 3300],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const BMR = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    const BMR = 1628.7

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        variant='h5'
                        align="center"
                    >
                        БОМ = {BMR} (кал)/(день)
                    </Typography>
                    <Typography
                        variant='body2'
                        align="center"
                    >
                        Ежедневная потребность в калориях в зависимости от уровня активности
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Активность</TableCell>
                                    <TableCell align="right">Кал</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        variant="body1"
                        align="center"
                    >
                        Обычная тренировка:
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                    >
                        15-60 минут повышенной активности пульса.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        variant="body1"
                        align="center"
                    >
                        Тяжелая тренировка:
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                    >
                        60+ минут повышенной активности пульса.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.calrate}
                    >
                        Ваш расход: 3036 (кал)/(день)
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Line
                        data={data}
                        options={options}
                        className={classes.lineChart}
                    />
                </Grid>
            </Grid>
        </Card>
    )
}

export default BMR;