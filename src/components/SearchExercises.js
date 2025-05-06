import React,{useEffect,useState }from 'react'
import { Box, Button,Stack,Typography,TextField } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';



const SearchExercises = ({bodyPart, setBodyPart,setExercises}) => {
  const [search, setSreach] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  useEffect(() => {
    const fetchExercisesData = async() => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
        ,exerciseOptions);

        setBodyParts(["all", ...bodyPartsData]);
    }
    fetchExercisesData();
  },[])

  const handleSearch = async() =>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises'
        ,exerciseOptions
      );
      console.log(exercisesData)
      const SearchedExercises = exercisesData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search) 
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSreach('');
      setExercises(SearchedExercises);
    }
  }

  return (
    <Stack alignItems='center' mt='37 px'
      justifyContent='center' p='20px'>
        <Typography fontWeight={700} sx={{
            fontSize:{lg:'44px',xs:'30px'}}}
            mb='50px' textAlign='center'>
          Awesome Exercises You <br/> 
          Should Know
        </Typography>

        <Box position='relative' mb='72px'>
          <TextField 
            sx={{
              input:{fontWeight:'700', border:'none', borderRadius:'4px #ff2625'},
              width :{lg:'800px',xs:'350px'},
              backgroundColor:'white',
              borderRadius:'40px'
            }}
            height='76px'
            value={search}
            onChange={(e) => setSreach(e.target.value.toLowerCase())}
            placeholder='Search Exercises'
            type='text'/>

            <Button className="search-btn" 
              sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', 
              width: { lg: '173px', xs: '80px' }, height: '56px', 
              position: 'absolute', right: '0px', 
              fontSize: { lg: '20px', xs: '14px' }}}
              onClick={handleSearch}
                >
                Search
            </Button>
 
        </Box>
        <Box sx={{ position: 'relative', width: '90%', p: '20px', overflowX: 'hidden' }}>
  <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
</Box>
      </Stack>
  )
}

export default SearchExercises
