import {ListItem, ListItemButton, ListItemText} from '@mui/material';
import generateCurl from '../utils/generateCurl';

export const Monitor = ({ monitor }) => {
  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary={generateCurl(monitor.monitor_key)} />
        </ListItemButton>
      </ListItem>
    </div>
  )
}