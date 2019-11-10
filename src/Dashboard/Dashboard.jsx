import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {
  CssBaseline,
  Snackbar,
  SnackbarContent,
  IconButton,
  Typography,
  List,
  ListItem,
  Button
} from "@material-ui/core";
import Sidebar from "./Sidebar";
import { connect } from "react-redux";
import {
  DashboardActions,
  TrafficAnalysisActions,
  TrackersActions
} from "../_actions";
import { green } from "@material-ui/core/colors";
import { PrivateRoute } from "../_components";
import AddTracker from "./AddTracker";
import MainDashboard from "./MainDashboard";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import SecondHeader from "./SecondHeader";
import TrackersDashboard from "./TrackersDashboard";
import TrackersSidebar from "./TrackersSidebar";
import TrafficAnalysis from "./TrafficAnalysis";
import Influencers from "./Influencers";
import Accounts from "./Accounts";
import Projects from "./Projects";
import Trends from "./Trends";
import Trackers from "./Trackers";

import AddTrafficAnalysis from "./AddTrafficAnalysis";
import AddTrafficAnalysisHeader from "./AddTrafficAnalysisHeader";
import AddTrackers from "./AddTrackers";
import AddTrackersHeader from "./AddTrackersHeader";
import AddProjects from "./AddProjects";
import AddProjectsHeader from "./AddProjectsHeader";
import AddPosts from "./AddPosts";
import AddPostsHeader from "./AddPostsHeader";
import EditTrackers from "./EditTrackers";
import EditTrackersHeader from "./EditTrackersHeader";
import EditProjects from "./EditProjects";
import EditProjectsHeader from "./EditProjectsHeader";
import EditTrafficAnalysis from "./EditTrafficAnalysis";
import EditTrafficAnalysisHeader from "./EditTrafficAnalysisHeader";
import Fab from "@material-ui/core/Fab";
import CallToActionIcon from "@material-ui/icons/CallToAction";
import Badge from "@material-ui/core/Badge";
import Popover from "@material-ui/core/Popover";
import AddIcon from "@material-ui/icons/Add";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { history } from "../_helpers";

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    overflow: "hidden"
  },
  close: {
    padding: theme.spacing(0.5)
  },
  success: {
    backgroundColor: green[600]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  },

  fab: {
    position: "fixed",
    left: 18,
    bottom: 18,
    backgroundColor: "#fc4c81",
    boxShadow: "0 4px 10px 0 rgba(0, 0, 0, 0.28)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#f54581"
    }
  },
  badge: {
    position: "absolute",
    top: -3,
    right: -3,
    width: 22,
    height: 22,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: "50%"
  },
  popover: {
    width: 280,
    // height: 335,
    bordeRadius: 5,
    boxShadow: "0 2px 15px 0 rgba(0, 0, 0, 0.1)"
  },
  popoverHeader: {
    height: 56,
    borderRadius: 5,
    width: "100%",
    backgroundColor: "#08080d",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 15px"
  },
  closeIcon: {
    fontSize: "1rem",
    color: "#fff",
    padding: 0
  },
  popoverActions: {
    display: "flex",
    justifyContent: "space-between",
    padding: 15
  },
  newAnalysisBtn: {
    width: 110,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#4753ff",
    border: "solid 5px rgba(255, 255, 255, 0.85)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0500cb"
    },
    "&:active": {
      opacity: 0.7
    }
  },
  newTrackerBtn: {
    width: 110,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#4753ff",
    border: "solid 5px rgba(255, 255, 255, 0.85)",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#0500cb"
    },
    "&:active": {
      opacity: 0.7
    }
  },
  popoverList: {
    margin: "0px 15px"
  },
  popoverListItem: {
    height: 40,
    padding: 0,
    borderBottom: "1px solid #e4e8ed"
  },
  popoverListItemBody: {
    marginRight: 0
  },
  popoverCheckbox: {
    padding: 0
  },
  popoverListItemText: {
    marginRight: 10,
    fontSize: 12
  },
  checkAllBtn: {
    fontSize: 10,
    maxWidth: 100,
    "&:hover": {
      cursor: "pointer"
    }
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainHeaderPages: [
        "trackers",
        "traffic-analysis",
        "influencers",
        "accounts",
        "projects",
        "trends"
      ],

      isPopoverOpen: false,
      popoverAnchorEl: null,

      allBagItemsChecked: false
    };
    console.log("dashboard constructor");
    console.log(props);
    this.handleCloseSnackbar = this.handleCloseSnackbar.bind(this);
  }

  handleCloseSnackbar = () => {
    this.props.changeSnackbarStatus({
      open: false,
      msg: ""
    });
  };

  handlePopoverClick = event => {
    this.setState({
      popoverAnchorEl: event.currentTarget,
      isPopoverOpen: Boolean(event.currentTarget)
    });
  };

  handleClosePopover = () => {
    this.setState({
      popoverAnchorEl: null,
      isPopoverOpen: false
    });
  };

  handleClickAddAnalysis = () => {
    this.setState({
      popoverAnchorEl: null,
      isPopoverOpen: false
    });
    this.props.goToAddTrafficAnalysis();
    this.props.selectPage("traffic-analysis/add");
    history.push("/dashboard/traffic-analysis/add");
  };

  handleClickAddTrackers = () => {
    this.setState({
      popoverAnchorEl: null,
      isPopoverOpen: false
    });
    this.props.goToAddTracker();
    this.props.selectPage("trackers/add");
    history.push("/dashboard/trackers/add");
  };

  handleClickBagItem = item => {
    this.props.changeBagItemStatus(item.name);
  };

  handleCheckAllBagItems = () => {
    this.props.checkAllBagItemStatus(!this.state.allBagItemsChecked);
    this.setState({
      allBagItemsChecked: !this.state.allBagItemsChecked
    });
  };

  componentDidMount = () => {
    var c = 0;
    this.props.myBag.map((item, index) => {
      if (item.selected) {
        c++;
      }
    });
    if (c == this.props.myBag.length) {
      this.setState({
        allBagItemsChecked: true
      });
    }
  };

  render() {
    const { classes } = this.props;

    console.log("dashboard render");
    console.log(localStorage.getItem("user"));
    console.log(this.props);
    return (
      <div className={classes.root}>
        <CssBaseline />
        {/*this.props.selectedPage == "" ? <Header /> : <SecondHeader />*/}
        {console.log(this.props.selectedPage)}
        {this.state.mainHeaderPages.indexOf(this.props.selectedPage) == -1 ? (
          ""
        ) : (
          <SecondHeader />
        )}
        {/* <SecondHeader /> */}
        {/* <PrivateRoute exact path="/dashboard/tracker" component={SecondHeader} />
          <PrivateRoute  exact path="/" component={Header} />*/}
        {/* <Header /> */}

        <PrivateRoute
          exact
          path="/dashboard/traffic-analysis/add"
          component={AddTrafficAnalysisHeader}
        />
        <PrivateRoute
          exact
          path="/dashboard/traffic-analysis/edit"
          component={EditTrafficAnalysisHeader}
        />
        <PrivateRoute
          exact
          path="/dashboard/trackers/add"
          component={AddTrackersHeader}
        />
        <PrivateRoute
          exact
          path="/dashboard/trackers/edit"
          component={EditTrackersHeader}
        />
        <PrivateRoute
          exact
          path="/dashboard/projects/add"
          component={AddProjectsHeader}
        />
        <PrivateRoute
          exact
          path="/dashboard/projects/edit"
          component={EditProjectsHeader}
        />
        <PrivateRoute
          exact
          path="/dashboard/accounts/add-post"
          component={AddPostsHeader}
        />

        {this.props.selectedTrackerDashboardItem != null ? (
          <PrivateRoute
            exact
            path="/dashboard/trackers"
            component={TrackersSidebar}
          />
        ) : (
          ""
        )}
        <PrivateRoute exact path="/" component={Sidebar} />
        {/* <Sidebar /> */}
        {/* <PrivateRoute
          exact
          path="/dashboard/add-tracker"
          component={AddTracker}
        /> */}
        {this.props.selectedTrackerDashboardItem == null ? (
          <PrivateRoute exact path="/dashboard/trackers" component={Trackers} />
        ) : (
          <PrivateRoute
            exact
            path="/dashboard/trackers"
            component={TrackersDashboard}
          />
        )}
        <PrivateRoute
          exact
          path="/dashboard/trackers/add"
          component={AddTrackers}
        />
        <PrivateRoute
          exact
          path="/dashboard/trackers/edit"
          component={EditTrackers}
        />
        <PrivateRoute
          exact
          path="/dashboard/traffic-analysis"
          component={TrafficAnalysis}
        />
        <PrivateRoute
          exact
          path="/dashboard/traffic-analysis/add"
          component={AddTrafficAnalysis}
        />
        <PrivateRoute
          exact
          path="/dashboard/traffic-analysis/edit"
          component={EditTrafficAnalysis}
        />
        <PrivateRoute
          exact
          path="/dashboard/influencers"
          component={Influencers}
        />
        <PrivateRoute exact path="/dashboard/accounts" component={Accounts} />
        <PrivateRoute
          exact
          path="/dashboard/accounts/add-post"
          component={AddPosts}
        />
        <PrivateRoute exact path="/dashboard/projects" component={Projects} />
        <PrivateRoute
          exact
          path="/dashboard/projects/add"
          component={AddProjects}
        />
        <PrivateRoute
          exact
          path="/dashboard/projects/edit"
          component={EditProjects}
        />
        <PrivateRoute exact path="/dashboard/trends" component={Trends} />
        <PrivateRoute exact path="/" component={MainDashboard} />

        <Fab
          className={classes.fab}
          onClick={event => this.handlePopoverClick(event)}
        >
          <CallToActionIcon />
          <div className={classes.badge}>4</div>
        </Fab>
        <Popover
          open={this.state.isPopoverOpen}
          onClose={() => this.handleClosePopover()}
          anchorEl={this.state.popoverAnchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          classes={{
            paper: classes.popover
          }}
        >
          <div className={classes.popoverHeader}>
            <Typography
              variant="body2"
              onClick={() => this.handleCheckAllBagItems()}
              className={classes.checkAllBtn}
            >
              {this.state.allBagItemsChecked ? "حذف همه" : "انتخاب همه"}
            </Typography>
            <Typography
              variant="body2"
              style={{ fontSize: 12, fontWeight: "bold" }}
            >
              خورجین من
            </Typography>
            <IconButton onClick={() => this.handleClosePopover()}>
              <CloseIcon className={classes.closeIcon} />
            </IconButton>
          </div>
          <List component="nav" className={classes.popoverList}>
            {this.props.myBag.map((item, index) => {
              return (
                <ListItem
                  className={classNames(classes.popoverListItem)}
                  key={index}
                  button
                >
                  <Checkbox
                    value={item.name}
                    checked={item.selected}
                    color="primary"
                    className={classes.popoverCheckbox}
                    onChange={() => this.handleClickBagItem(item)}
                  />
                  <Typography
                    variant="body2"
                    className={classes.popoverListItemText}
                  >
                    {item.name}
                  </Typography>
                </ListItem>
              );
            })}
          </List>
          <div className={classes.popoverActions}>
            <Button
              color="primary"
              className={classes.newTrackerBtn}
              onClick={() => this.handleClickAddTrackers()}
            >
              ساخت ردیاب
            </Button>
            <Button
              color="primary"
              className={classes.newAnalysisBtn}
              onClick={() => this.handleClickAddAnalysis()}
            >
              ساخت تحلیل
            </Button>
          </div>
        </Popover>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left"
          }}
          open={this.props.isSnackbarOpen}
          autoHideDuration={6000}
          onClose={() => this.handleCloseSnackbar()}
        >
          <SnackbarContent
            className={classes.success}
            aria-describedby="client-snackbar"
            message={
              <span id="client-snackbar" className={classes.message}>
                <CheckCircleIcon
                  className={classNames(classes.icon, classes.iconVariant)}
                />
                {this.props.snackbarMessage}
              </span>
            }
            action={[
              <IconButton
                key="close"
                aria-label="Close"
                color="inherit"
                onClick={() => this.handleCloseSnackbar()}
              >
                <CloseIcon className={classes.icon} />
              </IconButton>
            ]}
          />
        </Snackbar>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log("dashboard map state");
  console.log(state);
  const {
    changeSnackbarStatus,
    trackers,
    selectedTrackerDashboardItem
  } = state;
  return {
    isSnackbarOpen: changeSnackbarStatus.isSnackbarOpen,
    snackbarMessage: changeSnackbarStatus.snackbarMessage,
    selectedPage: trackers.selectedPage,
    selectedTrackerDashboardItem: trackers.selectedTrackerDashboardItem,
    myBag: selectedTrackerDashboardItem.myBag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSnackbarStatus: data => {
      dispatch(DashboardActions.changeSnackbarStatus(data));
    },
    selectPage: page => dispatch(DashboardActions.selectPage(page)),
    goToAddTrafficAnalysis: () =>
      dispatch(TrafficAnalysisActions.goToAddTrafficAnalysis()),
    goToAddTracker: () => dispatch(TrackersActions.goToAddTracker()),
    changeBagItemStatus: item =>
      dispatch(DashboardActions.changeBagItemStatus(item)),
    checkAllBagItemStatus: status =>
      dispatch(DashboardActions.checkAllBagItemStatus(status))
  };
};

const DashboardPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Dashboard));
export { DashboardPage as Dashboard };
