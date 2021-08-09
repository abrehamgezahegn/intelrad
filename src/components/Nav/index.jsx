import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Container } from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useAuth } from "../../context/AuthProvider";

const Nav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const auth = useAuth();

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
              Rad. Never Given Name
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
