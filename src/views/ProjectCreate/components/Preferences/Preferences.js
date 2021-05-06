import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    FormControlLabel,
    Checkbox
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    options: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column'
    }
}));

const Preferences = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader title="Настройки доступа"/>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h6"
                >
                    Приватность
                </Typography>
                <Typography variant="body2">
                    Вы можете ограничить доступ к плану
                </Typography>
                <div className={classes.options}>
                    {/*<FormControlLabel*/}
                    {/*    control={*/}
                    {/*        <Checkbox*/}
                    {/*            color="primary"*/}
                    {/*            defaultChecked*/}
                    {/*        />*/}
                    {/*    }*/}
                    {/*    label="Разрешить доступ всем"*/}
                    {/*/>*/}
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                            />
                        }
                        label="Приватный доступ"
                    />
                </div>
            </CardContent>
        </Card>
    );
};


export default Preferences;
