import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
    root: {},
    addIcon: {
        marginRight: theme.spacing(1)
    }
}));

const Header = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid
                alignItems="flex-end"
                container
                justify="space-between"
                spacing={3}
            >
                <Grid item>
                    <Typography
                        component="h2"
                        gutterBottom
                        variant="overline"
                    >
                        Проекты
                    </Typography>
                    <Typography
                        component="h1"
                        variant="h3"
                    >
                        Поиск проектов
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        color="primary"
                        component={RouterLink}
                        to="/projects/create"
                        variant="contained"
                    >
                        <AddIcon className={classes.addIcon}/>
                        Создать новый проект
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};


export default Header;
