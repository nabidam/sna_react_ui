import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import classNames from "classnames";
import {
  CssBaseline,
  Snackbar,
  SnackbarContent,
  IconButton
} from "@material-ui/core";
import Sidebar from "./Sidebar";
import {connect} from "react-redux";
import {DashboardActions} from "../_actions";
import {green} from "@material-ui/core/colors";
import {PrivateRoute} from "../_components";
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

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1
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
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log("dashboard constructor")
    console.log(props)
    this.handleCloseSnackbar=this.handleCloseSnackbar.bind(this);
  }

  handleCloseSnackbar = () => {
    this.props.changeSnackbarStatus({
      open: false,
      msg: ""
    });
  };

  render() {
    const {classes} = this.props;

    console.log("dashboard render");
    console.log(localStorage.getItem('user'));
    console.log(this.props);
    return (
        <div className={classes.root}>
          <CssBaseline />
          {/*this.props.selectedPage == "" ? <Header /> : <SecondHeader />*/}
          <SecondHeader />
          {/* <PrivateRoute exact path="/dashboard/tracker" component={SecondHeader} />
          <PrivateRoute  exact path="/" component={Header} />*/}
          {/* <Header /> */}
          {this.props.selectedTrackerDashboardItem != null ? (
              <PrivateRoute exact path="/dashboard/trackers" component={TrackersSidebar} />
          ) : (
              ""
          )}
          <PrivateRoute exact path="/" component={Sidebar} />
          {/* <Sidebar /> */}
          <PrivateRoute exact path="/dashboard/add-tracker" component={AddTracker} />
          {this.props.selectedTrackerDashboardItem == null ? (
              <PrivateRoute exact path="/dashboard/trackers" component={Trackers} />
          ) : (
              <PrivateRoute exact path="/dashboard/trackers" component={TrackersDashboard} />
          )}
          <PrivateRoute exact path="/dashboard/traffic-analysis" component={TrafficAnalysis} />
          <PrivateRoute exact path="/dashboard/influencers" component={Influencers} />
          <PrivateRoute exact path="/dashboard/accounts" component={Accounts} />
          <PrivateRoute exact path="/dashboard/projects" component={Projects} />
          <PrivateRoute exact path="/dashboard/trends" component={Trends} />
          <PrivateRoute exact path="/" component={MainDashboard} />

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
  console.log("dashboard map state")
  console.log(state)
  const {changeSnackbarStatus, lastTrackers, selectedTrackerDashboardItem} = state;
  return {
    isSnackbarOpen: changeSnackbarStatus.isSnackbarOpen,
    snackbarMessage: changeSnackbarStatus.snackbarMessage,
    selectedPage: lastTrackers.selectedPage,
    selectedTrackerDashboardItem: selectedTrackerDashboardItem.selectedTrackerDashboardItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
      changeSnackbarStatus: data => {
      dispatch(DashboardActions.changeSnackbarStatus(data));
    }
  };
};

const DashboardPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles, {withTheme: true})(Dashboard));
export {DashboardPage as Dashboard};
