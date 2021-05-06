import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  colors
} from '@material-ui/core';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFileOutlined';
import GetAppIcon from '@material-ui/icons/GetApp';
import MoreIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import ArchiveIcon from '@material-ui/icons/ArchiveOutlined';
import EditIcon from '@material-ui/icons/Edit';

import bytesToSize from "../../../../../../utils/bytesToSize";

const useStyles = makeStyles(theme => ({
  root: {},
  media: {
    height: 240
  },
  placeholder: {
    height: 240,
    backgroundColor: colors.blueGrey[50],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  insertDriveFileIcon: {
    height: theme.spacing(6),
    width: theme.spacing(6),
    fontSize: theme.spacing(6)
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  actions: {
    justifyContent: 'center'
  },
  getAppIcon: {
    marignRight: theme.spacing(1)
  },
  menu: {
    width: 250,
    maxWidth: '100%'
  }
}));

const FileCard = props => {
  const { file, className, ...rest } = props;

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
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      {file.mimeType.includes('image/') ? (
        <CardMedia
          className={classes.media}
          image={file.url}
        />
      ) : (
        <div className={classes.placeholder}>
          <InsertDriveFileIcon className={classes.insertDriveFileIcon} />
        </div>
      )}
      <CardContent className={classes.content}>
        <div>
          <Typography variant="h5">{file.name}</Typography>
          <Typography variant="subtitle2">{bytesToSize(file.size)}</Typography>
        </div>
        <div>
          <Tooltip title="More options">
            <IconButton
              edge="end"
              onClick={handleMenuOpen}
              ref={moreRef}
              size="small"
            >
              <MoreIcon />
            </IconButton>
          </Tooltip>
        </div>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button>
          <GetAppIcon className={classes.getAppIcon} />
          Download
        </Button>
      </CardActions>
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
        <MenuItem divider>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Rename" />
        </MenuItem>
        <MenuItem divider>
          <ListItemIcon>
            <DeleteIcon />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ArchiveIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </MenuItem>
      </Menu>
    </Card>
  );
};


export default FileCard;
