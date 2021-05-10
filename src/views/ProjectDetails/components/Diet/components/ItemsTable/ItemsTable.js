import React, {useState} from 'react';
import clsx from "clsx";
import {makeStyles} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import GenericMoreButton from "../../../../../../components/GenericMoreButton";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import PerfectScrollbar from 'react-perfect-scrollbar';
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Avatar from "@material-ui/core/Avatar";
import getInitials from "../../../../../../utils/getInitials";
import CardActions from "@material-ui/core/CardActions";
import TablePagination from "@material-ui/core/TablePagination";
import ReviewStars from "../../../../../../components/ReviewStars";
import { Link as RouterLink } from 'react-router-dom';
import Link from "@material-ui/core/Link";


const useStyles = makeStyles( theme => ({
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

const ItemsTable = props => {

    const { diet, selectedDate, className, ...rest } = props;

    const classes = useStyles();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    debugger;

    const handleChangePage = (event, page) => {
        setPage(page);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(event.target.value);
    };

    return(
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Card>
                <CardHeader
                    action={<GenericMoreButton />}
                    title="Продукты"
                    subheader={`Список продуктов, которые нужно употребить в пищу ${selectedDate}`}
                >
                </CardHeader>
                <Divider />
                <CardContent className={classes.content}>
                    <PerfectScrollbar>
                        <div className={classes.inner}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Название</TableCell>
                                        <TableCell>Белки</TableCell>
                                        <TableCell>Жиры</TableCell>
                                        <TableCell>Углеводы</TableCell>
                                        <TableCell>Грамм\мл</TableCell>
                                        <TableCell>кКал</TableCell>
                                        <TableCell>Важность</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {diet.products.slice(0, rowsPerPage).map(product => (
                                        <TableRow
                                            hover
                                            key={product.id}
                                        >
                                            <TableCell>
                                                <div className={classes.nameCell}>
                                                    <Avatar
                                                        className={classes.avatar}
                                                        src={product.avatar}
                                                    >
                                                        {getInitials(product.name)}
                                                    </Avatar>
                                                    <div>
                                                        <Link
                                                            color="inherit"
                                                            component={RouterLink}
                                                            to="*"
                                                            variant="h6"
                                                        >
                                                            {product.name}
                                                        </Link>
                                                        <div>{product.surname}</div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell>{product.proteins}</TableCell>
                                            <TableCell>{product.fats}</TableCell>
                                            <TableCell>{product.carbohydrates}</TableCell>
                                            <TableCell>{product.weight}</TableCell>
                                            <TableCell>{product.calorie}</TableCell>
                                            <TableCell>
                                                <ReviewStars value={product.importance} />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </PerfectScrollbar>
                </CardContent>
                <CardActions className={classes.actions}>
                        <TablePagination
                        component="div"
                        count={diet.products.length}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[5, 10, 25]}
                    />
                </CardActions>
            </Card>
        </div>
    )
};


export default ItemsTable;
