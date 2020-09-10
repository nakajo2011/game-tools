import React from 'react';
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../RootReducer'
import SimpleCardDrawModule from "../modules/SimpleCardDrawModule";
import Card from './Card';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    padding: theme.spacing(2),
    textAlign: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    display: "inline-block",
    // border: 'dashed 1px #ff0000',
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
      <Card style={style} elevation={2} key={"deck_"+i}/>
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
  const deck: number[] = useSelector((state: RootState) => state.cardsState.deck)
  const draw = () => dispatch(SimpleCardDrawModule.actions.draw());
  const classes = useStyles();

  const lastCard = () => {
    if (deck.length > 0) {
      return (
        <Card style={{top: lastCardTop(deck.length) + "px", left: DECK_LEFT_POS + "px"}}
               onClick={() => draw()} key={"deck_"+(deck.length-1)} />
      );
    }
  };

  return (
    <Container fixed className={classes.cardSheet}>
      {createDeck(deck.length, classes)}
      {lastCard()}
    </Container>
  );
}
