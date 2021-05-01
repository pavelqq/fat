import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import {CommentBubble, CommentForm} from "../../../../components/PostCard/components";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {colors} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import clsx from "clsx";


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#616161'
    },
    card: {
        backgroundColor: colors.grey[200],
    },
    content: {
        padding: theme.spacing(2),
        height: '89%'
    },
    actions: {
        padding: theme.spacing(1)
    },
    imageBlock: {
        flexGrow: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#212121',
    },
    commentsBlock: {
        minWidth: 330,
        width: '100%',
        backgroundColor: colors.grey[200],
    },
    cover: {
        minHeight: '100%',
        paddingTop: '85%',
        width: '60%',
        // marginLeft: '20%'
    },
    photoCounter: {
        paddingBottom: theme.spacing(4),
    },
    commentForm: {
        height: '5%',
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
    },
    photoCardBlock: {},
    arrow: {}
}));

const data = [
    {
        id: uuidv4(),
        src: 'https://i.pinimg.com/736x/1f/32/de/1f32de75ae0a1ac218a902f6f361a6d7.jpg',
        title: 'Фото 1',
        author: 'author',
    },
    {
        id: uuidv4(),
        src: 'https://i.pinimg.com/originals/ab/b6/a8/abb6a800ab2193fcedd9bda566b7402c.jpg',
        title: 'Фото 2',
        author: 'author',
    },
    {
        id: uuidv4(),
        src: 'https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg',
        title: 'Фото 3',
        author: 'author',
    },
    {
        id: uuidv4(),
        src: 'https://st2.depositphotos.com/1064024/10769/i/600/depositphotos_107694484-stock-photo-little-prince-illustration.jpg',
        title: 'Фото 4',
        author: 'author',
    },
    {
        id: uuidv4(),
        src: 'https://s1.1zoom.ru/big0/52/Love_Sunrises_and_sunsets_Fingers_Hands_Heart_Sun_532758_1280x897.jpg',
        title: 'Фото 5',
        author: 'author',
    },
    {
        id: uuidv4(),
        src: 'https://i.pinimg.com/736x/1f/32/de/1f32de75ae0a1ac218a902f6f361a6d7.jpg',
        title: 'Фото 6',
        author: 'author',
    },
];

const comments = [
    {
        id: uuidv4(),
        author: {
            name: 'Валерея Жерепа',
            avatar: 'https://sun9-25.userapi.com/impg/NVcuVyjAocf9VEZyRm6rwZZNT7unbtOCpP0Diw/5cjtUAm5v0k.jpg?size=2047x2047&quality=96&sign=2e46eaaf544bcb0ab1d33f692d1abe9d&type=album'
        },
        message:
            'Вау, что за красотка 😍',
        created_at: moment().subtract(3, 'hours')
    },
    {
        id: uuidv4(),
        author: {
            name: 'Ева Вайсберг',
            avatar: 'https://sun9-47.userapi.com/impg/GmyvgEHDHK3zJJWOIkDlES_fhIVN-68vyNVezQ/ktCTj_mMjr0.jpg?size=960x960&quality=96&sign=d45c33ff4361679ea0f72e717ac46518&type=album'
        },
        message: 'Обалдеть...😱😱😱',
        created_at: moment().subtract(2, 'hours')
    },
    {
        id: uuidv4(),
        author: {
            name: 'Ксюша Руденко',
            avatar: 'https://sun9-53.userapi.com/impg/f3J4KY-U2TkUT0Harf9HzD1iCXcE-O3CaPJlJg/q9NTq1nZTWk.jpg?size=781x1080&quality=96&sign=ae24537a9661495b8bfdffc2cf0c8fba&type=album'
        },
        message:
            'Даже красивее чем я🤬😡',
        created_at: moment().subtract(3, 'hours')
    },
    {
        id: uuidv4(),
        author: {
            name: 'Денис Димитренко',
            avatar: 'https://sun9-60.userapi.com/impf/c850324/v850324982/1b71c5/LBDZGsQW8-Y.jpg?size=1472x1472&quality=96&sign=20eb6dfc703c6c32ce1cfebb1d6e79cd&type=album'
        },
        message: 'Бля, вот это красотка, какой же я додик, что мы расстались...😰 😰 😰 😰',
        created_at: moment().subtract(2, 'hours')
    },
];

const PhotoCard = (props) => {
    // const {image, className, ...rest} = props;
    const classes = useStyles();
    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const Photo = props => {
        const [items, setItems] = useState(props.items);

        const onItemClickForward = e => {
            const item = items[e];
            items.splice(e, 1);
            items.unshift(item);
            setItems([...items]);
        };

        const onItemClickBack = e => {
            // const item = items[e];
            // items.splice(e, 1);
            // items.unshift(item);
            // setItems([...items]);
        };

        return (
            <>
                {items.map((item, index) => {
                    return (
                        <Dialog
                            fullWidth={true}
                            maxWidth={"lg"}
                            open={open}
                            onClose={handleClose}
                            className={classes.background}
                        >
                            <Grid container className={classes.photoCardBlock}>
                                <Grid item xs>
                                    <Grid container justify="space-around" alignItems="center"
                                          className={classes.imageBlock}>
                                        <ArrowBackIosIcon fontSize='large' color='inherit' key={index} onClick={() => onItemClickBack(index)}/>
                                        <CardMedia
                                            key={item.id}
                                            className={classes.cover}
                                            image={item.src}
                                        />
                                        <ArrowForwardIosIcon fontSize='large' color='inherit' key={index} onClick={() => onItemClickForward(index)}/>
                                    </Grid>
                                </Grid>
                                <Grid container
                                      xs={4}
                                      direction="column"
                                      justify="flex-end"
                                      className={classes.commentsBlock}
                                >
                                    <Grid item className={classes.content}>
                                        <Grid>
                                            <Typography className={classes.photoCounter} variant="body1">
                                                Фотография 1 из 10
                                            </Typography>
                                        </Grid>
                                        {comments && (
                                            <div className={classes.comments}>
                                                {comments.map(comment => (
                                                    <CommentBubble
                                                        comment={comment}
                                                        key={comment.id}
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </Grid>
                                    <Grid item className={classes.actions}>
                                        <CommentForm className={classes.commentForm}/>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Dialog>
                    );
                })}
            </>
        );
    };

    return (
        <Photo items={data} />
    );
};

export default PhotoCard;
