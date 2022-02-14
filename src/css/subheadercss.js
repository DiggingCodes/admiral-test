import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => {
  return {
    color: {
      backgroundColor: '#151a4f'
    },

    subheader: {
      maxWidth: '1585px',
      paddingTop: '10px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '41px'
    },

    backArrow: {
      paddingLeft: '30px'
    },
    subHeader: {
      height: '68px',
      backgroundColor: '#151a4f',
      display: 'flex',
      alignItems: 'center'
    },
    subheaderTitle: {
      position: 'relative',
      right: '20px',
      margin: 'auto',
      fontSize: '28px',
      fontWeight: '300',
      color: '#ffff',
      letterSpacing: '-0.88px'
    },
    iconImg: {
      height: '60px',
      padding: '15px 15px',
      fontSize: '18px',
      lineHeight: '20px',
      float: 'left'
    }

  }
})
