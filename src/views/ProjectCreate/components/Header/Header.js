import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography} from '@material-ui/core';
import Alert from "../../../../components/Alert";

const useStyles = makeStyles(() => ({
    root: {}
}));

const Header = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Typography
                component="h2"
                gutterBottom
                variant="overline"
            >
                Новый проект
            </Typography>
            <Typography
                component="h1"
                variant="h3"
            >
                Создать новый проект!
            </Typography>
            <Alert
                variant={'default'}
                message={
                    `Здесь вы можете заполнить основную информацию о проекте.\
                    Чтобы заполнить тренировочный план и диету, перейдите в созданный проект и
                    выберете соответствующую вкладку, и заполните задачи там.`
                }
            />
        </div>
    );
};


export default Header;
