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
  // PostsActions
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
    width: "100%",
    minHeight: "100vh",
    backgroundColor: "#fff"
  },
  root: {
    display: "flex",
    flexGrow: 1
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
    paddingTop: 10,
    paddingBottom: 40
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
    color: "#a2a5a9",
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
    height: 180,
    position: "relative"
  },
  chevronDownIcon: {
    display: "flex",
    position: "absolute",
    left: "19px",
    color: "#08080d"
  },
  socialMediaIcon: {
    width: 44,
    height: 44,
    marginLeft: 20,
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "solid 5px rgba(0, 0, 0, 0.02)",
    borderRadius: 22,
    backgroundColor: "#edf1f6",
    color: "rgba(8, 8, 13, 0.5)"
  },
  box: {
    width: "100%",
    height: 180,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    border: "solid 2px #e4e8ed"
  },
  textMute: {
    color: "#adb2b9"
  },
  queriesContainer: {
    borderRadius: 3,
    border: "solid 2px #e4e8ed",
    padding: 14
  },
  queriesItem: {
    width: "100%",
    height: 44,
    position: "relative",
    borderRadius: 3,
    backgroundColor: "#edf1f6",
    border: "none",
    padding: "0px 22px",
    color: "#a2a5a9",
    display: "flex",
    justifyContent: "right",
    "&::placeholder": {
      color: "#a2a5a9"
    }
  },
  addIcon: {
    display: "flex",
    position: "absolute",
    left: "19px",
    fontSize: "0.75em",
    color: "rgba(8, 8, 13, 0.33)"
  },
  textAreaInput: {
    width: "100%",
    height: 180,
    resize: "none",
    position: "relative",
    borderRadius: 22,
    backgroundColor: "#edf1f6",
    border: "none",
    padding: "8px 22px",
    color: "#a2a5a9",
    display: "flex",
    justifyContent: "right",
    "&::placeholder": {
      color: "#a2a5a9"
    }
  },
  uploadBox: {
    width: "100%",
    height: 180,
    resize: "none",
    position: "relative",
    borderRadius: 22,
    backgroundColor: "#edf1f6",
    border: "none",
    padding: "0px 22px",
    color: "#a2a5a9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  uploadBtn: {
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
  socialIconBox: {
    display: "flex",
    flexDirection: "row"
  },

  label: {
    fontSize: 12
  },
  dayIsSelected: {
    color: "#08080d"
  }
});

class AddPosts extends React.Component {
  constructor(props) {
    super(props);
    console.log("add trackers constructor");
    console.log(props);
    this.state = {
      isCalenderOpen: false,
      calenderAnchorEl: null,

      selectedDay: {
        from: null,
        to: null
      },
      isDaySelected: false
    };
  }

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
      addTrafficAnalysis: {
        selectedDay: day,
        isDaySelected: true
      }
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="md" className={classes.container}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item md={6} sm={6} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2">
                    متن پست مورد نظر برای انتشار را وارد کنید
                  </Typography>
                </div>
                <textarea
                  type="text"
                  className={classes.textAreaInput}
                  multiline={true}
                  rows="4"
                  placeholder="متن پست"
                ></textarea>
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2">
                    هشتگ مرتبط با پست را وارد کنید
                  </Typography>
                </div>
                <div className={classes.uploadBox}>
                  <Button color="primary" className={classes.uploadBtn}>
                    آپلود تصویر
                  </Button>
                </div>
              </Grid>

              <Grid item md={6} sm={6} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2">
                    هشتگ مرتبط با پست را وارد کنید
                  </Typography>
                </div>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="هشتگ‌ها"
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2">
                    زمان ارسال پست را انتحاب کنید
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
              <Grid item md={6} sm={6} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2">
                    انتخاب شبکه اجتماعی برای پست
                  </Typography>
                </div>
                <div className={classes.socialIconBox}>
                  <IconButton className={classes.socialMediaIcon}>
                    <i className="fab fa-instagram fa-sm"></i>
                  </IconButton>
                  <IconButton className={classes.socialMediaIcon}>
                    <i className="fab fa-twitter fa-sm"></i>
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}

AddPosts.propTypes = {};

const mapStateToProps = state => {
  const { trackers } = state;
  console.log("trackers map state");
  return {
    trackers: trackers.trackers,
    selectedTracker: trackers.selectedTracker,
    selectedTrackersType: trackers.selectedTrackersType,

    addTracker: trackers.addTracker,
    projects: trackers.projects
    // addPost: trackers.addPost
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTracker: id => dispatch(DashboardActions.selectTracker(id)),
    selectPage: page => dispatch(DashboardActions.selectPage(page))
    // changeAddPost: data => dispatch(PostsActions.changeAddPost(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(AddPosts));
