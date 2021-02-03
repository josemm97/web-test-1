import React, { useState, useEffect } from 'react';
// import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import Box from '@material-ui/core/Box';
import DateUtils from '@date-io/moment';
import {
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import styles from './Date.module.css';

function DateTest() {
//   const [selectedDate, handleDateChange] = useState(new Date());
  const [error = null, setError] = useState();
  const [time = {
    startDateTime: null,
    endDateTime: null,
  }, setEvent] = useState();

  useEffect(() => {
    setError(null);
  }, [time.startDateTime]);

  const getError = (field) => {
    const errors = {
      startDateTime: 'Start date name is required',
      endDateTime: 'End date must be greater than start date',
    };

    if (error !== null) {
      if (error.indexOf(field) !== -1) {
        return errors[field];
      }
    }

    return false;
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <Box className={styles.container}>
      <Box className={styles.dateContainer}>
        <div variant="body" className={styles.text}>
          Start Date
        </div>
        <Box>
          <MuiPickersUtilsProvider utils={DateUtils}>
            <DateTimePicker
              clearable
              ampm
              disablePast
              fullWidth
            // error={getError('startDateTime') !== false}
            // helperText={getError('startDateTime')}
            //   value={selectedDate}
            //   onChange={handleDateChange}
              helperText={getError('startDateTime')}
              value={time.startDateTime}
              onChange={(date) => setEvent({ ...time, startDateTime: date })}
            />
          </MuiPickersUtilsProvider>

        </Box>
      </Box>
      <Box className={styles.dateContainer}>
        <div variant="body" className={styles.text}>
          End Date
        </div>
        <Box>
          <MuiPickersUtilsProvider utils={DateUtils}>
            <DateTimePicker
              clearable
              ampm
              disablePast
              fullWidth
              error={getError('endDateTime') !== false}
              helperText={getError('endDateTime')}
              minDate={time.startDateTime}
              value={time.endDateTime}
              onChange={(date) => setEvent({ ...time, endDateTime: date })}
            />

          </MuiPickersUtilsProvider>
        </Box>
      </Box>

    </Box>
  );
}

export default DateTest;
