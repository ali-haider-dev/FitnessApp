import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Banner from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", sm: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        p: "20px",
      }}
    >
      <Typography color="#FF2625" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { sm: "44px", xs: "40px" } }}
        mb={2}
      >
        Sweat , Smile <br /> and Repeat
      </Typography>
      <Typography fontSize={"22px"} lineHeight="35px" mb={4}>
        Checkout the most effective exercises
      </Typography>
      <Button variant="contained" color="error">
        Explore Exercies
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        fontSize={'200px'}
        sx={{ opacity: "0.1", display: { lg: "block", sm: "none" } }}
      >
        Exercises
      </Typography>
      <img src={Banner} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
