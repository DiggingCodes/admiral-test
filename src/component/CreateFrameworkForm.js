import { useState } from 'react'
import { Grid, Typography, CssBaseline, Box, Container } from '@mui/material'
import { CreateTextField, CreateButton } from './CreateFormFields'
import { globalObj } from './dummy'
import FormDialog from './PopUp'

export const CreateFrameworkForm = () => {
  const [formState, setFormState] = useState('signup')

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    // eslint-disable-next-line no-console
    if (formState === 'signup') {
      setFormState('vehicleInfo')
      updateGlobalObj(data, 'userInfo')
    }
    if (formState === 'vehicleInfo') {
      setFormState('amountInfo')
      updateGlobalObj(data, 'vehicleInfo')
    }
    if (formState === 'amountInfo') {
      setFormState('complete')
      updateGlobalObj(data, 'amountInfo')
    }
  }

  const updateGlobalObj = (data, type) => {
    for (const [key, val] of data.entries()) {
      const typeOf = globalObj[type]
      typeOf[key] = val
    }
  }

  return (

    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      >
        <Box component='form' noValidate sx={{ mt: 3 }} onSubmit={handleSubmit}>
        {
        formState === 'signup' &&
          <Grid container spacing={2}>
            <CreateTextField id='email' label='Email Address' />
            <CreateTextField id='cEmail' label='Confirm Email' />
            <Typography href='#' variant='body2' justifyContent='flex-end'>
              *Any discounts or promotional codes will be applied at the end of the quote.*
            </Typography>
            <CreateButton/>
          </Grid>
        }
          {
          formState === 'vehicleInfo' &&
            <Grid container spacing={2}>
              <CreateTextField id='vehicleType' label='Vehicle Type' />
              <CreateTextField id='registrationNo' label='Registration No' />
              <CreateTextField id='modelNo' label='Model No' />
              <CreateTextField id='brandName' label='Brand Name' />
              <CreateTextField id='insuredAmount' label='Insured Amount' />
              <CreateButton/>
            </Grid>
        }
          {
          formState === 'amountInfo' &&
            <Grid container spacing={2}>
              <CreateTextField id='total' label='Total' disabled value={globalObj.vehicleInfo.insuredAmount} />
              <CreateTextField id='discountCode' label='Enter Discount Coupon' />
              <CreateTextField id='tax' label='Tax' disabled value={globalObj.amountInfo.tax} />
              <CreateTextField id='totalAmount' label='Final Amount' disabled value={Number(globalObj.vehicleInfo.insuredAmount * globalObj.amountInfo.tax / 100)} />
              <CreateButton/>
            </Grid>
        }
        {
          formState === 'complete' && <FormDialog />
        }
          
        </Box>
      </Box>

    </Container>
  )
}
