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

const Popular = () => {
  return (
    <Box
      style={{
        padding: "89px 77px",
        backgroundColor: "#FFF8F1",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        style={{
          color: "#00000080",
          fontSize: "50px",
          fontFamily: "Inter",
          marginTop: "20px",
        }}
      >
        Popular Pizzas
      </Typography>
      <Grid
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
      </Grid>
    </Box>
  );
};

export default Popular;
