import React, { useContext } from 'react';
import { Box,Typography } from '@mui/material';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import BodyPart from './BodyPart';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <Typography
        onClick={() => scrollPrev()}
        className="left-arrow"
        sx={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          cursor: 'pointer',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '50%',
          padding: '5px',
        }}
      >
        <img src={LeftArrowIcon} alt="left-arrow" style={{ width: '20px', height: '20px' }} />
      </Typography>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <Typography
        onClick={() => scrollNext()}
        className="right-arrow"
        sx={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          cursor: 'pointer',
          background: 'rgba(255, 255, 255, 0.7)',
          borderRadius: '50%',
          padding: '5px',
        }}
      >
        <img src={RightArrowIcon} alt="right-arrow" style={{ width: '20px', height: '20px' }} />
      </Typography>
    );
  };
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} >
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;