import React from "react";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import {IconButton, Badge, Popover,MenuItem} from "@material-ui/core";
//import Avatar from "@material-ui/core/Avatar";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  notificationIcon: {
    padding: 4,
    marginRight: 20
    // width: 30,
    // height: 30,
    // marginRight: 15
  }
}));

const Notifications = () => {
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
        <IconButton
            color="inherit"
            className={classes.notificationIcon}
            onClick={handleMenu}
        >
          <Badge color="secondary" variant="dot">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Popover
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right"
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
          <MenuItem onClick={handleClose} />
        </Popover>
      </div>
  );
};

// export default withStyles(classes)(Notifications);
export default Notifications;
