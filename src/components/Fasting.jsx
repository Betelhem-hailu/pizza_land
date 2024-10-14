import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Divider,
  Avatar,
} from "@mui/material";
import hero_picture from "../assets/hero-img.png";
import { useNavigate } from "react-router-dom";

const pizzas = [
  {
    id: 1,
    name: "Margherita",
    price: "150",
    toppings: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
    image: "pizza_image_url",
    restaurantName: "Pizza Palace",
    restaurantImage: "https://your-avatar-url.com"
  },
  // Add more pizzas here
];

const Fasting = () => {
  const navigate = useNavigate();
  return (
    <Box
    sx={{
      padding: {
        xs: "0px 20px",   // padding for extra small screens (mobile)
        sm: "0px 40px",   // padding for small screens (small tablets)
        md: "0px 40px",   // padding for medium screens (tablets)
        lg: "89px 77px",   // padding for large screens (laptops and desktops)
        xl: "89px 77px",  // padding for extra large screens
      },
      backgroundColor: "#FFF8F1",
    }}
    >
      <Typography
        variant="h5"
        gutterBottom
        style={{
          color: "#00000080",
          fontSize: {xs:"25px", sm: "25px", md: "50px"},
          fontFamily: "Inter",
        }}
      >
        Fasting
      </Typography>

      {/* <Grid
        container
        spacing={3}
        sx={{
          padding: "20px",
          margin: "0 auto",
        }}
      >
        {pizzas.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza.id}>
            <Card
              sx={{
                backgroundColor: "#FFFFFF",
                width: "387px",
                height: "621px",
                padding: "30px",
                gap: "15px",
                borderRadius: "25px",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: "318",
                  height: "318",
                  backgroundColor: "#EA810033",
                  borderRadius: "100%",
                }}
              >
                <CardMedia
                  component="img"
                  image={hero_picture}
                  alt={pizza.name}
                  style={{ width: "100%" }}
                />
              </Box>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "25px",
                    fontWeight: 700,
                    lineHeight: "23.67px",
                    letterSpacing: "0.03em",
                    textAlign: "left",
                  }}
                >
                  {pizza.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "14.2px",
                    letterSpacing: "0.03em",
                    textAlign: "left",
                    color: "#000000BF",
                    marginTop: "10px",
                  }}
                >
                  {pizza.toppings}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    margin: "auto",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginTop: "10px",
                      color: "#01C550",
                      fontFamily: "Roboto",
                      fontSize: "45px",
                      fontWeight: 700,
                      lineHeight: "44.55px",
                      letterSpacing: "0.03em",
                      textAlign: "left",
                    }}
                  >
                    {pizza.price}
                    <span
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: 400,
                      }}
                    >
                      Birr
                    </span>
                  </Typography>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    style={{
                      marginTop: "20px",
                      width: "188px",
                      height: "66px",
                      backgroundColor: "#FF890F",
                      fontSize: "24px",
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      textTransform: "capitalize",
                      borderRadius: "10px"
                    }}
                  >
                    Order
                  </Button>
                </Box>
                <Divider  flexItem />
                <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "10px",
                  gap: "30px",
                }}>
                <Avatar
                      src={pizza.restaurantImage}
                      alt={pizza.restaurantName}
                      sx={{ width: 50, height: 50 }}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "Roboto",
                        fontSize: "20px",
                        fontWeight: 700,
                        lineHeight: "18.94px",
                        letterSpacing: "0.03em",
                        textAlign: "left",
                      }}
                    >
                      {pizza.restaurantName}
                    </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          padding: {xs: "5px", sm: "5px", md:"20px"},
          margin: "0 auto",
        }}
      >
        {pizzas.map((pizza) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={pizza.id}>
            <Card
              sx={{
                backgroundColor: "#FFFFFF",
                maxWidth: "387px",
                height: "auto",
                padding: "30px",
                gap: "15px",
                borderRadius: "25px",
                boxShadow: "none",
              }}
            >
              <Box
                sx={{
                  width: {xs:"233px" ,sm:"233px", md:"318px"},
                  height: {xs:"233px" ,sm: "233px", md:"318px"},
                  backgroundColor: "#EA810033",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardMedia
                  component="img"
                  image={hero_picture}
                  alt={pizza.name}
                  sx={{ width: {xs:"200px", sm:"200px", md:"272px"}, objectFit: "cover" }}
                />
              </Box>
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "25px",
                    fontWeight: 700,
                    lineHeight: "23.67px",
                    letterSpacing: "0.03em",
                    textAlign: "left",
                  }}
                >
                  {pizza.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: "15px",
                    fontWeight: 400,
                    lineHeight: "14.2px",
                    letterSpacing: "0.03em",
                    textAlign: "left",
                    color: "#000000BF",
                    marginTop: "10px",
                  }}
                >
                  {pizza.toppings}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    margin: "auto",
                    marginBottom: "10px",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      marginTop: "10px",
                      color: "#01C550",
                      fontFamily: "Roboto",
                      fontSize: "45px",
                      fontWeight: 700,
                      lineHeight: "44.55px",
                      letterSpacing: "0.03em",
                      textAlign: "left",
                    }}
                  >
                    {pizza.price}
                    <span
                      style={{
                        color: "#000",
                        fontSize: "15px",
                        fontWeight: 400,
                        alignSelf: "flex-start",
                        lineHeight: "1",
                      }}
                    >
                      Birr
                    </span>
                  </Typography>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      marginTop: "20px",
                      width: {sm: "169px" ,md:"188px"},
                      height: {sm: "56px", md:"66px"},
                      backgroundColor: "#FF890F",
                      fontSize: "24px",
                      fontFamily: "Roboto",
                      fontWeight: 700,
                      textTransform: "capitalize",
                      borderRadius: "10px",
                    }}
                    onClick={() => {
                      navigate("/pizzaorder", {state:{ id: pizza.id }});
                    }}
                  >
                    Order
                  </Button>
                </Box>
                <Divider flexItem />
                <Box
                  key={pizza.id}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "10px",
                    gap: "30px",
                  }}
                >
                  <Avatar
                    src={hero_picture}
                    alt={pizza.name}
                    sx={{ width: 50, height: 50 }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "20px",
                      fontWeight: 700,
                      lineHeight: "18.94px",
                      letterSpacing: "0.03em",
                      textAlign: "left",
                    }}
                  >
                    {pizza.restaurantName}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
};

export default Fasting;
