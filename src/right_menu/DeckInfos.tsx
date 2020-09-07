import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {FormControl, FormLabel, Box} from '@material-ui/core';

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
  return (
    <FormControl component='fieldset' className={classes.fieldset}>
      <FormLabel component='legend'>デッキ情報</FormLabel>
      <Box>
        残りのカード 8枚
      </Box>
      <Box>
        手札カード 2枚
      </Box>
      <Box>
        捨て札カード 0枚
      </Box>
    </FormControl>
  );
}