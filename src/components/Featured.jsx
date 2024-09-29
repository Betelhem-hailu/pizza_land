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
      style={{
        padding: "0px 120px",
      }}
    >
      <Typography
        style={{
          color: "#00000080",
          fontSize: "50px",
          fontFamily: "Inter",
          marginTop: "20px",
        }}
      >
        Featured pizza
      </Typography>
      <Grid container justifyContent="center" style={{ marginTop: "2rem" }}>
        <Grid item >
          <Card
            style={{
              display: "flex",
              position: "relative",
              backgroundColor: "#2F2F2F",
              width: "1266px",
              height: "386px",
              borderRadius: "40px",
            }}
          >
            <CardContent style={{ flex: 1, padding: "70px 40px" }}>
              <Typography variant="h4" component="h2" gutterBottom sx={{
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "45px",
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
                fontSize: "16px",
                fontFamily: "Roboto",
              }}>
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.
              </Typography>
              <Button
                fullWidth
                variant="contained"
                style={{ marginTop: '20px', backgroundColor: "#FFA500",width: "250px", height: "60px", fontSize: "24px", fontFamily: "Roboto", fontWeight: 700, textTransform: "capitalize" }}
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
