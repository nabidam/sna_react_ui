import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import {
  Typography,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
  Popover,
  ListItemIcon
} from "@material-ui/core";
import { connect } from "react-redux";
import {
  DashboardActions,
  TrackersActions,
  TrafficAnalysisActions
} from "../_actions";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import PauseIcon from "@material-ui/icons/Pause";
import ClearIcon from "@material-ui/icons/Clear";
import CheckIcon from "@material-ui/icons/Check";
import MapComponent from "./MapComponent";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const months = [
  "",
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند"
];

const styles = theme => ({
  wrapper: {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#fff"
  },
  root: {
    display: "flex",
    flexGrow: 1,
    marginBottom: 20
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    height: 80,
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    // direction: "rtl",
    flexGrow: 1,
    // padding: theme.spacing(3),
    marginRight: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },

  container: {
    paddingTop: 10
  },
  labelBox: {
    display: "flex",
    flexDirection: "row",
    padding: "20px 0px"
  },
  input: {
    width: "100%",
    height: 44,
    position: "relative",
    borderRadius: 22,
    backgroundColor: "#edf1f6",
    border: "none",
    padding: "0px 22px",
    color: "#08080d",
    display: "flex",
    justifyContent: "right",
    "&::placeholder": {
      color: "#a2a5a9"
    }
  },
  bulbIcon: {
    width: 22,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#adb2b9"
  },
  map: {
    width: "100%",
    height: "100%"
  },
  mapBox: {
    border: "2px solid #e4e8ed",
    borderRadius: 3,
    height: 180,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  mapDiv: {
    height: "100%",
    width: "100%"
  },
  chevronDownIcon: {
    display: "flex",
    position: "absolute",
    left: "19px",
    color: "#08080d"
  },

  mapOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    opacity: "0.4"
  },
  changeMapBtn: {
    width: 170,
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

  label: {
    fontSize: 12
  },
  dayIsSelected: {
    color: "#08080d"
  },

  mapBoxEnable: {
    borderColor: "#4753ff"
  }
});

class EditTrafficAnalysis extends React.Component {
  constructor(props) {
    super(props);
    console.log("edit traffic analysis constructor");
    console.log(props);
    this.state = {
      isLocationEnable: false,
      mapCenter: [51.4124, 35.7325],

      isCalenderOpen: false,
      calenderAnchorEl: null,

      selectedDay: {
        from: null,
        to: null
      },
      isDaySelected: false,

      trafficAnalysisName: "",

      editableTrafficAnalysis: null,
      editableTrafficAnalysisName: ""
    };
  }

  handleClickChangeMap = () => {
    var mapOverlay = document.getElementById("map-overlay");
    mapOverlay.parentNode.removeChild(mapOverlay);
    var mapBtn = document.getElementById("map-btn");
    mapBtn.parentNode.removeChild(mapBtn);
    var mapBox = document.getElementById("map-box");
    mapBox.style.borderColor = "#4753ff";
  };

  handleCalenderClick = event => {
    this.setState({
      calenderAnchorEl: event.currentTarget,
      isCalenderOpen: Boolean(event.currentTarget)
    });
  };

  handleCloseCalender = () => {
    this.setState({
      calenderAnchorEl: null,
      isCalenderOpen: false
    });
  };

  handleSelectedDay = day => {
    // console.log(day);
    this.setState({
      selectedDay: day,
      isDaySelected: true,
      editableTrafficAnalysis: {
        ...this.state.editableTrafficAnalysis,
        selectedDay: day,
        isDaySelected: true
      }
    });
    this.props.changeEditableTrafficAnalysis({
      ...this.state.editableTrafficAnalysis,
      selectedDay: day,
      isDaySelected: true
    });
  };

  handleChangeName = e => {
    this.setState({
      editableTrafficAnalysisName: e.target.value,
      editableTrafficAnalysis: {
        ...this.state.editableTrafficAnalysis,
        name: e.target.value
      }
    });
    this.props.changeEditableTrafficAnalysis({
      ...this.state.editableTrafficAnalysis,
      name: e.target.value
    });
  };

  componentDidMount = () => {
    this.setState({
      isLocationEnable: this.props.editableTrafficAnalysis.location
        .isLocationEnable,
      isMapChangable: this.props.editableTrafficAnalysis.location
        .isLocationEnable,
      mapCenter: this.props.editableTrafficAnalysis.location.center,

      selectedProject: this.props.editableTrafficAnalysis.selectedProject,

      selectedDay: this.props.editableTrafficAnalysis.selectedDay,
      isDaySelected: this.props.editableTrafficAnalysis.isDaySelected,

      editableTrafficAnalysis: this.props.editableTrafficAnalysis,
      editableTrafficAnalysisName: this.props.editableTrafficAnalysis.name
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="xs" className={classes.container}>
            <Grid container className={classes.root} spacing={4}>
              <Grid item md={12} sm={12} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2">نام تحلیل</Typography>
                </div>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="وارد کردن نام تحلیل"
                  value={this.state.editableTrafficAnalysisName}
                  onChange={e => this.handleChangeName(e)}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2" className={classes.label}>
                    فواصل زمانی ردیاب خود را انتخاب کنید
                  </Typography>
                </div>
                <Button
                  className={classNames(
                    classes.input,
                    this.state.isDaySelected ? classes.dayIsSelected : ""
                  )}
                  onClick={event => this.handleCalenderClick(event)}
                >
                  {this.state.isDaySelected == false
                    ? "انتخاب بازه زمانی"
                    : this.state.selectedDay.from.day +
                      " " +
                      months[this.state.selectedDay.from.month] +
                      " " +
                      this.state.selectedDay.from.year +
                      " - " +
                      (this.state.selectedDay.to
                        ? this.state.selectedDay.to.day +
                          " " +
                          months[this.state.selectedDay.to.month] +
                          " " +
                          this.state.selectedDay.to.year
                        : "")}
                  <div className={classes.chevronDownIcon}>
                    <i className="fas fa-chevron-down" />
                  </div>
                </Button>
                <Popover
                  open={this.state.isCalenderOpen}
                  onClose={() => this.handleCloseCalender()}
                  anchorEl={this.state.calenderAnchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  classes={{
                    paper: classes.calenderPopover
                  }}
                >
                  <Calendar
                    value={this.state.selectedDay}
                    onChange={day => this.handleSelectedDay(day)}
                    shouldHighlightWeekends
                    isPersian
                  />
                </Popover>
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2" className={classes.label}>
                    محدوده جغرافیایی که می‌خواهید تحلیل ترافیکی شود را انتخاب
                    کنید
                  </Typography>
                </div>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="نام محدوده مورد نظر"
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <div
                  className={classNames(
                    classes.mapBox,
                    this.state.isMapChangable ? classes.mapBoxEnable : ""
                  )}
                  id="map-box"
                >
                  <MapComponent center={this.state.mapCenter} />
                  <div id="map-overlay" className={classes.mapOverlay}></div>
                  {this.state.isMapChangable ? (
                    ""
                  ) : (
                    <div>
                      <div
                        id="map-overlay"
                        className={classes.mapOverlay}
                      ></div>
                      <Button
                        id="map-btn"
                        color="primary"
                        className={classes.changeMapBtn}
                        onClick={() => this.handleClickChangeMap()}
                      >
                        انتخاب محدوده
                      </Button>
                    </div>
                  )}
                </div>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}

EditTrafficAnalysis.propTypes = {};

const mapStateToProps = state => {
  const { trackers } = state;
  console.log("trackers map state");
  console.log(state);
  console.log("xxxxxx");
  return {
    trackers: trackers.trackers,
    selectedTracker: trackers.selectedTracker,
    selectedTrackersType: trackers.selectedTrackersType,

    addTracker: trackers.addTracker,
    projects: trackers.projects,
    editableTrafficAnalysis: trackers.editableTrafficAnalysis
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTracker: id => dispatch(DashboardActions.selectTracker(id)),
    selectPage: page => dispatch(DashboardActions.selectPage(page)),
    changeEditableTrafficAnalysis: data =>
      dispatch(TrafficAnalysisActions.changeEditableTrafficAnalysis(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(EditTrafficAnalysis));
