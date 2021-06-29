/* eslint-disable react/no-multi-comp */
import React from 'react';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {makeStyles} from '@material-ui/core/styles';
import {Tooltip, Button} from '@material-ui/core';
import {fade} from '@material-ui/core/styles/colorManipulator';
import CodeIcon from '@material-ui/icons/Code';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatUnderlined from '@material-ui/icons/FormatUnderlined';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';

const useStyles1 = makeStyles(theme => ({
    root: {},
    inner: {
        padding: theme.spacing(1),
        display: 'flex',
        alignItems: 'center'
    }
}));

const useStyles2 = makeStyles(theme => ({
    button: {
        padding: 0,
        width: 32,
        height: 32,
        minWidth: 32,
        color: theme.palette.icon,
        '& + &': {
            marginLeft: theme.spacing(1)
        }
    },
    activeButton: {
        backgroundColor: fade(theme.palette.primary.main, 0.1),
        color: theme.palette.primary.main
    }
}));

const BLOCK_TYPES = [
    {
        blockType: 'header-one',
        tooltip: 'Заголовок 1',
        text: 'H1'
    },
    {
        blockType: 'header-two',
        tooltip: 'Заголовок 2',
        text: 'H2'
    },
    {
        blockType: 'header-three',
        tooltip: 'Заголовок 3',
        text: 'H3'
    },
    {
        blockType: 'header-four',
        tooltip: 'Заголовок 4',
        text: 'H4'
    },
    {
        blockType: 'header-five',
        tooltip: 'Заголовок 5',
        text: 'H5'
    },
    {
        blockType: 'header-six',
        tooltip: 'Заголовок 6',
        text: 'H6'
    },
    {
        blockType: 'blockquote',
        tooltip: 'Цитата',
        icon: FormatQuoteIcon
    },
    {
        blockType: 'unordered-list-item',
        tooltip: 'Неупорядоченный список',
        icon: FormatListBulletedIcon
    },
    {
        blockType: 'ordered-list-item',
        tooltip: 'Упорядоченный список',
        icon: FormatListNumberedIcon
    },
    {
        blockType: 'code-block',
        tooltip: 'Блок кода',
        icon: CodeIcon
    },
    // {
    //     blockType: 'left',
    //     tooltip: 'Выровнять по левому краю',
    //     icon: FormatAlignLeftIcon
    // },
    // {
    //     blockType: 'center',
    //     tooltip: 'Выровнять по центру',
    //     icon: FormatAlignCenterIcon
    // },
    // {
    //     blockType: 'right',
    //     tooltip: 'Выровнять по правому краю',
    //     icon: FormatAlignRightIcon
    // },
    // {
    //     blockType: 'justify',
    //     tooltip: 'Выровнять по ширине',
    //     icon: FormatAlignJustifyIcon
    // }
];

const INLINE_STYLES = [
    {
        inlineStyle: 'BOLD',
        tooltip: 'Жирный',
        icon: FormatBoldIcon
    },
    {
        inlineStyle: 'ITALIC',
        tooltip: 'Курсив',
        icon: FormatItalicIcon
    },
    {
        inlineStyle: 'UNDERLINE',
        tooltip: 'Подчеркивание',
        icon: FormatUnderlined
    },
    {
        inlineStyle: 'CODE',
        tooltip: 'Моноширинный',
        icon: CodeIcon
    }
];

const ButtonBase = props => {
    const {active, tooltip, children, ...rest} = props;

    const classes = useStyles2();

    return (
        <Tooltip title={tooltip}>
            <Button
                {...rest}
                className={clsx(classes.button, {
                    [classes.activeButton]: active
                })}
            >
                {children}
            </Button>
        </Tooltip>
    );
};


const BlockTypeButtons = props => {
    const {editorState, onToggle} = props;

    const handleClick = (event, blockType) => {
        event.preventDefault();

        onToggle('blockType', blockType);
    };

    const selection = editorState.getSelection();
    const blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
    const blockData = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getData();

    return (
        <>
            {BLOCK_TYPES.map(button => {
                let active = false;

                if (['left', 'center', 'right', 'justify'].includes(button.blockType)) {
                    active = blockData.get('text-align') === button.blockType;
                } else {
                    active = button.blockType === blockType;
                }

                return (
                    <ButtonBase
                        active={active}
                        key={button.blockType}
                        onClick={event => handleClick(event, button.blockType)}
                        tooltip={button.tooltip}
                    >
                        {button.icon ? <button.icon/> : button.text}
                    </ButtonBase>
                );
            })}
        </>
    );
};

const InlineStyleButtons = props => {
    const {editorState, onToggle} = props;

    const handleClick = (event, inlineStyle) => {
        event.preventDefault();
        onToggle('inlineStyle', inlineStyle);
    };

    const currentStyle = editorState.getCurrentInlineStyle();

    return (
        <>
            {INLINE_STYLES.map(button => (
                <ButtonBase
                    active={currentStyle.has(button.inlineStyle)}
                    key={button.inlineStyle}
                    onClick={event => handleClick(event, button.inlineStyle)}
                    tooltip={button.tooltip}
                >
                    {button.icon ? <button.icon/> : button.text}
                </ButtonBase>
            ))}
        </>
    );
};


const EditorToolbar = props => {
    const {editorState, onToggle, className, ...rest} = props;

    const classes = useStyles1();

    return (
        <div
            {...rest}
            className={clsx(classes.root, className)}
        >
            <PerfectScrollbar>
                <div className={classes.inner}>
                    <BlockTypeButtons
                        editorState={editorState}
                        onToggle={onToggle}
                    />
                    <InlineStyleButtons
                        editorState={editorState}
                        onToggle={onToggle}
                    />
                </div>
            </PerfectScrollbar>
        </div>
    );
};


export default EditorToolbar;
