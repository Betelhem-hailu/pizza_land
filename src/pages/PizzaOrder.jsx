import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
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

const PizzaOrder = () => {
  const location = useLocation();
  const pizzaId = location.state?.id;
  console.log(pizzaId);
  const [open, setOpen] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationDirection, setAnimationDirection] = useState(""); 
  const [selectedPizza, setSelectedPizza] = useState(null);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const { menuData } = useSelector(state=> state.menu);

  useEffect(()=>{
    const fetchMenuID = async (pizzaId) => {
      try {
        const response = dispatch(getMenuById(pizzaId));
        console.log(response);
        setSelectedPizza(response);
      }  catch (error) {
        console.error("Error fetching pizza details:", error);
      }
    }
    fetchMenuID(pizzaId);
  },[dispatch, pizzaId]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        dispatch(getAllMenus());
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, [dispatch]);

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

  const placeOrder = async () => {
    if (!selectedPizza) return;

    const orderData = {
      menuItems: [
        {
          menuId: selectedPizza.menuId, 
          quantity: quantity,
          toppings: selectedPizza.toppings.map(topping => topping.id),
        },
      ],
    };

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
      <Box sx={{ display: "flex", gap: "70px", alignItems: "center" }}>
        <Box sx={{ width: "748px", height: "500px" }}>
          <Grid2
            container
            direction={"column"}
            height={"500px"}
            width={"748px"}
            spacing={"40px"}
          >
            <Grid2 item xs={8}>
              <Box
                sx={{
                  width: "500px",
                  height: "500px",
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
                  style={{
                    width: "440px",
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
                sx={{ display: "flex", flexDirection: "column", gap: "50px" }}
              >
                <Box
                  sx={{
                    width: "208px",
                    height: "208px",
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
                    style={{ width: "173px", objectFit: "cover" }}
                  />
                </Box>
                <Box
                  sx={{
                    width: "208px",
                    height: "208px",
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
                    style={{ width: "173px", objectFit: "cover" }}
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
            direction={"column"}
            sx={{ width: "522px", height: "379px" }}
          >
            <Grid2 item>
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                sx={{
                  fontFamily: "Roboto",
                  fontSize: "80px",
                  fontWeight: 700,
                  lineHeight: "75.75px",
                  letterSpacing: "0.03em",
                  textAlign: "left",
                }}
              >
                {selectedPizza.name}
              </Typography>
              <Grid2 container spacing={2} sx={{ flexWrap: "wrap" }}>
                {selectedPizza && selectedPizza.toppings.map((topping) => (
                  <FormControlLabel
                    key={topping.id} // Assuming topping is an object with an id
                    control={<Checkbox defaultChecked />}
                    label={topping.name} // Assuming topping has a name property
                    sx={{
                      "&.Mui-checked": {
                        backgroundColor: "#FF8100",
                      },
                    }}
                  />
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
                    width: "70px",
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
                    width: "70px",
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
                style={{
                  width: "522px",
                  height: "76px",
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

                onClick={placeOrder}
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
        <Grid container spacing={2}>
          {menuData.map((pizza, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#FFFFFF",
                  width: "387px",
                  height: "450px",
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
                    image={pizza.logo}
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
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
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
