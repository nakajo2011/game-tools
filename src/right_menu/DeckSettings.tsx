import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {FormControl, FormLabel, FormHelperText, Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

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

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <FormControl component='fieldset' className={classes.fieldset}>
        <FormLabel component='legend'>デッキセッティング</FormLabel>
        <TextField id="standard-number-min" className={classes.input} label="Min" type="Number" size="small" defaultValue={1}/>
        <FormHelperText>から</FormHelperText>
        <TextField id="standard-number-max" className={classes.input} label="Max" type="Number" size="small" defaultValue={10}/>
        <FormHelperText>までのカードを</FormHelperText>
        <TextField id="standard-number-deck" className={classes.input} label="Set" type="Number" size="small" defaultValue={1}/>
        <FormHelperText>セット持つデッキを作成</FormHelperText>
        <Button variant="outlined" color="primary">作成</Button>
      </FormControl>
    </form>
  );
}