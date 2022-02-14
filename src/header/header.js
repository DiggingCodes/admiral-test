import React from 'react'
import { Grid } from '@mui/material'
import { useStyles } from '../css/subheadercss'
import icon from '../img/logo.png'

const Header = ({ title }) => {
  const { classes } = useStyles()
  return (
    <Grid className={`${classes.color} ${classes.subHeader}`}>
      <div className={classes.backArrow}>
        <img src={icon} alt='Logo' className={classes.iconImg} />
      </div>
    </Grid>
  )
}

export default Header
