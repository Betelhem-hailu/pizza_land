import PizzaLogo from "../assets/pizza-logo.png";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "@mui/material";
import { logout } from "../slices/user.slice";

const pages = ["Home", "Orders", "Who we are"];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [activePage, setActivePage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const userInitials = user && user?.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (page) => {
    setActivePage(page);
    navigate("/" + `${page.toLowerCase()}`);
    handleCloseNavMenu();
  };

  const handleLogout = () => {
    dispatch(logout());
};


  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: "black",
        height: "75px",
        boxShadow: "0px 0px 15px 0px #FF810033",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              variant="square"
              src={PizzaLogo}
              sx={{
                height: { xs: 25, sm: 25, md: 50 },
                width: { xs: 25, sm: 25, md: 50 },
              }}
            />
            <Typography
              gutterBottom
              color="#AF5901"
              sx={{
                fontWeight: "600",
                fontSize: { xs: "13px", sm: "13px", md: "25px" },
                marginLeft: "15px",
              }}
            >
              Pizza
            </Typography>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClick(page)}
                sx={{
                  my: 2,
                  mx: { xs: 1, sm: 2, md: 4 },
                  color: activePage === page ? "#AF5901" : "black",
                  display: "block",
                  fontFamily: "Inter",
                  fontSize: { xs: "10px", sm: "13px", md: "25px" },
                  textTransform: "capitalize",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              {!user ? (
                <Button
                  variant="contained"
                  sx={{
                    width: "168px",
                    height: "50px",
                    backgroundColor: "#FFF",
                    color: "#FF890F",
                    boxShadow: "none",
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </Button>
              ) : (
                <>
                <Avatar
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                  sx={{
                    width: 40,
                    height: 40,
                    bgcolor: "#FF890F",
                    color: "#FFF",
                  }}
                >
                  {userInitials}{" "}
                </Avatar>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}>
                  <Button
                  variant="contained"
                  sx={{
                  width: "100px",
                  height: "30px",
                  margin: "auto",
                  backgroundColor: "#FFF",
                  color: "#FF890F",
                  boxShadow: "none",
                }}
                onClick={handleLogout}>logout</Button>
                </Menu>
                </>
              )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
