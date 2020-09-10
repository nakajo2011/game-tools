import React from 'react';
import {Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = () => {
  return makeStyles((theme) => ({
    paper: {
      position: "absolute",
      padding: theme.spacing(2),
      textAlign: 'center',
      width: theme.spacing(8),
      height: theme.spacing(8),
      display: "inline-block",
      // border: 'dashed 1px #ff0000',
    },
  }))();
};

export default function Card(props: any) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={2} {...props} />
  );
}
