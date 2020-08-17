import { TextField } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import React from 'react';


interface IProps {
  labelText: string;
  placeholderText: string;
  inputType?: string;
}

const TextInputComponent = (props: IProps) => {
  const { labelText, placeholderText, inputType } = props;

  const CustomTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#002b5d',
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#cacfd9',
        },
        '&:hover fieldset': {
          borderColor: '#3384f3',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#3384f3',
        },
      },
    },
  })(TextField);

  return (
    <div>
      <p style={{ fontSize: 12, color: '#002b5d', fontWeight: 'bolder' }}>{labelText}</p>
      <CustomTextField
        placeholder={placeholderText}
        type={inputType}
        variant='outlined'
        size='small'
        {...props}
      />
    </div>
  );
};

export default TextInputComponent;