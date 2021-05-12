import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Radio,
    colors
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {},
    option: {
        border: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        alignItems: 'flex-start',
        padding: theme.spacing(2),
        maxWidth: 560,
        '& + &': {
            marginTop: theme.spacing(2)
        }
    },
    selectedOption: {
        backgroundColor: colors.grey[50]
    },
    optionRadio: {
        margin: -10
    },
    optionDetails: {
        marginLeft: theme.spacing(2)
    }
}));

const AboutAuthor = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    const [selected, setSelected] = useState('freelancer');

    const handleChange = (event, option) => {
        setSelected(option.value);
    };

    const options = [
        {
            value: 'workout',
            title: 'Тренировочный план',
            description: 'Новый план тренировок'
        },
        {
            value: 'diet',
            title: 'Диета',
            description: 'Новая диета'
        },
    ];

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader title="Что за проект?"/>
            <CardContent>
                {options.map(option => (
                    <div
                        className={clsx(classes.option, {
                            [classes.selectedOption]: selected === option.value
                        })}
                        key={option.value}
                    >
                        <Radio
                            checked={selected === option.value}
                            className={classes.optionRadio}
                            color="primary"
                            onClick={event => handleChange(event, option)}
                        />
                        <div className={classes.optionDetails}>
                            <Typography
                                gutterBottom
                                variant="h5"
                            >
                                {option.title}
                            </Typography>
                            <Typography variant="body1">{option.description}</Typography>
                        </div>
                    </div>
                ))}
                {options.title}
            </CardContent>
        </Card>
    );
};


export default AboutAuthor;
