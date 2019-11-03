import React,{Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import {history} from "../_helpers";
import {connect} from "react-redux";
import Profile from "./Profile";
import Notifications from "./Notifications";
import UpgradePremium from "./UpgradePremium";
import {userActions,DashboardActions} from "../_actions";
import {Divider} from "@material-ui/core";


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  grow: {
    flexGrow: 1,
    textAlign: "right"
  },
appBar: {
    height: 60,
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    backgroundColor: "#fff",
    color: "#3c3c3c",
    zIndex: theme.zIndex.drawer,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
 /*  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
    float: "right"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing.unit * 7 + 1
  },
  rtlToolBar: {
    direction: "rtl"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    direction: "rtl",
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    marginRight: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth - 10
  },*/
  logoutbtn: {
    marginLeft: 10,
    color: "#fff",
    "&:hover": {
      textDecoration: "none",
      color: "#fff"
    }
  },
  textBlack: {
    color: "#3c3c3c"
  }
});

class MiniDrawer extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout = () => {
    this.props.logout();
    history.replace("/");
  };

  render() {
    const {classes} = this.props;

    return (
      <AppBar
        position="fixed"
        className={classNames(classes.appBar/*, {
          [classes.appBarShift]: this.props.isDrawerOpen
        }*/)}
      >
        <Toolbar className={classes.toolBar}
          /*disableGutters={!this.props.isDrawerOpen}
          className={classes.rtlToolBar}*/
        >
          {/*<IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={this.props.triggerDrawer}
            className={classNames(classes.menuButton, {
              [classes.hide]: this.props.isDrawerOpen
            })}
          >
            <MenuIcon />
          </IconButton>*/}
          <Profile />
          <Notifications />
          <Divider />
          <UpgradePremium />
          {/*<Tooltip title="خروج" placement="bottom">
            <IconButton
              onClick={() => this.logout()}
              className={classes.logoutbtn}
              aria-label="Logout"
            >
              <ExitIcon className={classes.textBlack}/>
            </IconButton>
          </Tooltip>*/}
        </Toolbar>
      </AppBar>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool,
  triggerDrawer: PropTypes.func.isRequired,
  logout:PropTypes.func.isRequired
};

function mapStateToProps (state) {
 const {isDrawerOpen}=state.triggerDrawer;
  return {
    isDrawerOpen
  };
}

const mapDispatchToProps = dispatch => {
  return {
    triggerDrawer: () => dispatch(DashboardActions.triggerDrawer()),
    logout: () => dispatch(userActions.logout())
  };
};

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, {withTheme: true})(MiniDrawer));

export default Header
