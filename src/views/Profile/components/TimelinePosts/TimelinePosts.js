import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import moment from "moment";
import Timeline from "@material-ui/lab/Timeline/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {},
    timelineItem: {},
    message: {}
}));


const TimelinePosts = props => {
    const { post, className, ...rest } = props;

    const classes = useStyles();

    return (
        <Timeline
            align="alternate"
            {...rest}
            className={clsx(classes.root, className)}
        >
            <TimelineItem className={classes.timelineItem}>
                <TimelineOppositeContent>
                    <Typography color="textSecondary">{moment(post.created_at).fromNow()}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography color="textSecondary">Пост от</Typography>
                    <Typography variant="subtitle1">{post.author.name}</Typography>
                    <Typography className={classes.message} variant="subtitle2" color="textSecondary">{post.comments.length} комментария</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
};


export default TimelinePosts;
