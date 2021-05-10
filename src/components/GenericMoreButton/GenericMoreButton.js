import React, { Fragment, useRef, useState, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItemIcon,
  ListItemText,
  Tooltip,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreVert';
import GetAppIcon from '@material-ui/icons/GetApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PrintIcon from '@material-ui/icons/Print';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import AchiveIcon from '@material-ui/icons/ArchiveOutlined';

const useStyles = makeStyles(() => ({}));

const GenericMoreButton = props => {
  const classes = useStyles();
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };

  return (
    <Fragment>
      <Tooltip title="More options">
        <IconButton
          {...props}
          onClick={handleMenuOpen}
          ref={moreRef}
          size="small"
        >
          <MoreIcon />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={moreRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        classes={{ paper: classes.menu }}
        onClose={handleMenuClose}
        open={openMenu}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <GetAppIcon />
          </ListItemIcon>
          <ListItemText primary="Импорт" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FileCopyIcon />
          </ListItemIcon>
          <ListItemText primary="Скопировать в буфер обмена" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PictureAsPdfIcon />
          </ListItemIcon>
          <ListItemText primary="Экспортировать в PDF" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PrintIcon />
          </ListItemIcon>
          <ListItemText primary="Напечатать" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <AchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Архивировать" />
        </MenuItem>
      </Menu>
    </Fragment>
  );
};


export default memo(GenericMoreButton);
