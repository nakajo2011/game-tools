import React, {useState} from 'react';
import {Container, Paper, Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

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
  const [cardNum, setCardNum] = useState(10);
  const classes = useStyles();

  const lastCard = () => {
    if (cardNum > 0) {
      return (
        <Paper className={classes.paper} style={{top: lastCardTop(cardNum) + "px", left: DECK_LEFT_POS + "px"}}
               elevation={2} onClick={() => setCardNum(cardNum - 1)}>
          <Box fontSize={32}>{cardNum}</Box>
        </Paper>
      );
    }
  };

  return (
    <Container fixed className={classes.cardSheet}>
      {createDeck(cardNum, classes)}
      {lastCard()}
    </Container>
  );
}
