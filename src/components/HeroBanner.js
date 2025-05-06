import React from 'react'
import { Box,Typography,Button,Stack} from '@mui/material'
import HeroBannerImage from '../assets/images/banner.jpg'
const HeroBanner = () => {
  return (
    <Box sx={{
        mt: { lg: '180px', xs: '60px'},
        ml: { sm: '50px'} 
        }} position='relative' p='20px'>

        <Typography color = '#ff2625' 
            fontWeight='600' fontSize='26px'>
                Fitness Club
        </Typography>

        <Typography fontWeight='700' fontSize='50px'
            sx={{fontSize:{lg:'44px',xs:'40px'}}}
            mb="23px" mt="30px">
                Work, Win <br/>and Rewind
        </Typography>

        <Typography fontSize='22px' lineHeight='35px'
            mb={2}>
                Check out the most effective exercise <br/> 
                personalized for you
        </Typography>

        {/* <Button variant="contained" color='error' 
            href='#exercises' sx={{backgroundColor:'#ff2625'
            ,padding:'10px'
            }}>
                Explore Exercise
        </Button> */}
        <Stack>
            <Button href="#exercises" style={{ marginTop: '20px', 
                width: '200px', 
                textAlign: 'center', background: '#FF2625', 
                padding: '10px', fontSize: '18px', textTransform: 'none', 
                color: 'white', borderRadius: '4px' }}  className='exercise-btn'>
                    Explore Exercises
            </Button>
        </Stack> 

        <Typography fontWeight={600} color="#FF2625" 
            sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, 
            fontSize: '200px' }}>
                Exercise
        </Typography>


        <img src={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner
 