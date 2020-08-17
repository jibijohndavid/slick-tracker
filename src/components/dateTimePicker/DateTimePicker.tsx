import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import React from 'react';

interface IDateTimeProps {
  label: string;
  dateMode: boolean;
  selectedValue: (date: Date | null) => void;
}
const DateTimePicker = (props: IDateTimeProps) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    props.selectedValue(date);
  };

  const dateRender = () => {
    return (
      <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            label={props.label}
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </>
    );
  };

  const timeRender = () => {
    return (
      <>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardTimePicker
            disableToolbar
            variant="inline"
            format="hh:mm a"
            margin="normal"
            id="date-picker-inline"
            label={props.label}
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </>
    );
  };

  return props.dateMode ? dateRender() : timeRender();
};

export default DateTimePicker;
