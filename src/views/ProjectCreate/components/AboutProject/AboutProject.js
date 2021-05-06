import React, {useState} from 'react';
import 'date-fns';
import clsx from 'clsx';
import moment from 'moment';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardHeader,
    CardContent,
    TextField,
    Button,
    Chip,
    Typography
} from '@material-ui/core';
import {MuiPickersUtilsProvider, KeyboardDatePicker, DatePicker} from '@material-ui/pickers';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import Alert from "../../../../components/Alert";


const useStyles = makeStyles(theme => ({
    root: {},
    alert: {
        marginBottom: theme.spacing(3)
    },
    formGroup: {
        marginBottom: theme.spacing(3)
    },
    fieldGroup: {
        display: 'flex',
        alignItems: 'center'
    },
    fieldHint: {
        margin: theme.spacing(1, 0)
    },
    tags: {
        marginTop: theme.spacing(1),
        '& > * + *': {
            marginLeft: theme.spacing(1)
        }
    },
    flexGrow: {
        flexGrow: 1
    },
    dateField: {
        '& + &': {
            marginLeft: theme.spacing(2)
        }
    }
}));


const AboutProject = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    const initialValues = {
        name: '',
        tag: '',
        tags: ['Диета', 'Тренировка'],
        startDate: moment(),
        endDate: moment().add(1, 'day')
    };

    const [values, setValues] = useState({...initialValues});
    const [calendarTrigger, setCalendarTrigger] = useState(null);

    const handleFieldChange = (event, field, value) => {
        event.persist && event.persist();
        setValues(values => ({
            ...values,
            [field]: value
        }));
    };

    const handleTagAdd = () => {
        setValues(values => {
            const newValues = {...values};

            if (newValues.tag && !newValues.tags.includes(newValues.tag)) {
                newValues.tags = [...newValues.tags];
                newValues.tags.push(newValues.tag);
            }

            newValues.tag = '';

            return newValues;
        });
    };

    const handleTagDelete = tag => {
        setValues(values => {
            const newValues = {...values};

            newValues.tags = newValues.tags.filter(t => t !== tag);

            return newValues;
        });
    };

    const handleCalendarOpen = trigger => {
        setCalendarTrigger(trigger);
    };

    const handleCalendarChange = () => {
    };

    const handleCalendarAccept = date => {
        setValues(values => ({
            ...values,
            [calendarTrigger]: date
        }));
    };

    const handleCalendarClose = () => {
        setCalendarTrigger(false);
    };

    const calendarOpen = Boolean(calendarTrigger);
    const calendarMinDate =
        calendarTrigger === 'startDate'
            ? moment()
            : moment(values.startDate).add(1, 'day');
    const calendarValue = values[calendarTrigger];

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardHeader title="О проекте"/>
            <CardContent>
                <form>
                    {/*<Alert*/}
                    {/*    className={classes.alert}*/}
                    {/*    message="Выбирайте названия с умом! :)"*/}
                    {/*/>*/}
                    <div className={classes.formGroup}>
                        <TextField
                            fullWidth
                            label="Придумайте название для проекта"
                            name="name"
                            onChange={event =>
                                handleFieldChange(event, 'name', event.target.value)
                            }
                            value={values.name}
                            variant="outlined"
                        />
                    </div>
                    <div className={classes.formGroup}>
                        <div className={classes.fieldGroup}>
                            <TextField
                                className={classes.flexGrow}
                                label="Придумайте теги для проекта по которым люди будут искать ваше творение"
                                name="tag"
                                onChange={event =>
                                    handleFieldChange(event, 'tag', event.target.value)
                                }
                                value={values.tag}
                                variant="outlined"
                            />
                            <Button
                                className={classes.addButton}
                                onClick={handleTagAdd}
                                size="small"
                            >
                                <AddIcon className={classes.addIcon}/>
                                Добавить тег
                            </Button>
                        </div>
                        <Typography
                            className={classes.fieldHint}
                            variant="body2"
                        >
                            Теги для поиска:
                        </Typography>
                        <div className={classes.tags}>
                            {values.tags.map(tag => (
                                <Chip
                                    deleteIcon={<CloseIcon/>}
                                    key={tag}
                                    label={tag}
                                    onDelete={() => handleTagDelete(tag)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={classes.formGroup}>
                        <div className={classes.fieldGroup}>
                            <TextField
                                className={classes.dateField}
                                label="Начало проекта"
                                name="startDate"
                                onClick={() => handleCalendarOpen('startDate')}
                                value={moment(values.startDate).format('дд/мм/гггг')}
                                variant="outlined"
                            />
                            <TextField
                                className={classes.dateField}
                                label="Конец проекта"
                                name="endDate"
                                onClick={() => handleCalendarOpen('endDate')}
                                value={moment(values.endDate).format('дд/мм/гггг')}
                                variant="outlined"
                            />
                        </div>
                    </div>
                </form>
            </CardContent>
            <DatePicker
                cancelLabel="отмена"
                minDate={calendarMinDate}
                onAccept={handleCalendarAccept}
                onChange={handleCalendarChange}
                onClose={handleCalendarClose}
                open={calendarOpen}
                style={{display: 'none'}} // Temporal fix to hide the input element
                value={calendarValue}
                variant="dialog"
            />
            {/*<KeyboardDatePicker*/}
            {/*    minDate={calendarMinDate}*/}
            {/*    margin="normal"*/}
            {/*    id="date-picker-dialog"*/}
            {/*    onAccept={handleCalendarAccept}*/}
            {/*    onChange={handleCalendarChange}*/}
            {/*    onClose={handleCalendarClose}*/}
            {/*    open={calendarOpen}*/}
            {/*    style={{ display: 'none' }}*/}
            {/*    value={calendarValue}*/}
            {/*    variant="dialog"*/}
            {/*    KeyboardButtonProps={{*/}
            {/*        'aria-label': 'change date',*/}
            {/*    }}*/}
            {/*/>*/}
            {/*<DatePicker*/}
            {/*    minDate={calendarMinDate}*/}
            {/*    onAccept={handleCalendarAccept}*/}
            {/*    onChange={handleCalendarChange}*/}
            {/*    onClose={handleCalendarClose}*/}
            {/*    open={calendarOpen}*/}
            {/*    style={{display: 'none'}} // Temporal fix to hide the input element*/}
            {/*    value={calendarValue}*/}
            {/*    variant="dialog"*/}
            {/*/>*/}
        </Card>
    );
};


export default AboutProject;
