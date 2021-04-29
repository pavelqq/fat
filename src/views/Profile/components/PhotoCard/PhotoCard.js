import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import {CommentBubble, CommentForm} from "../../../../components/PostCard/components";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import Paper from "@material-ui/core/Paper";
import {colors} from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";


const useStyles = makeStyles((theme) => ({
    background: {
        backgroundColor: '#616161'
    },
    card: {
        display: 'flex',
        backgroundColor: colors.grey[200]
    },
    content: {
        flex: '1 1 auto',
    },
    imageBlock: {
        height: '70%',
        width: '70%',
        backgroundColor: '#212121',
    },
    commentsBlock: {
        height: '70%',
        width: '30%',
        backgroundColor: colors.grey[200],
    },
    cover: {
        height: 0,
        paddingTop: '75%',
        width: '50%',
        marginLeft: '25%'
    },
    photoCounter: {
        paddingBottom: theme.spacing(2),
    },
    commentForm: {
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
    },
}));

const comments = [
    {
        id: uuidv4(),
        author: {
            name: 'Ваня Пупкин',
            avatar: '/images/avatars/avatar_6.png'
        },
        message:
            'Она права...',
        created_at: moment().subtract(3, 'hours')
    },
    {
        id: uuidv4(),
        author: {
            name: 'Аня Жирова',
            avatar: '/images/avatars/avatar_4.png'
        },
        message: 'Хахахах',
        created_at: moment().subtract(2, 'hours')
    },
    {
        id: uuidv4(),
        author: {
            name: 'Ваня Пупкин',
            avatar: '/images/avatars/avatar_6.png'
        },
        message:
            'Она права...',
        created_at: moment().subtract(3, 'hours')
    },
    {
        id: uuidv4(),
        author: {
            name: 'Аня Жирова',
            avatar: '/images/avatars/avatar_4.png'
        },
        message: 'Хахахах',
        created_at: moment().subtract(2, 'hours')
    },
];

const PhotoCard = (props) => {
    const classes = useStyles();
    const theme = useTheme();
    const {onClose, selectedValue, open} = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <>
            <Dialog
                fullWidth={true}
                maxWidth={"lg"}
                open={open}
                onClose={handleClose}
                className={classes.background}
            >
                <Card className={classes.card}>
                    <Paper elevation={0} className={classes.imageBlock}>
                        <CardMedia
                            className={classes.cover}
                            image="https://sun9-9.userapi.com/impg/66sf9QM28QKH6LygEiELQFYZsKy5sn_g_wigLQ/LcRvXzMVA0o.jpg?size=1279x1920&quality=96&sign=e509acbea617fc117bb763cc32326f88&type=album"
                        />
                    </Paper>
                    <Paper elevation={0} className={classes.commentsBlock}>
                        <CardContent className={classes.content}>
                            <Typography className={classes.photoCounter} variant="body1">Фотография 1 из 10</Typography>
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
                        </CardContent>
                        <CardActions>
                            <CommentForm className={classes.commentForm} />
                        </CardActions>
                    </Paper>
                </Card>
            </Dialog>
        </>
    );
}

export default PhotoCard;
