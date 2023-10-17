import {Box, List} from '@mui/material';
import { Monitor } from './Monitor';

const MonitorsList = ({ monitors }) => {
  return (
    <div>
      <h3>Monitors</h3>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
              {monitors.map(monitor => <Monitor key={monitor.id} monitor={monitor}/>)}
          </List>
        </nav>
      </Box>
    </div>
  )
}

export default MonitorsList;