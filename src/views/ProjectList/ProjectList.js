import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';

import Page from "../../components/Page";
import {Header, Filter, Results} from './components';
import {useDispatch, useSelector} from "react-redux";
import {getAllProjects} from "../../store/actions/projectActions";
import SearchIcon from "@material-ui/icons/Search";
import {Button, Card, Chip, colors, Divider, FormControlLabel, FormGroup, Input, Switch} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CancelIcon from "@material-ui/icons/Cancel";
import FaceIcon from "@material-ui/icons/Face";
import TextFieldsIcon from '@material-ui/icons/TextFields';
import WhatshotIcon from "@material-ui/icons/Whatshot";

const useStyles = makeStyles(theme => ({
    root: {
        width: theme.breakpoints.values.lg,
        maxWidth: '100%',
        margin: '0 auto',
        padding: theme.spacing(3)
    },
    header: {
        marginBottom: theme.spacing(3)
    },
    filter: {
        marginTop: theme.spacing(3)
    },
    results: {
        marginTop: theme.spacing(6)
    },
    keywords: {
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'center'
    },
    disabledInput: {},
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
        padding: theme.spacing(1),
        paddingRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
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
    },
    fakeSubmit: {
        width: 150,
        marginLeft: 'auto',
        backgroundColor: colors.grey[300],
    }
}));

// const selects = [
//     {
//         label: '?????? ??????????????',
//         options: ['?????????????????????????? ????????', '??????????']
//     },
//     {
//         label: '?????????????? ??????????????????',
//         options: ['1', '2', '3', '4']
//     },
//     {
//         label: '?????????????????? ????????????????',
//         options: ['???? ?????????????????? ?????? ????!', '???? ??????????']
//     },
// ];


// function FormControlLabel(props) {
//     return null;
// }
//
// FormControlLabel.propTypes = {
//     label: PropTypes.string,
//     control: PropTypes.element
// };
const ProjectList = props => {
    const {history} = props;

    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProjects())
    }, [dispatch])

    const projects = useSelector(state => state.projectsList)

    const appState = useSelector((state) => state);
    console.log(appState);

    const auth = useSelector(state => state.auth)
    if (!auth._id) (
        history.push('/')
    )

    const [inputValue, setInputValue] = useState('');

    const [chips, setChips] = useState([
        '?????????????????????????? ????????',
        '??????????',
        '????????',
        '??????????',
        '-10????'
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

    //?????????? ???? ????????????????
    const [value, setValue] = useState("");

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    };

    const filterByTitles = (projects, current) => {
        return projects.filter((project) => project.title === current);
    }
    const results = !value ? projects : filterByTitles(projects, value);

    // const filterByNames = (projects, current) => {
    //     return projects.filter((project) => project.name === current);
    // }
    // const results = !value ? projects : filterByTitles(projects, value);

    //???????????????? ????????????
    const [searchVariant, setSearchVariant] = useState({
        checkedTags: false,
        checkedDifficult: false,
        checkedTitle: true,
        checkedAuthor: false,
    });
    const handleChangeSearch = (event) => {
        for (let key in searchVariant) {
            searchVariant[key] = false;
        }
        setSearchVariant({...searchVariant, [event.target.name]: event.target.checked});
    };

    return (
        <Page
            className={classes.root}
            title="???????????? ????????????????"
        >
            <Header className={classes.header}/>
            <Card className={classes.filter}>
                <div className={classes.keywords}>
                    {(  !searchVariant.checkedTags
                        && !searchVariant.checkedDifficult
                        && !searchVariant.checkedTitle
                        && !searchVariant.checkedAuthor
                    ) && (
                        <>
                            <CancelIcon className={classes.searchIcon}/>
                            <Input
                                className={classes.disabledInput}
                                disabled
                                disableUnderline
                                placeholder={`???????????????? ?????????? ????????????`}
                                value={value}
                            />
                        </>
                    )}
                    {(  searchVariant.checkedTags
                        && !searchVariant.checkedDifficult
                        && !searchVariant.checkedTitle
                        && !searchVariant.checkedAuthor
                    ) && (
                        <>
                            <TextFieldsIcon className={classes.searchIcon}/>
                            <Input
                                disableUnderline
                                onChange={onChangeHandler}
                                placeholder={`?????????????? ????????`}
                                value={value}
                            />
                            <Button className={classes.submit} variant="outlined">
                                ????????????????
                            </Button>
                        </>
                    )}
                    {(  !searchVariant.checkedTags
                        && searchVariant.checkedDifficult
                        && !searchVariant.checkedTitle
                        && !searchVariant.checkedAuthor
                    ) && (
                        <>
                            <WhatshotIcon className={classes.searchIcon}/>
                            <Input
                                disableUnderline
                                type="number"
                                onChange={onChangeHandler}
                                placeholder={`?????????? ???? 1 ???? 10`}
                                value={value}
                            />
                        </>
                    )}
                    {(  !searchVariant.checkedTags
                        && !searchVariant.checkedDifficult
                        && searchVariant.checkedTitle
                        && !searchVariant.checkedAuthor
                    ) && (
                        <>
                            <SearchIcon className={classes.searchIcon}/>
                            <Input
                                disableUnderline
                                onChange={onChangeHandler}
                                placeholder={`?????????????? ????????????????`}
                                value={value}
                            />
                        </>
                    )}
                    {(  !searchVariant.checkedTags
                        && !searchVariant.checkedDifficult
                        && !searchVariant.checkedTitle
                        && searchVariant.checkedAuthor
                    ) && (
                        <>
                            <FaceIcon className={classes.searchIcon}/>
                            <Input
                                disableUnderline
                                disabled
                                onChange={onChangeHandler}
                                placeholder={`?????????????? ?????? ????????????`}
                                value={value}
                            />
                        </>
                    )}
                </div>
                <Divider/>
                {searchVariant.checkedTags && (
                    <>
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
                    </>
                )}
                <div className={classes.selects}>
                    <FormGroup row>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={searchVariant.checkedTags}
                                    onChange={handleChangeSearch}
                                    name="checkedTags"
                                    color="secondary"
                                />}
                            label="?????????? ???? ??????????"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={searchVariant.checkedDifficult}
                                    onChange={handleChangeSearch}
                                    name="checkedDifficult"
                                    color="primary"
                                />
                            }
                            label="?????????? ???? ??????????????????"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={searchVariant.checkedTitle}
                                    onChange={handleChangeSearch}
                                    name="checkedTitle"
                                    color="primary"
                                />
                            }
                            label="?????????? ???? ????????????????"
                        />
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={searchVariant.checkedAuthor}
                                    onChange={handleChangeSearch}
                                    name="checkedAuthor"
                                    color="primary"
                                />
                            }
                            label="?????????? ???? ??????????????"
                        />
                    </FormGroup>
                    {/*{selects.map(select => (*/}
                    {/*    <MultiSelect*/}
                    {/*        key={select.label}*/}
                    {/*        label={select.label}*/}
                    {/*        onChange={handleMultiSelectChange}*/}
                    {/*        options={select.options}*/}
                    {/*        value={chips}*/}
                    {/*    />*/}
                    {/*))}*/}
                    {/*<FormControlLabel*/}
                    {/*    className={classes.inNetwork}*/}
                    {/*    control={*/}
                    {/*        <Checkbox*/}
                    {/*            color="primary"*/}
                    {/*        />*/}
                    {/*    }*/}
                    {/*    label="???????????????? ?????????????????? ?????????????? ?? ??????????"*/}
                    {/*/>*/}
                    {
                        (   !searchVariant.checkedTags
                            && !searchVariant.checkedDifficult
                            && !searchVariant.checkedTitle
                            && !searchVariant.checkedAuthor
                        ) ? (
                            <Button disabled className={classes.fakeSubmit} variant="outlined">
                                ??????????
                            </Button>
                        ) : (
                            <Button type="submit" className={classes.submit} variant="outlined">
                                ??????????
                            </Button>
                        )
                    }
                </div>
            </Card>
            <Results className={classes.results} projects={results}/>
        </Page>
    );
};

export default ProjectList;
