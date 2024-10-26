import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Header } from "../components";
import { useEffect } from "react";
import { getOrderHistory } from "../slices/order.slice";
import { useDispatch, useSelector } from "react-redux";


const OrderHistory = () => {
  const { data} = useSelector(state => state.order);
  const dispatch = useDispatch();

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#FF890F';
      case 'ready':
        return '#FF0000';
      case 'delivered':
        return '#01C550'; 
      default:
        return 'black'; 
    }
  };

  const orders = data?.map(order => ({
    orderId: order.orderId,
    createdAt: order.createdAt,
    status: order.status,
    image: order.orderItems[0].pizzaImage,
    price: order.orderItems[0].pizzaPrice,
    name: order.orderItems[0].pizzaName,
    toppings: order.orderItems[0].toppings,
  }));

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        dispatch(getOrderHistory());
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
    fetchMenu();
  }, []);

  console.log(data);
  return (
    <>
    <Header />
    <Box sx={{
      padding: {
        sm: "20px 40px",
        md:"90px 120px"}, 
      background: "#FFF8F1",
      minHeight: "100vh"}}>
    <Typography
      variant="h5"
      gutterBottom
      sx={{
        color: "#00000080",
        fontSize: {xs:"25px", sm: "25px", md: "50px"},
        fontFamily: "Inter",
        fontWeight: 500,
      }}
    >
      Order History
    </Typography>
    <Grid container  spacing={{ xs: 2, sm: 3, md: 4 }}
    sx={{
          padding: {xs: "5px", sm: "5px", md:"20px"},
          margin: "0 auto",
        }}>
      {orders && orders.map((pizza, index) => (
        <Grid item  xs={12} sm={12} md={6} lg={4} key={index}>
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
                image={pizza.image}
                alt={pizza.name}
                sx={{ width: {xs:"200px", sm:"200px", md:"272px"}, objectFit: "cover" }}
              />
            </Box>
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Roboto",
                  fontSize:{xs:"20px", sm:"20px", md:"25px"},
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
                  fontSize: {sm:"10px", md:"15px"},
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
                      display: "flex",
                      alignItems: "flex-start",
                      marginTop: "10px",
                      color: "#01C550",
                      fontFamily: "Roboto",
                      fontSize: {xs:"30px", sm:"30px", md:"45px"},
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
                    <Typography
                    variant="subtitle1"
                    sx={{
                      marginTop: "10px",
                      color: getStatusColor(pizza.status),
                      fontFamily: "Roboto",
                      fontSize: "32px",
                      fontWeight: 700,
                      lineHeight: "44.55px",
                      letterSpacing: "0.03em",
                      textAlign: "left",
                      textTransform: "capitalize"
                    }}
                  >{pizza.status}</Typography>
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