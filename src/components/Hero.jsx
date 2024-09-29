import { Search } from "@mui/icons-material";
import {
  Grid,
  Typography,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import hero_picture from "../assets/hero-img.png";
import leave from "../assets/hero-leave.png";

const Hero = () => {
  return (
    <Grid
      container
      alignItems="center"
      style={{
        padding: "0px 85px",
        height: "100vh",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFC993 76%, #FFF8F1 100%)",
      }}
    >
      <Grid item xs={12} md={6} style={{ transform: "translateY(-250px)"}}>
        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: "Inter",
            fontSize: "150px",
            background:
              "linear-gradient(90.23deg, #FF8100 -2.97%, #FFBE71 93.66%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            WebkitTextFillColor: "transparent",
          }}
        >
          Order us
        </Typography>

        <Typography
          sx={{ fontSize: "25px", fontFamily: "Robot", fontWeight: 400 }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without.
        </Typography>

        <TextField
          placeholder="Search for pizza"
          sx={{
            "& .MuiInputBase-root": {
              marginTop: "50px",
              width: "748px",
              height: "118px",
              padding: "12px 12px",
              backgroundColor: "white",
              borderRadius: "100px",
              boxShadow: "0px 5px 50px 0px #00000026",
              "& input": {
                color: "#000",
                padding: "5px",
                fontSize: "16px",
              },
              "& fieldset": {
                border: "none",
              },
            },
            "& .MuiOutlinedInput-root": {
              "&:hover fieldset": {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  sx={{
                    width: "106px",
                    height: "106px",
                    backgroundColor: "#FF890F",
                    borderRadius: "50%",
                    padding: "14px",
                    marginRight: "-8px",
                  }}
                >
                  <Search sx={{ fontSize: 50, color: "white" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Grid container 
        style={{  }}
        >
          <Grid item >
            <img
              src={leave}
              alt="leave"
              style={{
                width: "250px",
                transform: "translateX(200px) translateY(100px)",
              }}
            />
          </Grid>
          <Grid item>
            <img
              src={hero_picture}
              alt="Pizza"
              style={{
                width: "900px",
                transform: "translateX(280px) translateY(-320px) rotate(90deg)",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
