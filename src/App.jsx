import { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { createMonitor, getMonitors } from './services/monitors';
import MonitorsList from './components/MonitorsList';
import Header from './components/Header';
import AddMonitorForm from './components/AddMonitorForm';
import WrapperPopover from './components/WrapperPopover';
import generateCurl from './utils/generateCurl';


const App = () => {
  const [monitors, setMonitors] = useState([]);
  const [displayAddForm, setDisplayAddForm] = useState(false);
  const [displayString, setDisplayString] = useState(false);
  const [wrapper, setWrapper] = useState('');

  useEffect(() => {
    const fetchMonitors = async () => {
      try {
        const data = await getMonitors();
        setMonitors(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMonitors();
  }, []);

  const onClickNewMonitorButton = (e) => {
    setDisplayAddForm(true);
  }

  const onClickSubmitNewMonitor = async (monitorData) => {
    try { 
      const newMonitor = await createMonitor(monitorData);
      const wrapper = generateCurl(newMonitor);
      setMonitors(monitors.concat(newMonitor))
      setWrapper(wrapper);
      setDisplayString(true);
    } catch (error) {
      alert(JSON.stringify(error.response.data.error));
      console.log(error.response.data);
    }
  }

  const onClosePopover = () => {
    setDisplayString(false);
    setWrapper('');
    setDisplayAddForm(false);
  }

  const onClickBackButton = () => {
    setDisplayAddForm(false);
  }

  return (
    <div>
      <Header />
      {displayAddForm ? 
        null : 
        <Box display="flex" justifyContent="left" mt={2}>
          <Button 
            open={displayAddForm} 
            variant="contained" 
            onClick={onClickNewMonitorButton}>Add Monitor
          </Button> 
        </Box>}
      {displayAddForm ? 
        <AddMonitorForm 
          handleSubmitForm={onClickSubmitNewMonitor}
          handleBack={onClickBackButton}/> : 
        <MonitorsList monitors={monitors}/> }
      <WrapperPopover 
        wrapper={wrapper} 
        open={displayString} 
        handleClose={onClosePopover}
      />
    </div>
  );
}

export default App;
