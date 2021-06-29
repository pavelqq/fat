import React, {useRef, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Button,
    Card,
    CardContent,
    CardHeader,
    Chip,
    Divider, Grid,
    Paper,
    Slider,
    TextField,
    Typography
} from '@material-ui/core';

import Page from "../../components/Page";
import {
    Header,
    AboutAuthor,
    AboutProject,
    Preferences,
    ProjectCover,
    ProjectDetails,
    ProjectCalendar
} from './components';

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import WhatshotIcon from '@material-ui/icons/Whatshot';

import moment from "moment";
import {DatePicker, KeyboardDatePicker} from "@material-ui/pickers";
import {Editor, EditorState, getDefaultKeyBinding, Modifier, RichUtils, convertToRaw} from "draft-js";
import {EditorToolbar} from "../../components/RichEditor/components";
import {blockRenderMap} from "../../components/RichEditor/utils";

import {addProject} from "../../store/actions/projectActions";
import {useDispatch} from "react-redux";

import _ from 'lodash';

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(3, 3, 6, 3)
    },
    aboutAuthor: {
        marginTop: theme.spacing(3)
    },
    projectCalendar: {
        marginTop: theme.spacing(3)
    },
    aboutProject: {
        marginTop: theme.spacing(3)
    },
    projectCover: {
        marginTop: theme.spacing(3)
    },
    projectDetails: {
        marginTop: theme.spacing(3)
    },
    preferences: {
        marginTop: theme.spacing(3)
    },
    actions: {
        marginTop: theme.spacing(3)
    },
    //about project
    formGroup: {
        marginBottom: theme.spacing(3),
    },
    formSlider: {
        width: '220px'
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
    },
    addButton: {
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(1)
    },

    //project details
    editorContainer: {
        padding: theme.spacing(2),
        minHeight: 250,
        '& .public-DraftEditorPlaceholder-root': {
            ...theme.typography.body2
        },
        '& .public-DraftEditorPlaceholder-hasFocus': {
            display: 'none'
        },
        '& .public-DraftEditor-content': {
            '& p': {
                ...theme.typography.body1
            },
            '& h1': {
                ...theme.typography.h1
            },
            '& h2': {
                ...theme.typography.h2
            },
            '& h3': {
                ...theme.typography.h3
            },
            '& h4': {
                ...theme.typography.h4
            },
            '& h5': {
                ...theme.typography.h5
            },
            '& h6': {
                ...theme.typography.h6
            },
            '& blockquote': {
                ...theme.typography.subtitle1
            },
            '& ul': {
                ...theme.typography.body1,
                marginLeft: theme.spacing(4)
            },
            '& ol': {
                ...theme.typography.body1,
                marginLeft: theme.spacing(4)
            },
            '& pre': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
                fontSize: 16,
                padding: 2
            }
        }
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textAlignCenter: {
        textAlign: 'center'
    },
    textAlignRight: {
        textAlign: 'right'
    },
    textAlignJustify: {
        textAlign: 'justify'
    }
}));

const ProjectCreate = () => {
    const classes = useStyles();

    // const [project, setProject] = useState({
    //     title: "",
    //     description: "",
    //     tags: [],
    //     startDate: "",
    //     endDate: "",
    //     difficult: "",
    // });

    //project details
    const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

    const editorRef = useRef(null);

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const handleContainerClick = () => {
        editorRef.current.focus();
    };

    const handleToolbarToggle = (type, value) => {
        if (type === 'blockType') {
            if (['left', 'center', 'right', 'justify'].includes(value)) {
                const newContentState = Modifier.setBlockData(
                    editorState.getCurrentContent(),
                    editorState.getSelection(),
                    {'text-align': value}
                );
                const newEditorState = EditorState.push(
                    editorState,
                    newContentState,
                    'change-block-data'
                );
                setEditorState(newEditorState);
                return;
            }
            setEditorState(RichUtils.toggleBlockType(editorState, value));
        } else {
            setEditorState(RichUtils.toggleInlineStyle(editorState, value));
        }
    };

    const handleEditorChange = editorState => {
        setEditorState(editorState);
    };

    const handleKeyCommand = (command, editorState) => {
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            handleEditorChange(newState);
            return true;
        }
        return false;
    };

    const mapKeyToEditorCommand = event => {
        if (event.keyCode === 9) {
            const newEditorState = RichUtils.onTab(event, editorState, 4);
            if (newEditorState !== editorState) {
                handleEditorChange(newEditorState);
            }
            return;
        }
        return getDefaultKeyBinding(event);
    };

    function blockStyleFn(contentBlock) {
        const textAlign = contentBlock.getData().get('text-align');
        if (textAlign) {
            const className = `textAlign${capitalize(textAlign)}`;
            return classes[className];
        }
        return '';
    }

    //about project
    const initialValues = {
        tag: '',
        tags: [],
    };

    // const [values, setValues] = useState({...initialValues});
    //const [calendarTrigger, setCalendarTrigger] = useState(null);

    const handleFieldChange = (event, field, value) => {
        event.persist && event.persist();
        setProject(project => ({
            ...project,
            [field]: value
        }));
    };

    const handleTagAdd = () => {
        setProject(project => {
            const newValues = {...project};
            if (newValues.tag && !newValues.tags.includes(newValues.tag)) {
                newValues.tags = [...newValues.tags];
                newValues.tags.push(newValues.tag);
            }
            newValues.tag = '';
            return newValues;
        });
    };

    const handleTagDelete = tag => {
        setProject(project => {
            const newValues = {...project};
            newValues.tags = newValues.tags.filter(t => t !== tag);
            return newValues;
        });
    };

    // const [selectedStartDate, setSelectedStartDate] = useState(moment.now());
    // const handleStartDateChange = (date) => {
    //     setSelectedStartDate(date);
    // };
    //
    // const [selectedEndDate, setSelectedEndDate] = useState(moment.now());
    // const handleEndDateChange = (date) => {
    //     setSelectedEndDate(date);
    // };

    // const handleCalendarOpen = trigger => {
    //     setCalendarTrigger(trigger);
    // };

    // const handleCalendarChange = () => {
    // };

    // const handleCalendarAccept = date => {
    //     setValues(values => ({
    //         ...values,
    //         [calendarTrigger]: date
    //     }));
    // };
    //
    // const handleCalendarClose = () => {
    //     setCalendarTrigger(false);
    // };
    //
    // const calendarOpen = Boolean(calendarTrigger);
    // const calendarMinDate =
    //     calendarTrigger === 'startDate'
    //         ? moment()
    //         : moment(values.startDate).add(1, 'day');
    // const calendarValue = values[calendarTrigger];

    //Заворачиваем все в newProject и отправляем в аддПроджект и дальше на сервак

    // const contentState = editorState.getCurrentContent();
    // console.log('content state', convertToRaw(contentState));

    const [slider, setSlider] = useState([1]);
    const handleChange = (event, newValue) => {
        setSlider(newValue);
    };

    const [project, setProject] = useState({
        title: '',
        tag: '',
        tags: ['Тренировка', 'Диета'],
        startDate: '',
        endDate: ''
    });

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const newProject = {
            ...project,
            difficult: _.toNumber(slider),
            description: convertToRaw(editorState.getCurrentContent()),
            date: new Date()
        }
        delete newProject.tag

        dispatch(addProject(newProject));
    };

    return (
        <Page
            className={classes.root}
            title="Создать проект"
        >
            <Header/>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div className={classes.aboutProject}>
                    <Card>
                        <CardHeader title="О проекте"/>
                        <CardContent>
                            <div className={classes.formGroup}>
                                <TextField
                                    fullWidth
                                    label="Название"
                                    helperText="Придумайте название для проекта"
                                    value={project.title}
                                    onChange = {(e) => setProject(
                                        {...project, title: e.target.value})}
                                    variant="outlined"
                                />
                            </div>
                            <div className={classes.formGroup}>
                                <div className={classes.fieldGroup}>
                                    <TextField
                                        className={classes.flexGrow}
                                        label="Теги"
                                        helperText="Придумайте теги для поиска"
                                        name="tag"
                                        onChange={event =>
                                            handleFieldChange(event, 'tag', event.target.value)
                                        }
                                        value={project.tag}
                                        variant="outlined"
                                    />
                                    <Button
                                        className={classes.addButton}
                                        onClick={handleTagAdd}
                                        size="small"
                                    >
                                        <AddIcon/>
                                        Добавить
                                    </Button>
                                </div>
                                <Typography
                                    className={classes.fieldHint}
                                    variant="body2"
                                >
                                    Теги для поиска:
                                </Typography>
                                <div className={classes.tags}>
                                    {project.tags.map(tag => (
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
                                        id="startDate"
                                        label="Начало проекта"
                                        type="date"
                                        className={classes.dateField}
                                        defaultValue={Date.now()}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={project.startDate}
                                        onChange={(e) => setProject({
                                            ...project, startDate: e.target.value })
                                        }
                                    />
                                    <TextField
                                        id="endDate"
                                        label="Начало проекта"
                                        type="date"
                                        className={classes.dateField}
                                        defaultValue={Date.now()}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={project.endDate}
                                        onChange={(e) => setProject({
                                            ...project, endDate: e.target.value })
                                        }
                                    />
                                    {/*<TextField*/}
                                    {/*    className={classes.dateField}*/}
                                    {/*    label="Начало проекта"*/}
                                    {/*    name="startDate"*/}
                                    {/*    onClick={() => handleCalendarOpen('startDate')}*/}
                                    {/*    value={moment(values.startDate).format('DD/MM/yyyy')}*/}
                                    {/*    variant="outlined"*/}
                                    {/*/>*/}
                                    {/*<TextField*/}
                                    {/*    className={classes.dateField}*/}
                                    {/*    label="Конец проекта"*/}
                                    {/*    name="endDate"*/}
                                    {/*    onClick={() => handleCalendarOpen('endDate')}*/}
                                    {/*    value={moment(values.endDate).format('DD/MM/yyyy')}*/}
                                    {/*    variant="outlined"*/}
                                    {/*/>*/}
                                </div>
                            </div>
                            <div className={classes.formSlider}>
                                <Typography id="slider" gutterBottom>
                                    Сложность
                                </Typography>
                                <Slider
                                    value={slider}
                                    onChange={handleChange}
                                    aria-labelledby="slider"
                                    step={1}
                                    marks
                                    min={1}
                                    max={10}
                                />
                                {/*<Grid container spacing={1}>*/}
                                {/*    <Grid item>*/}
                                {/*        <WhatshotIcon className={classes.hot} />*/}
                                {/*    </Grid>*/}
                                {/*    <Grid item xs>*/}
                                {/*        <Slider*/}
                                {/*            value={slider}*/}
                                {/*            onChange={handleChange}*/}
                                {/*            aria-labelledby="slider"*/}
                                {/*            step={1}*/}
                                {/*            marks*/}
                                {/*            min={1}*/}
                                {/*            max={10}*/}
                                {/*        />*/}
                                {/*    </Grid>*/}
                                {/*</Grid>*/}
                                {/*<Slider*/}
                                {/*    defaultValue={1}*/}
                                {/*    valueLabelDisplay="auto"*/}
                                {/*    getAriaValueText={project.difficult}*/}
                                {/*    step={1}*/}
                                {/*    marks*/}
                                {/*    min={1}*/}
                                {/*    max={10}*/}
                                {/*    helperText="Придумайте название для проекта"*/}
                                {/*    // name="difficult"*/}
                                {/*    // onChange={event =>*/}
                                {/*    //     handleFieldChange(event, 'difficult', event.target.getAriaValueText)*/}
                                {/*    // }*/}
                                {/*    value={project.difficult}*/}
                                {/*    onChange={(e) => setProject({*/}
                                {/*        ...project, difficult: e.target.value })*/}
                                {/*    }*/}
                                {/*/>*/}
                            </div>
                        </CardContent>
                        {/*<DatePicker*/}
                        {/*    cancelLabel="отмена"*/}
                        {/*    minDate={calendarMinDate}*/}
                        {/*    onAccept={handleCalendarAccept}*/}
                        {/*    onChange={handleCalendarChange}*/}
                        {/*    onClose={handleCalendarClose}*/}
                        {/*    open={calendarOpen}*/}
                        {/*    style={{display: 'none'}}*/}
                        {/*    value={calendarValue}*/}
                        {/*    variant="dialog"*/}
                        {/*/>*/}
                    </Card>
                </div>
                <div className={classes.projectDetails}>
                    <Card>
                        <CardHeader title="Детали проекта"/>
                        <CardContent>
                            <Paper>
                                <EditorToolbar
                                    editorState={editorState}
                                    onToggle={handleToolbarToggle}
                                />
                                <Divider/>
                                <div
                                    className={classes.editorContainer}
                                    onClick={handleContainerClick}
                                >
                                    <Editor
                                        blockRenderMap={blockRenderMap}
                                        blockStyleFn={blockStyleFn}
                                        editorState={editorState}
                                        handleKeyCommand={handleKeyCommand}
                                        keyBindingFn={mapKeyToEditorCommand}
                                        onChange={handleEditorChange}
                                        placeholder="Опишите детали проекта..."
                                        ref={editorRef}
                                        spellCheck
                                        //name="description"
                                        // onChange={event =>
                                        //     handleFieldChange(event, 'description', event.target.value)
                                        // }
                                        // value={values.description}
                                    />
                                </div>
                            </Paper>
                        </CardContent>
                    </Card>
                </div>
                {/*<AboutProject className={classes.aboutProject}/>*/}
                {/*<ProjectDetails className={classes.projectDetails}/>*/}
                {/*<AboutAuthor className={classes.aboutAuthor}/>*/}
                {/*<ProjectCalendar className={classes.projectCalendar}/>*/}
                {/*<ProjectCover className={classes.projectCover}/>*/}
                {/*<Preferences className={classes.preferences}/>*/}
                <div className={classes.actions}>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                    >
                        Создать проект
                    </Button>
                </div>
            </form>
        </Page>
    );
};

export default ProjectCreate;
