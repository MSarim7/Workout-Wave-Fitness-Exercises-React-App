import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      className="bodyPart-card"
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: { xs: '130px', sm: '160px', md: '218px' }, // Adjusted for medium screens
        height: { xs: '140px', sm: '170px', md: '220px' },
        cursor: 'pointer',
        gap: '30px', 
        pointerEvents: 'auto',
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
  
    >
      <img src={Icon} alt="dumbell" style={{ width: '40px', height: '40px' }} /> 
      <Typography fontSize="21px" fontWeight='bold' 
         color="#3A1212" 
        textTransform="capitalize"> 
          {item}
      </Typography>

    </Stack>  
  );
};  

export default BodyPart;  