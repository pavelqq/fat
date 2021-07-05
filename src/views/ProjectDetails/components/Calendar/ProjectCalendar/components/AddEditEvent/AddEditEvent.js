/* eslint-disable react/display-name */
import React, {useState, forwardRef} from 'react';
import clsx from 'clsx';
import moment from 'moment';
import {v4 as uuidv4} from 'uuid';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    TextField,
    Button,
    IconButton,
    Divider,
    FormControlLabel,
    Switch,
    colors
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import EventTable from "../EventTable";
import {generateRandomColor} from "../../../../../../../utils/generateRandomColor";
import {useDispatch} from "react-redux";
import {addEvent} from "../../../../../../../store/actions/eventActions";


const useStyles = makeStyles(theme => ({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
        boxShadow: theme.shadows[20],
        minWidth: '30%',
        [theme.breakpoints.down('sm')]: {
            minWidth: '50%',
        },
        [theme.breakpoints.down('md')]: {
            minWidth: '60%',
        },
        maxHeight: '100%',
        overflowY: 'auto',
        maxWidth: '100%'
    },
    field: {
        marginTop: theme.spacing(3)
    },
    cancelButton: {

    },
    confirmButton: {
        color: theme.palette.white,
        backgroundColor: colors.green[600],
        '&:hover': {
            backgroundColor: colors.green[900]
        }
    },
    table: {
        marginTop: theme.spacing(3)
    }
}));

const AddEditEvent = forwardRef((props, ref) => {
    const {
        event,
        onDelete,
        onCancel,
        onAdd,
        onEdit,
        editMode,
        type,
        projectId,
        className,
        ...rest
    } = props;

    const classes = useStyles();

    const defaultEvent = {
        type: type,
        projectId: projectId,
        title: 'Задание',
        desc: 'Описание задания',
        color: generateRandomColor(),
        allDay: true,
        start: moment().toDate(),
        end: moment().toDate()
    };

    const [values, setValues] = useState(event || defaultEvent);

    const mode = editMode ? (event ? 'Изменить' : 'Добавить') : ('Только информация');

    const handleFieldChange = e => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]:
                e.target.type === 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    const dispatch = useDispatch();

    const handleDelete = () => {
        onDelete && onDelete(event);
    };

    const handleAdd = () => {
        if (!values.title || !values.desc) {
            return;
        }
        dispatch(addEvent({...values, id: uuidv4()}))
        onAdd({...values, id: uuidv4()});
    };

    const handleEdit = () => {
        if (!values.title || !values.desc) {
            return;
        }

        onEdit(values);
    };

    const titleMode = (mode) => {
        switch (mode) {
            case 'Добавить':
                return 'Добавить задание'
            case 'Изменить':
                return 'Изменить задание'
            default:
                return 'Детали задания'
        }
    }

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
            ref={ref}
        >
            <form>
                <CardContent>
                    <Typography
                        align="center"
                        variant="overline"
                    >
                        {titleMode(mode)}
                    </Typography>
                    <TextField
                        className={classes.field}
                        fullWidth
                        label="Заголовок"
                        name="title"
                        onChange={handleFieldChange}
                        value={values.title}
                        variant="outlined"
                    />
                    <TextField
                        className={classes.field}
                        fullWidth
                        label="Описание"
                        name="desc"
                        onChange={handleFieldChange}
                        value={values.desc}
                        variant="outlined"
                    />
                    {/*<EventTable*/}
                    {/*    className={classes.table}*/}
                    {/*/>*/}
                    <FormControlLabel
                        className={classes.field}
                        control={
                            <Switch
                                checked={values.allDay}
                                name="allDay"
                                onChange={handleFieldChange}
                            />
                        }
                        label="Весь день"
                    />
                    <TextField
                        className={classes.field}
                        defaultValue={moment(values.start).format('YYYY-MM-DDThh:mm:ss')}
                        fullWidth
                        label="Начальная дата"
                        name="start"
                        onChange={handleFieldChange}
                        type="datetime-local"
                        variant="outlined"
                    />
                    <TextField
                        className={classes.field}
                        defaultValue={moment(values.end).format('YYYY-MM-DDThh:mm:ss')}
                        disabled={values.allDay}
                        fullWidth
                        label="Конечная дата"
                        name="end"
                        onChange={handleFieldChange}
                        type="datetime-local"
                        variant="outlined"
                    />
                </CardContent>
                <Divider/>
                <CardActions>
                    <Button
                        className={classes.cancelButton}
                        onClick={onCancel}
                        variant="contained"
                    >
                        Выход
                    </Button>
                    {mode === 'Добавить' && (
                        <>
                            <Button
                                className={classes.confirmButton}
                                onClick={handleAdd}
                                variant="contained"
                            >
                                Добавить
                            </Button>
                            <IconButton
                                edge="start"
                                onClick={handleDelete}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </>
                    )}
                    {mode === 'Изменить' && (
                        <>
                            <Button
                                className={classes.confirmButton}
                                onClick={handleEdit}
                                variant="contained"
                            >
                                Сохранить изменения
                            </Button>
                            <IconButton
                                edge="start"
                                onClick={handleDelete}
                            >
                                <DeleteIcon/>
                            </IconButton>
                        </>
                    )}
                </CardActions>
            </form>
        </Card>
    );
});


export default AddEditEvent;
