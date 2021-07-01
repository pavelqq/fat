import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid, Button, colors} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

import Label from "../../../../components/Label";
import {Application} from './components';

const useStyles = makeStyles(theme => ({
    root: {},
    label: {
        marginTop: theme.spacing(1)
    },
    shareButton: {
        marginRight: theme.spacing(2)
    },
    shareIcon: {
        marginRight: theme.spacing(1)
    },
    applyButton: {
        color: theme.palette.white,
        backgroundColor: colors.green[600],
        '&:hover': {
            backgroundColor: colors.green[900]
        }
    }
}));

const Header = props => {
    const {title, project, author, className, ...rest} = props;

    const classes = useStyles();

    const [openApplication, setOpenApplication] = useState(false);

    const handleApplicationOpen = () => {
        setOpenApplication(true);
    };

    const handleApplicationClose = () => {
        setOpenApplication(false);
    };

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
                        Просмотр проекта
                    </Typography>
                    <Typography
                        component="h1"
                        gutterBottom
                        variant="h3"
                    >
                        {title}
                    </Typography>
                    <Label
                        className={classes.label}
                        color={colors.green[600]}
                        variant="outlined"
                    >
                        Активный проект
                    </Label>
                </Grid>
                <Grid item>
                    <Button
                        className={classes.shareButton}
                        variant="contained"
                    >
                        <ShareIcon className={classes.shareIcon}/>
                        Поделится
                    </Button>
                    <Button
                        className={classes.applyButton}
                        onClick={handleApplicationOpen}
                        variant="contained"
                    >
                        Вступить в проект
                    </Button>
                </Grid>
            </Grid>
            <Application
                author={author}
                onApply={handleApplicationClose}
                onClose={handleApplicationClose}
                open={openApplication}
            />
        </div>
    );
};


export default Header;
