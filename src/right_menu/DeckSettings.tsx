import React, { useState } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {FormControl, FormLabel, FormHelperText, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import SimpleCardDrawModule, {DeckSettingsState} from "../modules/SimpleCardDrawModule";

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

export default function DeckSettings() {
  const classes = useStyles();

  interface useInputParams {type: string; label: string, num: number;}
  // from: https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
  function useInput({ type, label, num }: useInputParams):[number, any] {
    const [value, setValue] = useState(num);
    const input = <TextField id="standard-number-max" className={classes.input} label={label} type={type} size="small" value={value} onChange={e => setValue(Number(e.target.value))}/>;
    return [value, input];
  }

  const [min, minInput] = useInput({ type: "number", label: "min", num: 1 });
  const [max, maxInput] = useInput({ type: "number", label: "max", num: 10 });
  const [deckSet, deckSetInput] = useInput({ type: "number", label: "Set", num: 1 });

  // dispatch の取得
  const dispatch = useDispatch();
  // state の取得
  const generate = () => {
    let settings: DeckSettingsState = {min, max, deckSet};
    console.log()
    dispatch(SimpleCardDrawModule.actions.generate(settings));
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl component='fieldset' className={classes.fieldset}>
        <FormLabel component='legend'>デッキセッティング</FormLabel>
        {minInput}
        <FormHelperText>から</FormHelperText>
        {maxInput}
        <FormHelperText>までのカードを</FormHelperText>
        {deckSetInput}
        <FormHelperText>セット持つデッキを作成</FormHelperText>
        <Button variant="outlined" color="primary" onClick={() => generate()}>作成</Button>
      </FormControl>
    </form>
  );
}