import React, {useState} from 'react';
import clsx from "clsx";
import {makeStyles, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import PerfectScrollbar from 'react-perfect-scrollbar';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Avatar from "@material-ui/core/Avatar";
import CardActions from "@material-ui/core/CardActions";
import TablePagination from "@material-ui/core/TablePagination";
import {Link as RouterLink} from 'react-router-dom';
import Link from "@material-ui/core/Link";
import GenericMoreButton from "../../../../../components/GenericMoreButton";
import getInitials from "../../../../../utils/getInitials";
import ReviewStars from "../../../../../components/ReviewStars";
import * as PropTypes from "prop-types";
import {TableRowColumn} from "material-ui";


const useStyles = makeStyles(theme => ({
    root: {},
    content: {
        padding: 0
    },
    inner: {
        minWidth: 700
    },
    nameCell: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        height: 42,
        width: 42,
        marginRight: theme.spacing(2)
    },
    actions: {
        padding: theme.spacing(1),
        justifyContent: 'flex-end'
    }
}));

const TrainingsTable = props => {

    const {train, selectedDate, className, ...rest} = props;

    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);


    const handleChangePage = (event, page) => {
        setPage(page);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(event.target.value);
    };

    debugger;

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Card>
                <CardHeader
                    action={<GenericMoreButton/>}
                    title="Упражнения"
                    subheader={`Список упражнений, которые нужно выполнить за тренировку ${selectedDate}`}
                >
                </CardHeader>
                <Divider/>
                <CardContent className={classes.content}>
                    <PerfectScrollbar>
                        <div className={classes.inner}>
                            <Table size="small">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Упражнение</TableCell>
                                        <TableCell>Подходы</TableCell>
                                        <TableCell>Вес(кг)</TableCell>
                                        <TableCell>Повторы</TableCell>
                                        <TableCell>Отдых(сек)</TableCell>
                                        <TableCell>Тоннаж(кг)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {train.exercises.map(exercise => (
                                        <TableRow
                                            hover
                                            key={exercise.id}
                                        >
                                            <TableCell>
                                                <Typography
                                                    variant="subtitle1"
                                                >
                                                    {exercise.name}
                                                </Typography>
                                            </TableCell>
                                            <TableCell>
                                                {exercise.sets.map(e => (
                                                    <TableRow>
                                                        <TableCell>
                                                            {e.set}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableCell>
                                            <TableCell>
                                                {exercise.sets.map(e => (
                                                    <TableRow>
                                                        <TableCell>
                                                            {e.weight}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableCell>
                                            <TableCell>
                                                {exercise.sets.map(e => (
                                                    <TableRow>
                                                        <TableCell>
                                                            {e.reps}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableCell>
                                            <TableCell>
                                                {exercise.sets.map(e => (
                                                    <TableRow>
                                                        <TableCell>
                                                            {e.chill}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableCell>
                                            <TableCell>
                                                {exercise.sets.map(e => (
                                                    <TableRow>
                                                        <TableCell>
                                                            {e.tonnage}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </PerfectScrollbar>
                </CardContent>
                {/*<CardActions className={classes.actions}>*/}
                {/*    <TablePagination*/}
                {/*        component="div"*/}
                {/*        count={train.length}*/}
                {/*        onChangePage={handleChangePage}*/}
                {/*        onChangeRowsPerPage={handleChangeRowsPerPage}*/}
                {/*        page={page}*/}
                {/*        rowsPerPage={rowsPerPage}*/}
                {/*        rowsPerPageOptions={[5, 10, 25]}*/}
                {/*    />*/}
                {/*</CardActions>*/}
            </Card>
        </div>
    )
};


export default TrainingsTable;