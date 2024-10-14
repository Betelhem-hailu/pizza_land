import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
} from "@mui/material";
import cardImage from "../assets/feat-img.png";

const Featured = () => {
  return (
    <Box
      sx={{
        padding: {
          xs: "0px 20px",   // padding for extra small screens (mobile)
          sm: "0px 40px",   // padding for small screens (small tablets)
          md: "0px 40px",   // padding for medium screens (tablets)
          lg: "0px 40px",   // padding for large screens (laptops and desktops)
          xl: "0px 100px",  // padding for extra large screens
        },
      }}
    >
      <Typography
        sx={{
          color: "#00000080",
          fontSize: {xs:"25px", sm: "25px", md: "50px"},
          fontFamily: "Inter",
          marginTop: "20px",
        }}
      >
        Featured pizza
      </Typography>

      <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
        <Grid item >
          <Card
            sx={{
              display: "flex",
              position: "relative",
              backgroundColor: "#2F2F2F",
              width: {xs:"auto" ,sm:"auto", md:"1266px"},
              height: {xs:"205px" ,sm: "205px", md:"386px"},
              borderRadius: "40px",
            }}
          >
            <CardContent sx={{ flex: 1, padding: {xs: "30px", sm: "30px", md:"70px 40px" }}}>
              <Typography variant="h4" component="h2" gutterBottom sx={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: {xs:"15px", sm:"15px", md:"45px"},
                fontFamily: "Roboto"
              }}
              >
                Make Your First Order and Get{" "}
                <span style={{ color: "orange" }}>50% Off</span>
              </Typography>
              <Typography variant="body1" gutterBottom 
              sx={{
                color: "#ffffff",
                fontWeight: 400,
                fontSize: {xs:"8px", sm:"8px", md:"16px"},
                fontFamily: "Roboto",
              }}>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                sx={{ marginTop: '20px', backgroundColor: "#FFA500",width: {xs:"80px", sm:"80px", md:"250px"}, height: {xs:"33px", sm:"33px", md:"60px"}, fontSize: {xs:"10px", sm:"10px", md:"24px"}, fontFamily: "Roboto", fontWeight: 700, textTransform: "capitalize" }}
              >
               Order Now
              </Button>
            </CardContent>

            <CardMedia
              component="img"
              image={cardImage}
              alt="Featured Pizza"
              style={{ width: "50%", marginRight:"-100px" }}
            />
          </Card>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Featured;
