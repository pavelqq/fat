import React, {useEffect} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Card, CardContent} from '@material-ui/core';

import {Brief, Deliverables, Holder, Members} from './components'
import {convertFromRaw, Editor, EditorState} from "draft-js";

const useStyles = makeStyles(theme => ({
    root: {},
    deliverables: {
        marginTop: theme.spacing(3)
    },
    members: {
        marginTop: theme.spacing(3)
    },
    description: {
        padding: theme.spacing(2, 2, 1, 3),
    },
}));


const Overview = props => {
    const {members, projectId, userId, description, className, ...rest} = props;

    const classes = useStyles();

    return (
        <Grid
            {...rest}
            className={clsx(classes.root, className)}
            container
            spacing={3}
        >
            <Grid
                item
                lg={8}
                xl={9}
                xs={12}
                className={classes.description}
            >
                <Card>
                    <CardContent>
                        <Editor
                            editorState={EditorState.createWithContent(convertFromRaw(JSON.parse(props.description)))}
                            readOnly={true}
                        />
                    </CardContent>
                </Card>
                {/*<Brief brief={props.description}/>*/}
                <Deliverables className={classes.deliverables}/>
            </Grid>
            <Grid
                item
                lg={4}
                xl={3}
                xs={12}
            >
                <Holder
                    projectId={projectId}
                    userId={userId}
                />
                <Members
                    className={classes.members}
                    members={props.members}
                />
            </Grid>
        </Grid>
    );
};


export default Overview;
