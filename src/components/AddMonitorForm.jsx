import { Box, FormControl, FormLabel, TextField, Button } from '@mui/material';
import { useState } from 'react';

const AddMonitorForm = ({ handleSubmitForm }) => {
  const [schedule, setSchedule] = useState('');
  const [name, setMonitorName] = useState('');
  const [command, setCommand] = useState('');
  const [notifyTime, setNotifyTime] = useState('');

  const onClickSubmitForm = (e) => {
    e.preventDefault();

    const monitorData = {
      schedule: schedule || undefined,
      name: name || undefined,
      command: command || undefined,
      grace_period: notifyTime || undefined,
    };

    return handleSubmitForm(monitorData);
  }

  return (
    <FormControl margin="normal" variant="outlined">
      <FormLabel>New Monitor</FormLabel>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <TextField
          required
          id="outlined-required"
          label="Schedule Required"
          helperText="The cron schedule string."
          value={schedule}
          onChange={(e) => { setSchedule(e.target.value)}}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          value={name}
          onChange={(e) => setMonitorName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Command"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label='Time to Notify'
          helperText="The amount of time you expect your job to take."
          value={notifyTime}
          onChange={(e) => setNotifyTime(e.target.value)}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
          >
          <Button sx={{ width: '100%' }} onClick={onClickSubmitForm}>Submit</Button>
        </Box>
      </Box>
    </FormControl>
  )
}
 

export default AddMonitorForm;