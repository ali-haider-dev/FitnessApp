import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Logo from '../assets/images/Logo-1.png'
const Footer = () => {
  return (
    <Box mt='88px' bgcolor={'#fff3f4'}>
<Stack gap='40px' pt='24px' px='40px' alignItems={'center'}>
<img src={Logo} alt='Logo' width={'200px'} height='40px'/>
<Typography variant='h5' pb='40px' mt='20px'>Made By <span style={{ color:'#FF2625',fontWeight:'700'}}>Unknown Developers</span></Typography>
</Stack>

    </Box>
  )
}

export default Footer