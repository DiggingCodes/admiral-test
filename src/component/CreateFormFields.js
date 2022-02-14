import {TextField, Grid, Button} from '@mui/material'

export const CreateTextField = ({ id, label, disabled, value }) => {
  return (
    <Grid item xs={12} >
      <TextField
        required={!value}
        fullWidth
        id={id}
        label={value || label}
        name={id}
        autoComplete={id}
        disabled={disabled}
      />
    </Grid>
  )
}

export const CreateButton = ()=>{
  return(
    <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
      Get Insured
    </Button>
  )
}
