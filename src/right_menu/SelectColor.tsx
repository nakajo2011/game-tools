import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import {FormControl, FormLabel, Radio} from '@material-ui/core';
import {green, orange, red} from '@material-ui/core/colors';
import {RootState} from "../RootReducer";
import {useDispatch, useSelector} from "react-redux";
import SimpleCardDrawModule from "../modules/SimpleCardDrawModule";
import {DEFAULT_CARD_COLOR_WHITE} from "../constants";

const useStyles = makeStyles((theme) => ({
  fieldset: {
    width: "100%",
    display: "inline-block",
    marginBottom: theme.spacing(2),
  },
}));

const white = {
  400: '#f0f0f0',
  600: '#fcfcfc',
  'bg': '#666666',
};

const RED_VALUE: string = "red";
const ORANGE_VALUE: string = "orange";
const GREEN_VALUE: string = "green";
const WHITE_VALUE: string = "white";

const colors: any = {
  [RED_VALUE]: red[100],
  [ORANGE_VALUE]: orange[100],
  [GREEN_VALUE]: green[100],
  [WHITE_VALUE]: DEFAULT_CARD_COLOR_WHITE,
};

export default function SelectColor() {
  // dispatch の取得
  const dispatch = useDispatch();
  const setColor = (selectedValue: string) => dispatch(SimpleCardDrawModule.actions.setColor(colors[selectedValue]));

  const classes = useStyles();
  // state の取得
  const [selectedValue, setSelectedValue] = React.useState(WHITE_VALUE);

  const ColoredRadio = (colorTable: any, value: string) => {
    return withStyles({
      root: {
        backgroundColor: colorTable['bg'],
        color: colorTable[400],
        '&$checked': {
          color: colorTable[600],
        },
      },
      checked: {},
    })((props: any) => <Radio color="default"
                              checked={selectedValue === value}
                              value={value}
                              {...props} />);
  };

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
    setColor(event.target.value);
  };

  const WhiteRadio = ColoredRadio(white, WHITE_VALUE);
  const GreenRadio = ColoredRadio(green, GREEN_VALUE);
  const RedRadio = ColoredRadio(red, RED_VALUE);
  const OrangeRadio = ColoredRadio(orange, ORANGE_VALUE);

  return (
    <FormControl component='div' className={classes.fieldset}>
      <FormLabel>カードの色 </FormLabel>
      <WhiteRadio
        onChange={handleChange}
        name="radio-button-white"
        inputProps={{'aria-label': 'W'}}
      />
      <RedRadio
        onChange={handleChange}
        name="radio-button-red"
        inputProps={{'aria-label': 'A'}}
      />
      <OrangeRadio
        onChange={handleChange}
        name="radio-button-orange"
        inputProps={{'aria-label': 'B'}}
      />
      <GreenRadio
        onChange={handleChange}
        name="radio-button-green"
        inputProps={{'aria-label': 'C'}}
      />
    </FormControl>
  );
}