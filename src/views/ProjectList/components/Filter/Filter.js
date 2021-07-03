import React, {useState} from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import {
    Checkbox,
    Chip,
    Divider,
    FormControlLabel,
    Input,
    Card,
    colors, Button
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

import {MultiSelect} from './components';
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles(theme => ({
    root: {},
    keywords: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center'
    },
    searchIcon: {
        color: theme.palette.icon,
        marginRight: theme.spacing(2)
    },
    chips: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    chip: {
        margin: theme.spacing(1)
    },
    selects: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: colors.grey[50],
        padding: theme.spacing(1)
    },
    inNetwork: {
        marginLeft: 'auto'
    },
    submit: {
        width: 150,
        marginLeft: 'auto',
        color: theme.palette.black,
        backgroundColor: colors.orange[300],
        '&:hover': {
            backgroundColor: colors.deepOrange[600]
        }
    }
}));

const selects = [
    {
        label: 'Тип проекта',
        options: ['Тренировочный план', 'Диета']
    },
    {
        label: 'Уровень сложности',
        options: ['1', '2', '3', '4']
    },
    {
        label: 'Состояние здоровья',
        options: ['Со здоровьем все ОК!', 'Не очень']
    },
];

const Filter = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    const [inputValue, setInputValue] = useState('');
    const [chips, setChips] = useState([
        'Тренировочный план',
        'Диета',
    ]);

    const handleInputChange = event => {
        event.persist();
        setInputValue(event.target.value);
    };

    const handleInputKeyup = event => {
        event.persist();

        if (event.keyCode === 13 && inputValue) {
            if (!chips.includes(inputValue)) {
                setChips(chips => [...chips, inputValue]);
                setInputValue('');
            }
        }
    };

    const handleChipDelete = chip => {
        setChips(chips => chips.filter(c => chip !== c));
    };

    const handleMultiSelectChange = value => {
        setChips(value);
    };

    const handleSliderSelect = value => {
        return `${value}`;
    };

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div className={classes.keywords}>
                <SearchIcon className={classes.searchIcon}/>
                <Input
                    disableUnderline
                    onChange={handleInputChange}
                    onKeyUp={handleInputKeyup}
                    placeholder="Введите теги для поиска"
                    value={inputValue}
                />
            </div>
            <Divider/>
            <div className={classes.chips}>
                {chips.map(chip => (
                    <Chip
                        className={classes.chip}
                        deleteIcon={<CloseIcon/>}
                        key={chip}
                        label={chip}
                        onDelete={() => handleChipDelete(chip)}
                    />
                ))}
            </div>
            <Divider/>
            <div className={classes.selects}>
                {selects.map(select => (
                    <MultiSelect
                        key={select.label}
                        label={select.label}
                        onChange={handleMultiSelectChange}
                        options={select.options}
                        value={chips}
                    />
                ))}
                {/*<FormControlLabel*/}
                {/*    className={classes.inNetwork}*/}
                {/*    control={*/}
                {/*        <Checkbox*/}
                {/*            color="primary"*/}
                {/*        />*/}
                {/*    }*/}
                {/*    label="Включить приватные проекты в поиск"*/}
                {/*/>*/}
                <Button type="submit" className={classes.submit} variant="outlined">
                    Поиск
                </Button>
            </div>
        </Card>
    );
};


export default Filter;
