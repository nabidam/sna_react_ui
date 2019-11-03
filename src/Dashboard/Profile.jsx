import React from "react";
import {Popover, MenuItem, IconButton} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  chevronIcon: {
    width: 30,
    height: 30,
    marginRight: 15
  },
  avatarIcon: {
    width: 48,
    height: 48
  },
  profile: {
    "&:hover": {
      color: "#4753ff",
      cursor: "pointer"
    }
  }
}));

const Profile = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
        <div
            className={classes.profile}
            size="small"
            aria-owns={open ? "menu-appbar" : undefined}
            aria-haspopup="true"
            onClick={handleMenu}
        >
          <IconButton
              className={classes.chevronIcon}
              size="small"
              color="inherit"
          >
            <i className="fas fa-chevron-down" />
          </IconButton>
          <IconButton className={classes.avatarIcon} size="small" color="inherit">
            <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
                className={classes.avatar}
            />
          </IconButton>
        </div>
        <Popover
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>پروفایل</MenuItem>
        </Popover>
      </div>
  );
};

export default Profile;
