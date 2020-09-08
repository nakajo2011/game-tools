import React from 'react';
import {Container, FormHelperText, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Deck from './Deck';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
  paper: {
    position: "absolute",
    padding: theme.spacing(2),
    textAlign: 'center',
    width: theme.spacing(8),
    height: theme.spacing(8),
    display: "inline-block",
  },
  container: {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
  deckField: {
    borderRadius: "10px",
    border: "2px solid",
    borderColor: theme.palette.grey.A100,
  },
  trashField: {
    borderRadius: "10px",
    border: "2px solid",
    borderColor: theme.palette.secondary.light,
  },
  handField: {
    borderRadius: "10px",
    border: "2px solid",
    borderColor: theme.palette.primary.light,
    height: "40%",
  },
}));

export default function MainScreen() {

  const classes = useStyles();
  return (
    <Container fixed className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Container component="fieldset" className={classes.deckField}>
            <FormHelperText component="legend">山札フィールド</FormHelperText>
            <Deck/>
          </Container>
        </Grid>
        <Grid item xs={8}>
          <Container component="fieldset" className={classes.trashField}>
            <FormHelperText component="legend">捨て札フィールド</FormHelperText>
          </Container>
        </Grid>
      </Grid>
      <div style={{padding: "8px 0 0 0"}}/>
      <Container component="fieldset" className={classes.handField}>
        <FormHelperText component="legend">手札フィールド</FormHelperText></Container>
    </Container>
  );
}
