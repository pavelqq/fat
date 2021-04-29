import React, {useState} from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PhotoCard from "../PhotoCard/PhotoCard";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import Dialog from "@material-ui/core/Dialog/Dialog";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    rootPhotoCard: {
        display: 'flex',
    },
    detailsPhotoCard: {
        display: 'flex',
        flexDirection: 'column',
    },
    contentPhotoCard: {
        flex: '1 0 auto',
    },
    coverPhotoCard: {
        width: 151,
    },
    controlsPhotoCard: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIconPhotoCard: {
        height: 38,
        width: 38,
    },
}));

const tileData = [
    {
        img: 'https://i.pinimg.com/736x/1f/32/de/1f32de75ae0a1ac218a902f6f361a6d7.jpg',
        title: 'Фото 1',
        author: 'author',
    },
    {
        img: 'https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg',
        title: 'Фото 2',
        author: 'author',
    },
    {
        img: 'https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg',
        title: 'Фото 3',
        author: 'author',
    },
    {
        img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg',
        title: 'Фото 4',
        author: 'author',
    },
    {
        img: 'https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg',
        title: 'Фото 5',
        author: 'author',
    },
    {
        img: 'https://i.pinimg.com/736x/1f/32/de/1f32de75ae0a1ac218a902f6f361a6d7.jpg',
        title: 'Фото 1',
        author: 'author',
    },
    {
        img: 'https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg',
        title: 'Фото 2',
        author: 'author',
    },
    {
        img: 'https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg',
        title: 'Фото 3',
        author: 'author',
    },
    {
        img: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg',
        title: 'Фото 4',
        author: 'author',
    },
    {
        img: 'https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg',
        title: 'Фото 5',
        author: 'author',
    },
];

const Gallery = () => {
    const classes = useStyles();

    const emails = ['username@gmail.com', 'user02@gmail.com'];

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    if (!tileData) {
        return null;
    }

    return (
            <div className={classes.root}>
                <GridList className={classes.gridList} cols={5}>
                    {tileData.map((tile) => (
                        <GridListTile key={tile.img}>
                            <img
                                src={tile.img}
                                alt={tile.title}
                                onClick={handleClickOpen}
                            />
                            <GridListTileBar
                                title={tile.title}
                                classes={{
                                    root: classes.titleBar,
                                    title: classes.title,
                                }}
                            />
                        </GridListTile>
                    ))}
                </GridList>
                <div>
                    <PhotoCard selectedValue={selectedValue} open={open} onClose={handleClose} />
                </div>
            </div>
    );
}

export default Gallery;
