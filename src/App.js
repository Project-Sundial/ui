import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { createMonitor, getMonitors } from './services/monitors';
import MonitorsList from './components/MonitorsList';
import Header from './components/Header';

const App = () => {

  const [monitors, setMonitors] = useState([]);

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

  const handleClick = async() => {
    createMonitor('1 * * * *');
  }

  return (
    <div>
      <Header />
      <MonitorsList monitors={monitors}/>
      <Button variant="contained" onClick={handleClick}>Add Monitor</Button>
    </div>
  );
}

export default App;
