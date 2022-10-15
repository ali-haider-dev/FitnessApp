import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({exercise }) => {
  console.log('exercise',exercise);
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction={"row"} justifyContent={"center"}>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            fontSize: "14px",
            background: "#ffa9a9",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            fontSize: "14px",
            background: "#fcc757",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight={"bold"}
        fontSize={"24px"}
        pb="10px"
        textTransform={"capitalize"}
        mt="11x"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
