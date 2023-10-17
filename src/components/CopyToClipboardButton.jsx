import { Button, Snackbar } from '@mui/material'
import { useState } from 'react'

const CopyToClipboardButton = ({ wrapper, handleCopy }) => {
  const [open, setOpen] = useState(false);

  const onClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(wrapper);
  }
  
  return (
    <>
      <Button onClick={onClick}>Copy</Button>
      <Snackbar
        open={open}
        onClose={() => {
          setOpen(false);
          handleCopy();
        }}
        autoHideDuration={500}
        message="Copied to clipboard"
      />
    </>
  )
}

export default CopyToClipboardButton;