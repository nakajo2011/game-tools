import React from 'react';
import './App.css';
import {AppBar, Toolbar, Typography, Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RightMenu from './right_menu/RightMenu';
import MainScreen from './main_screen/MainScreen';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,

  root: {
    flexGrow: 1,
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {

  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography variant="h4" color="inherit">
            Game Tools
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
      <Container fixed className={classes.root}>
        <div>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <MainScreen/>
            </Grid>
            <Grid item xs={3}>
              <Container color="secondary">
                <RightMenu/>
              </Container>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default App;
