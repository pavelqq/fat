import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import {CommentBubble, CommentForm} from "../../../../components/PostCard/components";
import {v4 as uuidv4} from "uuid";
import moment from "moment";
import Paper from "@material-ui/core/Paper";
import {colors} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";


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
        marginLeft: '20%'
    },
    photoCounter: {
        paddingBottom: theme.spacing(4),
    },
    commentForm: {
        height: '5%',
        paddingRight: theme.spacing(1),
        paddingLeft: theme.spacing(1),
    },
    photoCardBlock: {}
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
                <Grid container className={classes.photoCardBlock}>
                    <Grid item xs>
                        <Paper elevation={0} className={classes.imageBlock}>
                            <CardMedia
                                className={classes.cover}
                                image="https://sun9-9.userapi.com/impg/66sf9QM28QKH6LygEiELQFYZsKy5sn_g_wigLQ/LcRvXzMVA0o.jpg?size=1279x1920&quality=96&sign=e509acbea617fc117bb763cc32326f88&type=album"
                            />
                        </Paper>
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
        </>
    );
};

export default PhotoCard;
