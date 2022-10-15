import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollBar from './HorizontalScrollBar'
import Loader from './Loader'
const SimilarExercise = ({targetMuscle,equipmentExercises}) => {
    
  return (
    <Box sx={{mt:{lg:'100px',xs:'0'}}}>
        <Typography variant='h3' mb={'33px'}>Exercises that target the same muscle group</Typography>
        <Stack flexDirection={'row'} sx={{p:2,position:'relative'}}> 
        {targetMuscle.length ? < HorizontalScrollBar data={targetMuscle}/>: <Loader/>}
        </Stack>
        <Typography variant='h3' mb={'33px'}>Exercises that uses the same Equipment group</Typography>
        <Stack flexDirection={'row'} sx={{p:2,position:'relative'}}> 
        {equipmentExercises.length ? < HorizontalScrollBar data={equipmentExercises}/>: <Loader/>}
        </Stack>
    </Box>
  )
}

export default SimilarExercise