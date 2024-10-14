import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import BatteryCharging80Icon from "@mui/icons-material/BatteryCharging80";
import { useDispatch, useSelector } from "react-redux";
import { getTopRestaurants } from "../slices/menu.slice";
import { useEffect } from "react";


const Restaurants = () => {
  const dispatch = useDispatch();
  const { topRestaurants } = useSelector(state => state.menu);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        dispatch(getTopRestaurants());
      } catch (error) {
        console.error("Error fetching menu:", error);
      }
    };
    fetchMenu();
  }, [dispatch]);
  return (
    <Box
      sx={{
        overflowX: "auto",
        overflowY: "hidden",
        height: {xs:"177px", sm:"177px", md:"400px"},
        marginTop: "20px",
        padding: {
          xs: "0px 20px",   // padding for extra small screens (mobile)
          sm: "0px 40px",   // padding for small screens (small tablets)
          md: "0px 40px",   // padding for medium screens (tablets)
          lg: "0px 40px",   // padding for large screens (laptops and desktops)
          xl: "0px 100px",  // padding for extra large screens
        },
        pl: "40px",
        background:
          "linear-gradient(180deg, rgba(250, 126, 0, 0) 0%, rgba(250, 126, 0, 0.2) 60.5%, #FFF8F1 100%)",
      }}
    >
      <Typography
        variant="h5"
        gutterBottom
        sx={{
          color: "#00000080",
          fontSize: {xs:"25px", sm: "25px", md: "50px"},
          fontFamily: "Inter",
          marginTop: "20px",
        }}
      >
        Top Restaurants
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
        {/* Map through restaurants and display them */}
        {topRestaurants.map((restaurant) => (
          <Box
            key={restaurant.id}
            sx={{
              flex: "0 0 auto", // Prevent shrinking, allow scrolling
              marginRight: "16px", // Adjust gap between cards
            }}
          >
            <Card
              sx={{
                display: "flex",
                alignItems: "center",
                width: {xs:"auto" ,sm:"auto", md:"574px"},
                height: {xs:"90px" ,sm: "90px", md:"154px"},
                boxShadow: "none",
                padding: "20px 30px",
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    width: {xs: "120px", sm:"120px", md:"235px"},
                  }}
                >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        gap: "10px",
                      }}
                    >
                      <Avatar
                        src={restaurant.logo}
                        alt={restaurant.name}
                        sx={{ width: {xs:25, sm:25, md:50}, height: {xs:25, sm:25, md:50} }}
                      />
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: "Roboto",
                          fontSize: {xs:"12px", sm:"12px", md:"20px"},
                          fontWeight: 700,
                          lineHeight: "18.94px",
                          letterSpacing: "0.03em",
                          textAlign: "left",
                        }}
                      >
                        {restaurant.name}
                      </Typography>
                    </Box>
                  
                    <Typography
                      variant="body"
                      sx={{
                        fontFamily: "Inter",
                        fontSize: {xs:"10px", sm:"10px", md:"15px"},
                        fontWeight: 400,
                        lineHeight: "15.75px",
                        textAlign: "left",
                        color: "#00000080",
                      }}
                    >
                      {restaurant.location}
                    </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "15px",
                    backgroundColor: "#0080000D",
                    width: {xs: "140px", sm: "140px", md: "262px"},
                    height: {xs: "60px", sm: "60px", md: "108px"},
                    padding: "0px 15px 0px 15px",
                    gap: "20px",
                    borderRadius: "10px 0px 0px 0px",
                  }}
                >
                  <BatteryCharging80Icon
                    sx={{
                      fontSize: {xs: "25px", sm: "25px", md:"50px"},
                      color: "#FF8100",
                      backgroundColor: "#FF810033",
                      borderRadius: "100px",
                      width: {xs: "40px", sm: "40px", md: "80px"},
                      height: {xs: "40px", sm: "40px", md: "80px"}
                    }}
                  />
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "left", height: "40px"}}>
                  <Typography variant="body2" color="textSecondary" sx={{ fontSize: {xs: "8px", sm: "8px", md: "12px"}}}>
                    Number of orders:{" "}
                  </Typography>
                  <Typography
                    component="span" 
                      sx={{
                        color: "#FF8100",
                        fontFamily: "Roboto",
                        fontSize: {xs:"20px", sm:"20px" ,md:"50px"},
                        fontWeight: 700,
                        textAlign: "left"
                      }}
                    >
                      {restaurant.ordersCount}
                    </Typography>
                    </Box>
                </Box>

              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Restaurants;
