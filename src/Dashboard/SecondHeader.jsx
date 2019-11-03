import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {withStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {history} from "../_helpers";
import {connect} from "react-redux";
import {userActions, DashboardActions} from "../_actions";
import SecondHeaderProfile from "./SecondHeaderProfile";
import SecondHeaderNotifications from "./SecondHeaderNotifications";
import Paper from "@material-ui/core/Paper";
import {Button, Grid} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import TrafficIcon from "@material-ui/icons/Traffic";

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
    // width: `calc(100% - ${drawerWidth}px)`,
    // marginRight: drawerWidth,
    backgroundColor: "#fff",
    color: "#3c3c3c",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
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
  },
  titlePaper: {
    padding: "0px 24px",
    backgroundColor: "#fff",
    borderRadius: 0,
    boxShadow: "none",
    // borderRight: "solid 1px #edf1f6"
    width: 260
  },
  headerPaper: {
    padding: "0px 0px",
    fontSize: 12,
    color: "#08080d",
    margin: "0px 25px",
    backgroundColor: "#fff",
    borderRadius: 0,
    boxShadow: "none",
    height: "89%"
    // borderRight: "solid 1px #edf1f6"
    // minWidth: 78,
  },
  selectedHeaderPaper: {
    color: "#4753ff",
    "&::after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: 4,
      background: "#4753ff",
      borderTopLeftRadius: "2.5px",
      borderTopRightRadius: "2.5px"
    }
  },
  headerItemIcon: {
    marginLeft: 17
  },
  cardText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "right"
  },
  headerItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    textAlign: "right"
  },
  primaryText: {
    fontSize: 18,
    textAlign: "center"
  },
  headerItemText: {
    fontSize: 12,
    textAlign: "left"
  },
  notification: {
    flexGrow: 1
  },
  profile: {}
});

class SecondHeader extends React.Component {
  constructor(props) {
    console.log("second header")
    console.log(props)
    super(props);
    this.logout = this.logout.bind(this);
    this.hadleSelectPage = this.hadleSelectPage.bind(this);
  }

  logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");

    this.props.auth.logout({
      returnTo: window.location.origin
    });
    history.replace("/");
    this.props.logout();
  };

  hadleSelectPage = (page) =>
  {
    console.log("/dashboard" + (page != "" ? "/" + page : ""));
    this.props.selectPage(page);
    history.push("/dashboard" + (page != "" ? "/" + page : ""));


  };

  render() {
    const {classes} = this.props;

    return (
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Paper className={classes.titlePaper}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth className={classes.cardText}>
                  <Typography
                      variant="h5"
                      component="p"
                      className={classes.primaryText}
                  >
                    ــدادهـــ ـکاویـــ
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper
                className={classNames(
                    classes.headerPaper,
                    this.props.selectedPage == "trackers"
                        ? classes.selectedHeaderPaper
                        : ""
                )}
                component={Button}
                onClick={() => this.hadleSelectPage("trackers")}
                variant="contained"
            >
              <Grid container wrap="nowrap">
                <Grid item xs zeroMinWidth className={classes.headerItem}>
                  <SearchIcon className={classes.headerItemIcon} />
                  <Typography
                      variant="p"
                      component="p"
                      className={classes.headerItemText}
                  >
                    ردیاب‌ها
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper
                className={classNames(
                    classes.headerPaper,
                    this.props.selectedPage == "traffic-analysis"
                        ? classes.selectedHeaderPaper
                        : ""
                )}
                component={Button}
                onClick={() => this.hadleSelectPage("traffic-analysis")}
                variant="contained"
            >
              <Grid container wrap="nowrap">
                <Grid item xs zeroMinWidth className={classes.headerItem}>
                  <TrafficIcon className={classes.headerItemIcon} />
                  <Typography
                      variant="p"
                      component="p"
                      className={classes.headerItemText}
                  >
                    تحلیل ترافیکی
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper
                className={classNames(
                    classes.headerPaper,
                    this.props.selectedPage == "projects"
                        ? classes.selectedHeaderPaper
                        : ""
                )}
                component={Button}
                onClick={() => this.hadleSelectPage("projects")}
                variant="contained"
            >
              <Grid container wrap="nowrap">
                <Grid item xs zeroMinWidth className={classes.headerItem}>
                  <i
                      className={classNames(
                          classes.headerItemIcon,
                          "fas fa-project-diagram fa-xs"
                      )}
                  />
                  <Typography
                      variant="p"
                      component="p"
                      className={classes.headerItemText}
                  >
                    پروژه‌ها
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper
                className={classNames(
                    classes.headerPaper,
                    this.props.selectedPage == "trends"
                        ? classes.selectedHeaderPaper
                        : ""
                )}
                component={Button}
                onClick={() => this.hadleSelectPage("trends")}
                variant="contained"
            >
              <Grid container wrap="nowrap">
                <Grid item xs zeroMinWidth className={classes.headerItem}>
                  <ShowChartIcon className={classes.headerItemIcon} />
                  <Typography
                      variant="p"
                      component="p"
                      className={classes.headerItemText}
                  >
                    ترند‌ها
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper
                className={classNames(
                    classes.headerPaper,
                    this.props.selectedPage == "influencers"
                        ? classes.selectedHeaderPaper
                        : ""
                )}
                component={Button}
                onClick={() => this.hadleSelectPage("influencers")}
                variant="contained"
            >
              <Grid container wrap="nowrap">
                <Grid item xs zeroMinWidth className={classes.headerItem}>
                  <ShowChartIcon className={classes.headerItemIcon} />

                  <Typography
                      variant="p"
                      component="p"
                      className={classes.headerItemText}
                  >
                    افراد مؤثر
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <Paper
                className={classNames(
                    classes.headerPaper,
                    this.props.selectedPage == "accounts"//management,accounts
                        ? classes.selectedHeaderPaper
                        : ""
                )}
                component={Button}
                onClick={() => this.hadleSelectPage("accounts")}
                variant="contained"
            >
              <Grid container wrap="nowrap">
                <Grid item xs zeroMinWidth className={classes.headerItem}>
                  <i
                      className={classNames(
                          classes.headerItemIcon,
                          "fas fa-users fa-xs"
                      )}
                  />
                  <Typography
                      variant="p"
                      component="p"
                      className={classes.headerItemText}
                  >
                    مدیریت شبکه اجتماعی
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            <SecondHeaderNotifications />
            <SecondHeaderProfile className={classes.profile} />
            {/* <Tooltip title="خروج" placement="bottom">
            <IconButton
              onClick={() => this.logout()}
              className={classes.logoutbtn}
              aria-label="Logout"
            >
              <ExitIcon className={classes.textBlack} />
            </IconButton>
          </Tooltip> */}
          </Toolbar>
        </AppBar>
    );
  }
}

SecondHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  requestLogout: PropTypes.func.isRequired,
  isDrawerOpen: PropTypes.bool,
  triggerDrawer: PropTypes.func.isRequired,
  selectPage: PropTypes.func.isRequired,
  selectedPage: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const {triggerDrawer, authentication, selectedTrackerDashboardItem} = state;
  console.log("second header map state")
  console.log(state)
  return {
    auth: authentication,
    isAuthenticated: authentication.loggingIn,
    isDrawerOpen: triggerDrawer.isDrawerOpen,
    selectedPage: selectedTrackerDashboardItem.selectedPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(userActions.logout()),
    triggerDrawer: () => dispatch(DashboardActions.triggerDrawer()),
    selectPage: page => dispatch(DashboardActions.selectPage(page))
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles, {withTheme: true})(SecondHeader));
