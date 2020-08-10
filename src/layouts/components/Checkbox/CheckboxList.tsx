import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
} from '@material-ui/core';
import React, { useState } from 'react';

import useStyles from './styles';

interface CheckboxProps {
  label: string;
  isError: boolean;
  listArray: any[];
  errorMessage: string;
  selectedArray: (array: string[]) => void;
}

const CheckboxList = (props: CheckboxProps) => {
  const styles = useStyles();
  const dataArray = props.listArray;
  const [selectedArray, setSelectedArray] = useState<string[]>([]);
  const [boolVal, setBoolVal] = useState<boolean[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.name;
    const array: string[] = [...selectedArray];
    const boolArray: boolean[] = [...boolVal];
    const index = dataArray.indexOf(val);
    const sindex = array.indexOf(val);
    if (array.includes(val)) {
      array.splice(sindex, 1);
      boolArray[index] = false;
    } else {
      boolArray[index] = true;
      array.push(val);
    }
    setBoolVal(boolArray);
    setSelectedArray(array);
    props.selectedArray(array);
  };

  return (
    <>
      <FormControl
        required
        error={props.isError}
        component="fieldset"
        className={styles.formControl}
      >
        <FormLabel component="legend">{props.label}</FormLabel>
        <FormGroup>
          {dataArray.map((item, index) => (
            <FormControlLabel
              key={item.id}
              control={
                <Checkbox
                  key={item.id}
                  checked={boolVal[index]}
                  onChange={handleChange}
                  name={item}
                />
              }
              label={item}
            />
          ))}
        </FormGroup>
        {props.isError ? (
          <FormHelperText>{props.errorMessage}</FormHelperText>
        ) : null}
      </FormControl>
    </>
  );
};

export default CheckboxList;
