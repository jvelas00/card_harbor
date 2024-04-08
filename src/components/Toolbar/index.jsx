import { useState } from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SailingIcon from "@mui/icons-material/Sailing";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";

// placeholder settings
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function ResponsiveToolbar() {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <Container
        id="toolbar-container"
        maxWidth="100%"
        sx={{ position: "static" }}
      >
        <Container maxWidth="100%" sx={{ backgroundColor: "primary.main" }}>
          <Container maxWidth="xl">
            <Toolbar
              disableGutters
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <SailingIcon fontSize="large" sx={{ mr: 2, color: "white" }} />
                <Typography
                  variant="h4"
                  color="white"
                  component="div"
                  fontFamily={"Pacifico"}
                >
                  Card Harbor
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu}>
                    <Avatar alt="Test User" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                  <MenuItem key={"User Logout"} onClick={handleCloseUserMenu}>
                    <Link to="login" style={{ textDecoration: "none" }}>
                    <Typography textAlign="center">User Logout</Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </Container>

        <Container maxWidth="100%" sx={{ backgroundColor: "primary.light" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Link to="home" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{ color: "white", textDecoration: "none", mr: "20px" }}
                >
                  Home
                </Typography>
              </Link>
              <Link to="dashboard" style={{ textDecoration: "none" }}>
                <Typography
                  sx={{ color: "white", textDecoration: "none", mr: "20px" }}
                >
                  Dashboard
                </Typography>
              </Link>
              <Link to="camera" style={{ textDecoration: "none"}}>
                <Typography
                  sx={{ color: "white", textDecoration: "none", mr: "20px"}}>
                  Camera
                </Typography>
              </Link>
            </Toolbar>
          </Container>
        </Container>
      </Container>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
}
