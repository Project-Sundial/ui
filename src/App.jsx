import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { createMonitor, getMonitors } from './services/monitors';
import MonitorsList from './components/MonitorsList';
import Header from './components/Header';
import AddMonitorForm from './components/AddMonitorForm';
import StringPopover from './components/WrapperPopover';

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
      const data = await createMonitor(monitorData);
      setWrapper("this will  be the wrapper");
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
      {displayAddForm ? <AddMonitorForm handleSubmitForm={onClickSubmitNewMonitor}/> : <MonitorsList monitors={monitors}/> }
      {displayAddForm ? null : <Button open={displayAddForm} variant="contained" onClick={onClickNewMonitorButton}>Add Monitor</Button> }
      <StringPopover wrapper={wrapper} open={displayString} handleCancel={onCancelPopover} handleCopy={onCopyPopover}/>
    </div>
  );
}

export default App;
