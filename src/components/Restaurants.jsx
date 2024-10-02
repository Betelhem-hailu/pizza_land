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
        height: "440px",
        marginTop: "20px",
        py: "90px",
        pl: "40px",
        background:
          "linear-gradient(180deg, rgba(250, 126, 0, 0) 0%, rgba(250, 126, 0, 0.2) 60.5%, #FFF8F1 100%)",
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
                width: "574px",
                height: "154px",
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
                    width: "235px",
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
                      {restaurant.name}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body"
                    sx={{
                      fontFamily: "Inter",
                      fontSize: "15px",
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
                    width: "262px",
                    height: "108px",
                    padding: "0px 15px 0px 15px",
                    gap: "20px",
                    borderRadius: "10px 0px 0px 0px",
                  }}
                >
                  <BatteryCharging80Icon
                    sx={{
                      fontSize: "50px",
                      color: "#FF8100",
                      backgroundColor: "#FF810033",
                      borderRadius: "100px",
                      width: "80px",
                      height: "80px",
                    }}
                  />
                  <Typography variant="body2" color="textSecondary">
                    Number of orders:{" "}
                    <span
                      style={{
                        color: "#FF8100",
                        fontFamily: "Roboto",
                        fontSize: "50px",
                        fontWeight: 700,
                        lineHeight: "47.34px",
                        letterSpacing: "0.03em",
                        textAlign: "left",
                      }}
                    >
                      {restaurant.ordersCount}
                    </span>
                  </Typography>
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
