import React from 'react';
import {Box, Container, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useSelector} from "react-redux";
import {RootState} from '../RootReducer'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginLeft: theme.spacing(2),
    textAlign: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    display: "inline-block",
  },
  handSheet: {
    display: "inline-block",
    height: theme.spacing(32),
  }
}));

export default function Hand() {
  // state の取得
  const hand: number[] = useSelector((state: RootState) => state.cardsState.hand)
  const classes = useStyles();

  const cards = []
  for(let num of hand){
    cards.push(
      (
        <Paper className={classes.paper} elevation={2} key={"hand_"+num}>
          <Box fontSize={32}>{num}</Box>
        </Paper>
      )
    )
  }
  return (
    <Container fixed className={classes.handSheet}>
      {cards}
    </Container>
  );
}
