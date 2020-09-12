import React from 'react';
import {Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {RootState} from "../RootReducer";
import {useSelector} from "react-redux";

const useStyles = (bgcolor: string) => {
  return makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      marginLeft: theme.spacing(2),
      textAlign: 'center',
      width: theme.spacing(8),
      height: theme.spacing(8),
      display: "inline-block",
      background: bgcolor,
    },
    deckPaper: {
      position: 'absolute',
      padding: theme.spacing(2),
      textAlign: 'center',
      width: theme.spacing(8),
      height: theme.spacing(8),
      display: "inline-block",
      background: bgcolor,
    }
  }))();
}

export default function Card(props: any) {
  const color = useSelector((state: RootState) => state.cardsState.color)
  const classes = useStyles(color);
  return (
    <Paper className={props.deck? classes.deckPaper: classes.paper} elevation={2} {...props} />
  );
}
