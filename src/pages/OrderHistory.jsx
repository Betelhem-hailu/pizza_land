import hero_picture from "../assets/hero-img.png";
import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Header } from "../components";

const pizzas = [
    {
      id: 1,
      name: "Margherita",
      price: "150",
      toppings: "Tomato, Mozzarella, Bell Peppers, Onions, Olives",
      image: "pizza_image_url",
      restaurantName: "Pizza Palace",
      restaurantImage: "https://your-avatar-url.com",
    },
    // Add more pizzas here
  ];

const OrderHistory = () => {
  return (
    <>
    <Header />
    <Box sx={{padding: "90px 120px", background: "#FFF8F1"}}>
    <Typography
      variant="h5"
      gutterBottom
      style={{
        color: "#00000080",
        fontSize: "50px",
        fontFamily: "Inter",
        marginTop: "20px",
        fontWeight: 500,
      }}
    >
      Order History
    </Typography>
    <Grid container spacing={2}>
      {pizzas.map((pizza, index) => (
        <Grid item xs={12} sm={4} key={index}>
          <Card
            sx={{
              backgroundColor: "#FFFFFF",
              width: "387px",
              height: "526px",
              padding: "30px",
              gap: "15px",
              borderRadius: "25px",
              boxShadow: "none",
            }}
          >
            <Box
              sx={{
                width: "318px",
                height: "318px",
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
                  textAlign: "center",
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
                  textAlign: "center",
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
                    justifyContent: "space-between",
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
                    <Typography
                    variant="subtitle1"
                    sx={{
                      marginTop: "10px",
                      color: "#FF890F",
                      fontFamily: "Roboto",
                      fontSize: "32px",
                      fontWeight: 700,
                      lineHeight: "44.55px",
                      letterSpacing: "0.03em",
                      textAlign: "left",
                    }}
                  >Ordered</Typography>
                </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
  </>
  )
}

export default OrderHistory