import { useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import { CreateFrameworkForm } from './CreateFrameworkForm'

export default function FormDialog () {
  const [open, setOpen] = useState(true)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
    {!open ? <CreateFrameworkForm/> 
     : <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Payment confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Your payment is confirmed, please refer the payment id ######
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
    }
    </>
  )
}
