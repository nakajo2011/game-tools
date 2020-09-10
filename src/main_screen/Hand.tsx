import React from 'react';
import {Box, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../RootReducer';
import Card from './Card';
import SimpleCardDrawModule from "../modules/SimpleCardDrawModule";

const useStyles = makeStyles((theme) => ({
  handSheet: {
    display: "inline-block",
    height: theme.spacing(32),
  }
}));

export default function Hand() {
  // dispatch の取得
  const dispatch = useDispatch();
  // state の取得
  const hand: number[] = useSelector((state: RootState) => state.cardsState.hand)
  const classes = useStyles();

  const trash = (card: number) => dispatch(SimpleCardDrawModule.actions.trash(card));
  const cards = []
  for(let num of hand){
    cards.push(
      (
        <Card key={"hand_"+num} onClick={() => trash(num)}>
          <Box fontSize={32}>{num}</Box>
        </Card>
      )
    )
  }
  return (
    <Container fixed className={classes.handSheet}>
      {cards}
    </Container>
  );
}
