import { useState, useEffect } from 'react';
import { Button, Box } from '@mui/material';
import { createMonitor, getMonitors } from './services/monitors';
import MonitorsList from './components/MonitorsList';
import Header from './components/Header';
import AddMonitorForm from './components/AddMonitorForm';
import StringPopover from './components/WrapperPopover';
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
        console.log(data)
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
      // const data = await createMonitor(monitorData);
      // const wrapper = generateCurl(data.endpoint_key);
      const wrapper = 'hey'
      setWrapper(wrapper);
      setDisplayString(true);
    } catch (error) {
      alert(JSON.stringify(error.response.data.error));
      console.log(error.response.data);
    }
  }

  const onCopyPopover = () => {
    setDisplayString(false);
    setWrapper('');
    setDisplayAddForm(false);
  }

  const onCancelPopover = () => {
    setDisplayString(false);
    setWrapper('');
  }

  return (
    <div>
      <Header />
      {displayAddForm ? 
        null : 
        <Box display="flex" justifyContent="center" mt={2}>
          <Button 
            open={displayAddForm} 
            variant="contained" 
            onClick={onClickNewMonitorButton}>Add Monitor
          </Button> 
        </Box>}
      {displayAddForm ? 
        <AddMonitorForm handleSubmitForm={onClickSubmitNewMonitor}/> : 
        <MonitorsList monitors={monitors}/> }
      <StringPopover 
        wrapper={wrapper} 
        open={displayString} 
        handleCancel={onCancelPopover} 
        handleCopy={onCopyPopover}
      />
    </div>
  );
}

export default App;
