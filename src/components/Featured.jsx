import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardContent,
  Typography,
  Button,
  CardMedia,
  Box,
} from "@mui/material";
import cardImage from "../assets/feat-img.png";
import cardImage2 from "../assets/hero-img.png";
import cardImage3 from "../assets/cardImage3.png";
import Slider from "react-slick";

const Features = [
  {
    title: "Make Your First Order and Get",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.",
    image: cardImage,
    bgColor: "#2F2F2F",
  },
  {
    title: "Make Your First Order and Get",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.",
    image: cardImage2,
    bgColor: "#50482B",
  },
  {
    title: "Make Your First Order and Get",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.",
    image: cardImage3,
    bgColor: "#296D60",
  }
];

const Featured = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <Box
      sx={{
        padding: {
          xs: "0px 20px",
          sm: "0px 40px",
          md: "0px 40px",
          lg: "0px 40px",
          xl: "0px 100px",
        },
      }}
    >
      <Typography
        sx={{
          color: "#00000080",
          fontSize: { xs: "25px", sm: "25px", md: "50px" },
          fontFamily: "Inter",
          marginTop: "20px",
        }}
      >
        Featured pizza
      </Typography>

      <Box style={{ marginTop: "2rem" }}>
          <Slider {...settings}>
            {Features.map((feature, index) => (
              <Box key={index} sx={{px: {xs:"5px", md:"10px"}}}>
              <Card
                
                sx={{
                  width: "100%",
                  display: "flex",
                  position: "relative",
                  backgroundColor: `${feature.bgColor}`,
                  height: {xs:"200px" ,sm: "200px", md:"386px"},
                  borderRadius: "40px",
                }}
              >
                <CardContent sx={{flex: {xs:0.8 ,md:1} , width: "50%", padding: { xs: "30px", sm: "30px", md: "70px 40px" }}}>
                  <Typography variant="h4" component="h2" gutterBottom sx={{
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: { xs: "15px", sm: "15px", md: "45px" },
                    fontFamily: "Roboto",
                  }}>
                    {feature.title}
                    <span style={{ color: "orange" }}>50% Off</span>
                  </Typography>
                  <Typography variant="body1" gutterBottom sx={{
                    color: "#ffffff",
                    fontWeight: 400,
                    fontSize: { xs: "8px", sm: "8px", md: "16px" },
                    fontFamily: "Roboto",
                  }}>
                    {feature.description}
                  </Typography>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      marginTop: '20px',
                      backgroundColor: "#FFA500",
                      width: { xs: "80px", sm: "80px", md: "250px" },
                      height: { xs: "33px", sm: "33px", md: "60px" },
                      fontSize: { xs: "10px", sm: "10px", md: "24px" },
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      textTransform: "capitalize",
                    }}
                  >
                    Order Now
                  </Button>
                </CardContent>
                <CardMedia
                  component="img"
                  image={feature.image}
                  alt="Featured Pizza"
                  style={{width: {xs:"800px" ,md:"50%"}, objectFit: "cover", marginRight: "-130px"}}
                />
              </Card>
              </Box>
            ))}
          </Slider>
      </Box>
    </Box>
  );
};

export default Featured;
