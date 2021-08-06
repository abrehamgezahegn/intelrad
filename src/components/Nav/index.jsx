import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Container } from "./styles";

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
            <h1>INTELRAD</h1>
          </NavLink>
        </div>
        <div className="nav-items">
          <NavLink
            to="/new-cases"
            className="nav-item"
            activeClassName="nav_item__active"
          >
            New cases
          </NavLink>
          <NavLink
            to="/diagnosed"
            className="nav-item"
            activeClassName="nav_item__active"
          >
            Diagnosed
          </NavLink>
        </div>

        <div className="user-items">
          <div className="menu">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className="menu-trigger"
            >
              Rad. Never Given Name
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Nav;
