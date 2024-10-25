import { Search } from "@mui/icons-material"
import { Box, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import hero_picture from "../assets/hero-img.png";
import leave from "../assets/hero-leave.png";
import styled from "@emotion/styled";

const LeaveImage = styled.img`
  width: 250px;
  transform: translateX(80px) translateY(20px);

  @media (max-width: 960px) {
    width: 100px;
    transform: translateX(0px) translateY(10px);
  }
`;

const StyledImage = styled.img`
  width: 800px;
  transform: translateX(160px) translateY(-400px) rotate(90deg);

  @media (max-width: 960px) {
    width: 400px;
    transform: translateX(5px) translateY(-150px) rotate(90deg);

  }
`;

// params: {
//   search: search || undefined,
// },

const Hero = ({search, setSearch}) => {
  
  return (
    <Box 
    sx={{
        paddingLeft: {
          xs: '20px',
          sm: '40px',
          md: '40px',
          lg: '40px',
          xl: '100px',
        },
        height: {xs: "", sm:"", md:"80vh"},
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #FFC993 76%, #FFF8F1 100%)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
      }}>
        <Box
        sx={{
            width: {xs:"260px", sm:"260px", md:"766px"},
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
        }}
        >
        <Typography
          sx={{
            fontWeight: 700,
            fontFamily: "Inter",
            fontSize: {xs: "40px", sm: "40px", md: "150px"},
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
          sx={{fontSize: {xs: "10px", sm: "10px", md: "25px"}, fontFamily: "Robot", fontWeight: 400 }}
        >
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without.
        </Typography>

        <TextField
          placeholder="Search for pizza"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            "& .MuiInputBase-root": {
              marginTop: {xs: "25px", sm: "25px", md:"50px"},
              width: {xs: "260px", sm: "260px", md: "748px"},
              height: {xs: "57px", sm: "57px", md: "118px"},
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
                    width : {xs: "52px", sm: "52px", md: "106px"},
                    height: {xs: "52px", sm: "52px", md: "106px"},
                    backgroundColor: "#FF890F",
                    borderRadius: "50%",
                    padding: "14px",
                    marginRight: "-8px",
                  }}
                >
                  <Search sx={{ fontSize: {xs: 25, sm: 25, md:50}, color: "white" }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        </Box>

        <Box
        sx={{
            width: {xs:"260px", sm:"260px", md:"766px"},
            height: {xs: "255px", sm: "255px", md: "505px"},
            alignSelf: "flex-end",
            overflow: "hidden",
        }}
        >
            <LeaveImage
              src={leave}
              alt="leave"
            />
            <StyledImage
              src={hero_picture}
              alt="Pizza"
            />
        </Box>
    </Box>
  )
}

export default Hero