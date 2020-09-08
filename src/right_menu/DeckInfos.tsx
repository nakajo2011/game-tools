import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {FormControl, FormLabel, Box} from '@material-ui/core';
import {RootState} from "../RootReducer";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    width: "40%",
  },
  fieldset: {
    borderRadius: "10px",
    border: "1px solid",
    padding: "8px",
    width: "100%",
  },
}));

export default function DeckInfos() {
  const classes = useStyles();
  // state の取得
  const cardsState = useSelector((state: RootState) => state.cardsState)
  return (
    <FormControl component='fieldset' className={classes.fieldset}>
      <FormLabel component='legend'>デッキ情報</FormLabel>
      <Box>
        残りのカード {cardsState.deck.length}枚
      </Box>
      <Box>
        手札カード {cardsState.hand.length}枚
      </Box>
      <Box>
        捨て札カード {cardsState.trash.length}枚
      </Box>
    </FormControl>
  );
}