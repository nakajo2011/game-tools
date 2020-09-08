import React from 'react';
import {Container, Paper, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../rootReducer'
import SimpleCardDrawModule from "../modules/SimpleCardDrawModule";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    padding: theme.spacing(2),
    textAlign: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    display: "inline-block",
  },
  cardSheet: {
    position: "relative",
    height: theme.spacing(32),
  }
}));

const DECK_START_TOP_POS = 100;
const DECK_LEFT_POS = 68;
const DIFF = 4;

const lastCardTop = (num: number) => DECK_START_TOP_POS - ((num - 1) * DIFF);

const createDeck = (num: number, classes: any) => {
  let top = DECK_START_TOP_POS;
  const left = DECK_LEFT_POS;
  const papers = [];

  for (let i = 0; i < num - 1; i++) {
    const style = {top: top + "px", left: left + "px"};
    const paper = (
      <Paper className={classes.paper} style={style} elevation={2}/>
    );
    papers.push(paper);
    top -= DIFF;
  }
  return (
    <div>
      {papers}
    </div>
  );
};

export default function Deck() {
  // dispatch の取得
  const dispatch = useDispatch();
  // state の取得
  const counter = useSelector((state: RootState) => state.counter)
  const draw = () => dispatch(SimpleCardDrawModule.actions.draw());
  const classes = useStyles();

  const lastCard = () => {
    if (counter > 0) {
      return (
        <Paper className={classes.paper} style={{top: lastCardTop(counter) + "px", left: DECK_LEFT_POS + "px"}}
               elevation={2} onClick={() => draw()}>
          <Box fontSize={32}>{counter}</Box>
        </Paper>
      );
    }
  };

  return (
    <Container fixed className={classes.cardSheet}>
      {createDeck(counter, classes)}
      {lastCard()}
    </Container>
  );
}
