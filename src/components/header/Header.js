import React from "react";
import { withStyles, AppBar, Menu, MenuItem, IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Style } from "./Style";
import { connect } from "react-redux";
import { removeAuthState } from "../../store/actions";

function Header({ classes, isAuthorised, user, removeAuthState }) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      removeAuthState()
    };

  return (
    <header>
      <AppBar>
        <div className={classes.box}>
          <h1 className={classes.head}>BidOnHomes</h1>
         {isAuthorised && ( <div>
            <IconButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <div className={classes.box}>
         <div className={classes.avatar}>{user && (user.email[0] + user.email[1]).toUpperCase()}</div>
                <KeyboardArrowDownIcon className={classes.icon} />
              </div>
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>)}
        </div>
      </AppBar>
    </header>
  );
}

const mapStateToProps = ({ auth }) => {
  return { ...auth}
}

export default connect(mapStateToProps, {removeAuthState})(withStyles(Style)(Header));
