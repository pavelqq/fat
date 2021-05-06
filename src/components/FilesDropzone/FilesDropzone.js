import React, {Fragment, useState, useCallback} from 'react';
import clsx from 'clsx';
import {v4 as uuidv4} from 'uuid';
import {useDropzone} from 'react-dropzone';
// import PerfectScrollbar from 'react-perfect-scrollbar';
import {makeStyles} from '@material-ui/core/styles';
import {
    Button,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Tooltip,
    colors
} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreIcon from '@material-ui/icons/MoreVert';

import bytesToSize from "../../utils/bytesToSize";

const useStyles = makeStyles(theme => ({
    root: {},
    dropZone: {
        border: `1px dashed ${theme.palette.divider}`,
        padding: theme.spacing(6),
        outline: 'none',
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: colors.grey[50],
            opacity: 0.5,
            cursor: 'pointer'
        }
    },
    dragActive: {
        backgroundColor: colors.grey[50],
        opacity: 0.5
    },
    image: {
        width: 130
    },
    info: {
        marginTop: theme.spacing(1)
    },
    list: {
        maxHeight: 320
    },
    actions: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'flex-end',
        '& > * + *': {
            marginLeft: theme.spacing(2)
        }
    }
}));

const FilesDropzone = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    const [files, setFiles] = useState([]);

    const handleDrop = useCallback(acceptedFiles => {
        setFiles(files => [...files].concat(acceptedFiles));
    }, []);

    const handleRemoveAll = () => {
        setFiles([]);
    };

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop: handleDrop
    });

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <div
                className={clsx({
                    [classes.dropZone]: true,
                    [classes.dragActive]: isDragActive
                })}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                <div>
                    <img
                        alt="Загрузить файлы"
                        className={classes.image}
                        src="/images/undraw_add_file2_gvbb.svg"
                    />
                </div>
                <div>
                    <Typography
                        gutterBottom
                        variant="h3"
                    >
                        Загрузить файлы
                    </Typography>
                    <Typography
                        className={classes.info}
                        color="textSecondary"
                        variant="body1"
                    >
                        Перетащите файлы сюда или нажмите на <Link underline="always">ссылку</Link>{' '}
                        для загрузки
                    </Typography>
                </div>
            </div>
            {files.length > 0 && (
                <>
                    <List className={classes.list}>
                        {files.map((file, i) => (
                            <ListItem
                                divider={i < files.length - 1}
                                key={uuidv4()}
                            >
                                <ListItemIcon>
                                    <FileCopyIcon/>
                                </ListItemIcon>
                                <ListItemText
                                    primary={file.name}
                                    primaryTypographyProps={{variant: 'h5'}}
                                    secondary={bytesToSize(file.size)}
                                />
                                <Tooltip title="More options">
                                    <IconButton edge="end">
                                        <MoreIcon/>
                                    </IconButton>
                                </Tooltip>
                            </ListItem>
                        ))}
                    </List>
                    <div className={classes.actions}>
                        <Button
                            onClick={handleRemoveAll}
                            size="small"
                        >
                            Remove all
                        </Button>
                        <Button
                            color="secondary"
                            size="small"
                            variant="contained"
                        >
                            Upload files
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};


export default FilesDropzone;
