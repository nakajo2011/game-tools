import React from 'react';
import {Box, Container, Paper} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../RootReducer'
import SimpleCardDrawModule from "../modules/SimpleCardDrawModule";

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

export default function Trash() {
  // dispatch の取得
  const dispatch = useDispatch();
  // state の取得
  const trash: number[] = useSelector((state: RootState) => state.cardsState.trash)
  const classes = useStyles();

  const revert = (card: number) => dispatch(SimpleCardDrawModule.actions.revert(card));
  const cards = []
  for(let num of trash){
    cards.push(
      (
        <Paper className={classes.paper} elevation={2} key={"hand_"+num} onClick={() => revert(num)}>
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
