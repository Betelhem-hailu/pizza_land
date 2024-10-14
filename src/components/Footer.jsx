import {
  Typography,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Link,
  Avatar,
} from "@mui/material";
import { Facebook, Twitter, Send, LinkedIn, YouTube } from "@mui/icons-material";
import PizzaLogo from "../assets/pizza-logo.png";

const Footer = () => {
  return (
    <Box component="footer" color="black">
      <Box
        component="footer"
        sx={{
          backgroundColor: "#d1b892",
          color: "#000",
          // padding: 5,
          padding: {xs: "20px 35px", sm: "20px 35px", md: "20px 35px"},
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left Section */}

        {/* Middle Links */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          <Link href="#" color="inherit" underline="none"
          sx={{
            fontFamily: "Inter",
            fontSize: { sm:"15px", md:"25px"},
            fontWeight: 600,
            lineHeight: "36.17px",
            letterSpacing: "0.03em",
            textAlign: "left",
          }}>
            Home
          </Link>
          <Link href="#" color="inherit" underline="none"
          sx={{
            fontFamily: "Inter",
            fontSize: { sm:"15px", md:"25px"},
            fontWeight: 600,
            lineHeight: "36.17px",
            letterSpacing: "0.03em",
            textAlign: "left",
          }}>
            Order
          </Link>
          <Link href="#" color="inherit" underline="none" 
          sx={{
            fontFamily: "Inter",
            fontSize: { sm:"15px", md:"25px"},
            fontWeight: 600,
            lineHeight: "36.17px",
            letterSpacing: "0.03em",
            textAlign: "left",
          }}>
            About Us
          </Link>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center",  marginBottom: "15px" }}>
            <Avatar
              variant="square"
              src={PizzaLogo}
              sx={{ width: {sm:25, md:50}, height: {sm:25, md:50} }}
            />
            <Typography variant="h6" component="div" color="#AF5901"
            sx={{ fontWeight: "600", fontSize:"20px", marginLeft: "10px" }}>
              Pizza
            </Typography>
          </Box>
          <TextField
            variant="outlined"
            placeholder="Your feedback..."
            sx={{
              "& .MuiInputBase-root": {
              backgroundColor: "#fff",
              borderRadius: 5,
              width: {sm: "206px", md:"423px"},
              height: "60px",
              minWidth: 250,
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
            }}
          }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" >
                    <Send sx={{ fontSize: 25, color: "#FF890F" }} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      <Box sx={{
        backgroundColor: "#000000",
        color: "#ffffff",
        padding: 5,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {xs:"column", sm: "column", md:"row" }
      }}>
        <Box sx={{
          display: "flex",
          alignItems: "center",
          gap: 5,
          flexDirection: {xs:"column",sm: "column", md:"row" }
        }}>
        <Typography variant="body1">
          © 2024 Pizza All Rights Reserved.
        </Typography>
        <Typography variant="body1">Terms & Conditions</Typography>
        </Box>
        <Box display="flex" justifyContent="center" mt={2} sx={{gap: "10px"}}>
          <Box sx={{width: "52px", height: "52px", backgroundColor: "#141414", borderRadius: "100px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Facebook sx={{fontSize: "24px"}} />
          </Box>
          <Box sx={{width: "52px", height: "52px", backgroundColor: "#141414", borderRadius: "100px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <LinkedIn sx={{fontSize: "24px"}} />
          </Box>
          <Box sx={{width: "52px", height: "52px", backgroundColor: "#141414", borderRadius: "100px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <Twitter sx={{fontSize: "24px"}} />
          </Box>
          <Box sx={{width: "52px", height: "52px", backgroundColor: "#141414", borderRadius: "100px", display: "flex", justifyContent: "center", alignItems: "center"}}>
          <YouTube sx={{fontSize: "24px"}} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
