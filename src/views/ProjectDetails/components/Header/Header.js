import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Grid, Button, colors, Tooltip, IconButton} from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

import Label from "../../../../components/Label";
import {Application} from './components';
import {getProfileById} from "../../../../store/actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {memberingProject} from "../../../../store/actions/projectActions";

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
    },
    likedButton: {
        color: theme.palette.white,
        backgroundColor: colors.red[600],
        '&:hover': {
            backgroundColor: colors.red[900]
        }
    },
    dislikedButton: {
        color: theme.palette.white,
        backgroundColor: colors.blueGrey[400],
        '&:hover': {
            backgroundColor: colors.red[400]
        }
    },
}));

const Header = props => {
    const { project, author, className, ...rest} = props;

    const classes = useStyles();

    const dispatch = useDispatch();

    const authUserId = useSelector(state => state.auth._id)

    function likedByUser(userId) {
        return userId === authUserId;
    }

    const [membering, setMembering] = useState(props.project.members.length);
    // если переходишь на /projects, то length от undefined
    const [isMembering, setIsMembering] = useState(props.project.members.some(likedByUser));

    const memberingHandler = () => {
        try {
            dispatch(memberingProject(project._id, authUserId))
        } catch (err) {
        }
        setMembering(isMembering ? membering - 1 : membering + 1);
        setIsMembering(!isMembering);
    };

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
                        {props.project.title}
                    </Typography>
                    <Label
                        className={classes.label}
                        color={colors.green[600]}
                        variant="outlined"
                    >
                        Популярно
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
                    {isMembering ? (
                        <Button variant="contained" className={classes.likedButton} onClick={memberingHandler}>
                            <FavoriteIcon/>
                            Вы участвуете в проекте
                        </Button>
                    ) : (
                        <Button variant="outlined" className={classes.dislikedButton} onClick={memberingHandler}>
                            <FavoriteBorderIcon/>
                            Подписаться на проект
                        </Button>
                    )}
                    {/*<Button*/}
                    {/*    className={classes.applyButton}*/}
                    {/*    onClick={handleApplicationOpen}*/}
                    {/*    variant="contained"*/}
                    {/*>*/}
                    {/*    Вступить в проект*/}
                    {/*</Button>*/}
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
