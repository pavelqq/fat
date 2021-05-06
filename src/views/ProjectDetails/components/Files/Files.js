import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Grid } from '@material-ui/core';

import FilesDropzone from "../../../../components/FilesDropzone";
import { FileCard } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  files: {
    marginTop: theme.spacing(3)
  }
}));

const Files = props => {
  const { files, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Card>
        <CardContent>
          <FilesDropzone />
        </CardContent>
      </Card>
      <Grid
        className={classes.files}
        container
        spacing={3}
      >
        {files.map(file => (
          <Grid
            item
            key={file.id}
            lg={4}
            md={4}
            sm={6}
            xs={12}
          >
            <FileCard file={file} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};


export default Files;
