import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercise from '../components/SimilarExercise'
import { exerciseOptions, fetchData, YoutubeOptions } from '../utils/fetchData'

const ExerciseDetails = () => {
const [exerciseDetail, setExerciseDetail] = useState({})
const [targetMuscleDetail, setTargetMuscleDetail] = useState([])
const [equipmentDetail,setEquipmentDetail] = useState([])
const [videoDetail, setVideoDetail] = useState([])

const {id} = useParams();
useEffect(() => {
  const fetchExerciseDetail = async()=>{
  const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
  const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'
  const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
  setExerciseDetail(exerciseDetailData)
  const exerciseVideoData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,YoutubeOptions)
  setVideoDetail(exerciseVideoData.contents)
  const targetMuscleData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,exerciseOptions)
setTargetMuscleDetail(targetMuscleData)
const equipmentData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,exerciseOptions)
setEquipmentDetail(equipmentData)
}
  fetchExerciseDetail();
}, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={videoDetail} name={exerciseDetail.name}/>
      <SimilarExercise targetMuscle={targetMuscleDetail} equipmentExercises={equipmentDetail}/>
    </Box>
  )
}

export default ExerciseDetails