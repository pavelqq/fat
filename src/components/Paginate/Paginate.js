import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {colors} from '@material-ui/core';
import ReactPaginate from 'react-paginate';

const useStyles = makeStyles(theme => ({
    root: {
        ...theme.typography.button,
        listStyle: 'none',
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center'
    },
    active: {},
    activeLink: {},
    break: {},
    breakLink: {},
    disabled: {},
    next: {
        marginLeft: theme.spacing(1)
    },
    nextLink: {
        padding: '6px 16px',
        outline: 'none',
        cursor: 'pointer',
        borderRadius: 4,
        '&:hover': {
            backgroundColor: colors.blueGrey[50]
        }
    },
    page: {},
    pageLink: {
        color: theme.palette.text.secondary,
        padding: theme.spacing(1),
        outline: 'none',
        cursor: 'pointer',
        width: 40,
        height: 40,
        borderRadius: '50%',
        display: 'block',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: colors.blueGrey[50],
            color: theme.palette.text.primary
        },
        '&$activeLink': {
            backgroundColor: colors.blueGrey[50],
            color: theme.palette.text.primary
        }
    },
    previous: {
        marginRight: theme.spacing(1)
    },
    previousLink: {
        padding: '6px 16px',
        outline: 'none',
        cursor: 'pointer',
        borderRadius: 4,
        '&:hover': {
            backgroundColor: colors.blueGrey[50]
        }
    }
}));

const Paginate = props => {
    const {
        pageCount,
        pageRangeDisplayed,
        onPageChange,
        className,
        ...rest
    } = props;

    const classes = useStyles();

    return (
        <ReactPaginate
            activeClassName={classes.active}
            activeLinkClassName={classes.activeLink}
            breakClassName={classes.break}
            breakLabel="..."
            breakLinkClassName={classes.breakLink}
            containerClassName={clsx(classes.root, className)}
            disabledClassName={classes.disabled}
            marginPagesDisplayed={2}
            nextClassName={classes.next}
            nextLabel="Далее"
            nextLinkClassName={classes.nextLink}
            onPageChange={onPageChange}
            pageClassName={classes.page}
            pageCount={pageCount}
            pageLinkClassName={classes.pageLink}
            pageRangeDisplayed={5}
            previousClassName={classes.previous}
            previousLabel="Назад"
            previousLinkClassName={classes.previousLink}
            subContainerClassName="страниц"
            {...rest}
        />
    );
};

export default Paginate;
