import React from 'react';
import {Box, Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from '../RootReducer'
import Card from './Card';
import SimpleCardDrawModule from "../modules/SimpleCardDrawModule";

const useStyles = makeStyles((theme) => ({
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
        <Card key={"hand_"+num} onClick={() => revert(num)}>
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
