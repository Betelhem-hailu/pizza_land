import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Grid2,
  InputAdornment,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import hero_picture from "../assets/hero-img.png";
import cardImage from "../assets/feat-img.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux";
import { getAllMenus, getMenuById } from "../slices/menu.slice";
import { useLocation } from "react-router-dom";
import { placeOrder } from "../slices/order.slice";

const PizzaOrder = () => {
  const location = useLocation();
  const pizzaId = location.state?.id;
  const [open, setOpen] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(""); 
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [toppingState, setToppingState] = useState({});

  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { menuData } = useSelector(state=> state.menu);

  useEffect(()=>{
    const fetchMenuID = async (pizzaId) => {
      try {
        const response = await dispatch(getMenuById(pizzaId));
        setSelectedPizza(response.payload);
      }  catch (error) {
        console.error("Error fetching pizza details:", error);
      }
    }
    fetchMenuID(pizzaId);
  },[pizzaId, dispatch]);

  useEffect(() => {
    if (selectedPizza) {
      console.log(selectedPizza);
      // Initialize permissions state based on available toppings
      const toppingState = selectedPizza.Toppings.reduce((acc, topping) => {
        acc[topping.MenuToppings.toppingId] = true; // Set all permissions to true initially
        return acc;
      }, {});
      setToppingState(toppingState);
    }
  }, []);

  const handleChange = (event) => {
    const { name, checked } = event.target;
    setToppingState((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        dispatch(getAllMenus());
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, []);

  const handleImageClick = (newImage, direction) => {
    setIsAnimating(true); // Trigger the animation
    setAnimationDirection(direction); // Set animation direction (left or right)

    setTimeout(() => {
      // setBigImage(newImage); // Update the big image after the animation finishes
      setIsAnimating(false); // Reset the animation state
    }, 500); // Delay for the animation duration
  };

  const handleQuantityChange = (action) => {
    if (action === "add") {
      setQuantity(quantity + 1);
    } else if (action === "subtract" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const orderPizza = async () => {
    if (!selectedPizza) return;

    const selectedToppingIds = Object.keys(toppingState).filter(
      (topId) => toppingState[topId] === true
    );

    const orderData = {
      restaurantId : selectedPizza.restaurantId,
      menuItems: [
        {
          menuId: selectedPizza.id, 
          quantity: quantity,
          toppings: selectedToppingIds,
        },
      ],
    };

    // console.log(orderData);

    try {
      dispatch(placeOrder(orderData))
      setOpen(true); 
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: "#f9f9f9" }}>
      {selectedPizza && (
      <Box sx={{ display: "flex", gap: "70px", alignItems: "center", flexDirection: {xs:"column", sm:"column", md:"row"} }}>
        <Box 
        sx={{ 
          width: {xs: "384px", sm:"384px" ,md:"748px"}, 
          height: {xs: "250px", sm:"250px", md:"500px"} 
        }}
        >
          <Grid2
            container
            direction={{ xs: "row", sm: "row", md: "column" }}
            sx={{
            width: {xs: "384px", sm:"384px" ,md:"748px"}, 
            height: {xs: "250px", sm:"250px", md:"500px"},
          }}
            spacing={{ xs: "20px", sm: "30px", md: "40px" }}
          >
            <Grid2 item xs={8}>
              <Box
                sx={{
                  width: {xs:"250px", sm:"250px", md:"500px"},
                  height:{xs:"250px", sm:"250px", md:"500px"},
                  backgroundColor: "#EA810033",
                  borderRadius: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  // transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out", // Rotate and translate transition
                }}
              >
                <CardMedia
                  component="img"
                  image={selectedPizza?.image}
                  sx={{
                    width: {xs:"185px", sm:"185px", md:"440px"},
                    // objectFit: "cover",
                    transition: "transform 1.5s ease-in-out",
                    transform: isAnimating
                    ? animationDirection === "right"
                      ? "rotate(360deg) translateX(-200px)" // Rotate and move diagonally to the left
                      : "rotate(-360deg) translateX(200px)"  // Rotate and move diagonally to the right
                    : " translate(0)",  // Normal position, no movement
                    // rotate: isAnimating ? 0 : 1,
                  }}
                />

              </Box>

            </Grid2>

            <Grid2 item xs={6}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: {xs:"20px", sm:"20px", md:"50px"} }}
              >
                <Box
                  sx={{
                    width: {xs:"100px", sm:"100px", md:"208px"},
                    height: {xs:"100px", sm:"100px", md:"208px"},
                    backgroundColor: "#D9D9D9",
                    borderRadius: "100%",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                //      transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out", // Transition for image
                // transform: isAnimating && animationDirection === "left"
                //   ? "rotate(90deg) translateX(200px)" // Rotate in from the left
                //   : "rotate(0deg) translateX(0)", // Normal position
              
                  }}
                  onClick={() => handleImageClick(hero_picture)}
                >
                  <CardMedia
                    component="img"
                    image={hero_picture}
                    style={{ width:{sm:"75px", md:"173px"}, objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    width: {xs:"100px", sm:"100px", md:"208px"},
                    height: {xs:"100px", sm:"100px", md:"208px"},
                    backgroundColor: "#D9D9D9",
                    borderRadius: "100%",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden",
                    // transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out", // Transition for image
                    // transform: isAnimating && animationDirection === "right"
                    //   ? "rotate(-90deg) translateX(-200px)" // Rotate in from the right
                    //   : "rotate(0deg) translateX(0)", 
                  }}
                  onClick={() => handleImageClick(cardImage)}
                >
                  <CardMedia
                    component="img"
                    image={cardImage}
                    style={{ width:{sm:"75px", md:"173px"}, objectFit: "cover" }}
                  />
                </Box>
              </Box>
            </Grid2>

          </Grid2>

        </Box>

        <Box sx={{}}>
          <Grid2
            container
            rowSpacing={"10px"}
            direction={{ xs: "row", sm: "row", md: "column" }}
            sx={{
              width: {xs: "384px", sm:"384px" ,md:"522px"}, 
              height: {xs: "296px", sm:"296px", md:"379px"}  
            }}
          >
            <Grid2 item>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  fontFamily: "Roboto",
                  fontSize: {xs:"35px", sm:"35px", md:"80px"},
                  fontWeight: 700,
                  lineHeight: "75.75px",
                  letterSpacing: "0.03em",
                  textAlign: "left",
                }}
              >
                {selectedPizza.name}
              </Typography>
              <Grid2 container spacing={2}>
              {selectedPizza && selectedPizza.Toppings?.map((topping) => (
              <Grid2 item xs={6} key={topping.toppingId}>

                  <FormControlLabel
                  control={
                    <Checkbox
                    checked={toppingState[topping.MenuToppings.toppingId] || false}
                    onChange={handleChange}
                    name={topping.MenuToppings.toppingId.toString()} 
                    sx={{
                      "&.Mui-checked": {
                        color: "#FF8100",
                      },
                    }}
                  />
                  }
                  label={topping.name}
                  />
              </Grid2>
              ))}
              </Grid2>
            </Grid2>

            <Grid2
              item
              sx={{ display: "flex", alignItems: "center", gap: "35px" }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "50px" }}>
                <Button
                  sx={{
                    border: "2px solid #FF8100",
                    width: "60px",
                    height: "60px",
                    padding: "10px 15px 10px 15px",
                    borderRadius: "10px",
                    color: "#000",
                  }}
                  onClick={() => handleQuantityChange("subtract")}
                >
                  <Remove />
                </Button>
                <Typography variant="h6" sx={{}}>
                  {quantity}
                </Typography>
                <Button
                  sx={{
                    border: "2px solid #FF8100",
                    width: "60px",
                    height: "60px",
                    padding: "10px 15px 10px 15px",
                    borderRadius: "10px",
                    color: "#000",
                  }}
                  onClick={() => handleQuantityChange("add")}
                >
                  <Add />
                </Button>
              </Box>
              <Typography
                variant="subtitle1"
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  color: "#01C550",
                  fontFamily: "Roboto",
                  fontSize: "45px",
                  fontWeight: 700,
                  lineHeight: "44.55px",
                  letterSpacing: "0.03em",
                }}
              >
                {selectedPizza.price * quantity}
                <span
                  style={{
                    color: "#000",
                    fontSize: "15px",
                    fontWeight: 400,
                    alignSelf: "flex-start",
                    lineHeight: "1",
                  }}
                  onClick={placeOrder}
                >
                  Birr
                </span>
              </Typography>
            </Grid2>

            <Grid2 item>

              <Button
                variant="contained"
                sx={{
                  width: {xs:"384px", sm:"384px", md:"522px"},
                  height: {xs:"66px", sm:"66px", md:"76px"},
                  backgroundColor: "#FF890F",
                  fontSize: "24px",
                  fontFamily: "Roboto",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  borderRadius: "10px",
                }}
                endIcon={
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        width: "33px",
                        color: "#fff",
                      }}
                    >
                      <ArrowOutwardIcon
                        sx={{ fontSize: "33px", fontWeight: 700 }}
                      />
                    </IconButton>
                  </InputAdornment>
                }

                onClick={()=>{orderPizza()}}
              >
                Order
              </Button>

            </Grid2>

          </Grid2>
        </Box>

      </Box>
)}
      
      <Box>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            color: "#00000080",
            fontSize: "50px",
            fontFamily: "Inter",
            marginTop: "20px",
            fontWeight: 700,
          }}
        >
          Related
        </Typography>
        <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          overflowY: "hidden",
          height: "auto", // Adjust this if needed
          marginTop: "20px",
          paddingBottom: "10px",
          scrollbarWidth: "none", // For Firefox
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, and Opera
          },
        }}
      >
          {menuData && menuData?.map((pizza) => (
            <Box
            key={pizza.id}
            sx={{
              flex: "0 0 auto", // Prevent shrinking, allow scrolling
              marginRight: "16px", // Adjust gap between cards
            }}
          >
              <Card
                sx={{
                  backgroundColor: "#FFFFFF",
                  width: {xs:"273px" ,sm:"273px", md:"387px"},
                  height: {xs:"321px" ,sm: "321px", md:"450px"},
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
                    sx={{  width: {xs:"200px", sm:"200px", md:"272px"}, objectFit: "cover" }}
                  />
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: {xs:"15px", sm: "15px", md: "25px"},
                      fontWeight: 700,
                      lineHeight: "23.67px",
                      letterSpacing: "0.03em",
                      textAlign: "center",
                    }}
                  >
                    {pizza.name}
                  </Typography>
                  <Box sx={{display: "flex", alignItems: "center", justifyContent:"center"}}>
                  {pizza && pizza.Toppings?.map((topping,index) => (
                    <>
                  <Typography
                  key={index}
                  sx={{
                    fontFamily: "Roboto",
                    fontSize: {xs:"10px", sm: "10px", md: "15px"},
                    fontWeight: 400,
                    lineHeight: "14.2px",
                    letterSpacing: "0.03em",
                    textAlign: "center",
                    color: "#000000BF",
                    marginTop: {sm:"5px", md:"10px"},
                  }}
                >{topping.name}</Typography>
                <Typography
                 sx={{
                  fontFamily: "Roboto",
                  fontSize: {xs:"10px", sm: "10px", md: "15px"},
                  fontWeight: 400,
                  color: "#000000BF",
                }}
                >{", "}&nbsp;</Typography>
                </>
                ))}
                </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Box>

      <Dialog open={open} onClose={handleClose} PaperProps={{
    sx: {
      borderRadius: "20px", 
      width: "800px",
      height: "500px",
    },
  }}>
      <DialogContent>
         <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <IconButton
            sx={{
              width: '280px',
              height: '280px',
              backgroundColor: '#E8F5E9',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '20px',
            }}
            disableRipple
          >
            <CheckCircleIcon sx={{ color: '#01C550', fontSize: '150px' }} />
          </IconButton>
          <Typography variant="h6" sx={{ color: '#01C550', fontWeight: 'bold', fontSize: "32px" }}>
            Your order has been successfully completed!
          </Typography>
        </Box>
      </DialogContent>
      </Dialog>
    </Box>
  );
};

export default PizzaOrder;
