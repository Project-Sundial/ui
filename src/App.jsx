import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { createMonitor, getMonitors } from './services/monitors';
import MonitorsList from './components/MonitorsList';
import Header from './components/Header';
import AddMonitorForm from './components/AddMonitorForm';

const App = () => {
  const [monitors, setMonitors] = useState([]);
  const [displayAddForm, setDisplayAddForm] = useState(false);

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
      await createMonitor(monitorData);
      setDisplayAddForm(false);
    } catch (error) {
      alert(JSON.stringify(error.response.data.error));
      console.log(error.response.data);
    }
  }

  return (
    <div>
      <Header />
      {displayAddForm ? <AddMonitorForm handleSubmitForm={onClickSubmitNewMonitor}/> : <MonitorsList monitors={monitors}/> }
      {displayAddForm ? null : <Button variant="contained" onClick={onClickNewMonitorButton}>Add Monitor</Button> }
    </div>
  );
}

export default App;
