import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Container } from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAuth } from "../../context/AuthProvider";
import Logo from "../Logo";

const radiographer = [
  {
    title: "Requests",
    to: "/",
  },
  {
    title: "History",
    to: "/history",
  },
];

const radiologist = [
  {
    title: "Requests",
    to: "/",
  },
  {
    title: "History",
    to: "/history",
  },
];

const doctor = [
  {
    title: "Diagnosis",
    to: "/",
  },
  // {
  //   title: "Patients",
  //   to: "/patients",
  // },
];

const superAdmin = [
  {
    title: "Dashboard",
    to: "/",
  },
  // {
  //   title: "Patients",
  //   to: "/patients",
  // },
];

const admin = [
  {
    title: "Create user",
    to: "/",
  },
  // {
  //   title: "Patients",
  //   to: "/patients",
  // },
];

const navItems = {
  radiographer,
  radiologist,
  doctor,
  superAdmin,
  admin,
};

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const auth = useAuth();
  const location = useLocation();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <div className="inner">
        <div className="logo">
          <NavLink to="/">
            <Logo />
          </NavLink>
        </div>
        <div className="nav-items">
          {navItems[auth.user.role].map((navItem) => {
            return (
              <NavLink
                to={navItem.to}
                className="nav-item"
                activeClassName="nav_item__active"
                style={{
                  color: location.pathname === navItem.to ? "white" : "#7B8794",
                }}
              >
                {navItem.title}
              </NavLink>
            );
          })}
        </div>

        <div className="user-items row">
          <img
            src="https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg"
            alt="ava"
            className="avatar"
          />
          <div className="menu">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className="menu-trigger"
            >
              {auth.user.name}
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  auth.logout();
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </div>
          <ExpandMoreIcon />
        </div>
      </div>
    </Container>
  );
};

export default Nav;
