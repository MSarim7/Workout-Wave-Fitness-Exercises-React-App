import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  const [exercises, setExercises] = useState('all');
  const [bodyPart, setbodyPart] = useState([]);
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setbodyPart}
      />

      <Exercises 
        setExercises={setExercises} 
        bodyPart={bodyPart} 
        setBodyPart={setbodyPart}
      />
    </Box>
  )
}

export default Home
