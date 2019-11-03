import React, {unstable_Profiler} from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import classNames from "classnames";
import {
  Typography,
  Container,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@material-ui/core";
import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Label,
  Tooltip,
  Cell,
  AreaChart,
  Area,
  PieChart,
  Pie,
  linearGradient
} from "recharts";
import {connect} from "react-redux";
import ReactExport from "react-data-export";
import moment from "moment";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CommentIcon from "@material-ui/icons/Comment";
import BootstrapTooltip from "./BSTooltip";
import ReactWordcloud from "react-wordcloud";
import {DashboardActions} from "../_actions"


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const drawerWidth = 240;

const dataSet1 = [
  {
    name: "Johson",
    amount: 30000,
    sex: "M",
    is_married: true
  },
  {
    name: "Monika",
    amount: 355000,
    sex: "F",
    is_married: false
  },
  {
    name: "John",
    amount: 250000,
    sex: "M",
    is_married: false
  },
  {
    name: "Josef",
    amount: 450500,
    sex: "M",
    is_married: true
  }
];

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    marginBottom: 20
  },
  topNavbar: {
    marginTop: -3,
    padding: 0,
    marginBottom: 20
  },
  topNavbarTitleBox: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center"
  },
  topNavbarTitleText: {
    color: "#adb2b9",
    fontSize: 10
  },
  topNavbarSelectedTracker: {
    color: "#08080d",
    fontSize: 32
  },
  topNavbarMeta: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  instagramIconBtn: {
    color: "#fff",
    backgroundColor: "#da2b72",
    minWidth: 44,
    height: 44,
    borderRadius: 22,
    margin: "0px ",
    "&:hover": {
      opacity: 0.7,
      backgroundColor: "#da2b72"
    }
  },
  twitterIconBtn: {
    color: "#fff",
    backgroundColor: "#1da1f2",
    minWidth: 44,
    height: 44,
    borderRadius: 22,
    margin: "0px 10px",
    "&:hover": {
      opacity: 0.7,
      backgroundColor: "#1da1f2"
    }
  },
  metaDivider: {
    height: 20,
    width: 1,
    color: "#e4e8ed",
    margin: "0px 17px"
  },
  selectDateRange: {
    fontSize: 12,
    margin: theme.spacing(1),
    // margin: 8,
    paddingRight: 19,
    width: 156,
    backgroundColor: "#edf1f6",
    color: "#08080d",
    height: 44,
    borderRadius: 22,
    justifyContent: "right"
    // "&:hover": {
    //   backgroundColor: "#0500cb"
    // }
  },
  selectDateRangeIcon: {
    display: "flex",
    position: "absolute",
    left: "19px"
  },

  chartContainer: {
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 20
  },
  chartBox: {
    height: 150
  },
  avatar: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginBottom: 5,
    color: "#3c3c3c"
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    // direction: "rtl",
    flexGrow: 1,
    // padding: theme.spacing(3),
    marginRight: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  paper: {
    display: "flex",
    padding: 20
    // height: "35vh"
    // width: "40%vw"
  },
  columnPaper: {
    flexDirection: "column"
  },
  paperHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  paperHeaderGuideIcon: {
    color: "#adb2b9",
    "&:hover": {
      color: "#f29132",
      cursor: "pointer"
    }
  },

  topNavbarPaper: {
    borderRadius: 3,
    display: "flex",
    height: 94,
    paddingRight: 36,
    paddingLeft: 36
    // paddingTop: 18,

    // width: "40%vw"
  },

  chartTitleContainer: {
    marginTop: 30,
    marginBottom: 30
  },
  chartPaper: {
    display: "flex",
    flexDirection: "column",
    padding: 25
  },
  chartStatusPaper: {
    display: "flex",
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#f2f3fb",
    borderRadius: 3,
    boxShadow: "unset"
  },
  statusItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  statusIcon: {
    color: "#fc4c81",
    fontSize: 22,
    margin: "0px 20px"
  },
  statusText: {
    display: "flex",
    flexDirection: "column",
    fontSize: 22
  },
  statusTextMute: {
    color: "#adb2b9",
    fontSize: 10
  },

  leftToRight: {
    direction: "ltr"
  },
  chart: {
    height: "100%"
    // flexGrow: 1
  },
  chartActions: {
    display: "flex",
    width: 250,
    height: 30,
    borderRadius: 40,
    backgroundColor: "#edf1f6",
    color: "#adb2b9"
  },
  selectedChartAction: {
    width: 66,
    borderRadius: 40,
    backgroundColor: "#fff",
    color: "#000",
    position: "relative",
    boxShadow:
        "0 2px 10px 0 rgba(0, 0, 0, 0.03), 0 2px 5px 0 rgba(0, 0, 0, 0.12)"
  },
  chartTopActions: {
    display: "flex",
    justifyContent: "flex-end"
  },
  lists: {
    maxHeight: "100%",
    overflowY: "scroll",
    direction: "ltr",
    fontSize: "0.7em"
  },
  displayFlex: {
    display: "flex",
    flexDirection: "column"
  },
  smallText: {
    fontSize: "0.6em"
  },
  pR5: {
    paddingRight: 5
  },
  pT5: {
    paddingTop: 5
  },
  aboveChartIcon: {
    fontSize: "1.2em",
    paddingRight: 5,
    paddingTop: 5,
    color: "#00bfff"
  },
  aboveChartList: {
    paddingRight: 20
  },
  textRed: {
    color: "#ff3500"
  },
  textGreen: {
    color: "#207245"
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  slider: {
    width: "90%"
  },
  fieldsContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  tabs: {
    display: "flex",
    width: "75%",
    margin: "0px auto"
  },
  listItem: {
    heigth: 44,
    width: 226,
    "&:hover": {
      color: "#4753ff",
      cursor: "pointer"
    }
  },
  textCenter: {
    textAlign: "center",
    fontSize: 14
  },
  selectedTab: {
    color: "#3340ff",
    "&::after": {
      content: `""`,
      position: "absolute",
      bottom: 0,
      left: "50%",
      width: 6,
      height: 6,
      background: "#4753ff",
      borderRadius: "50%"
    }
  },
  showMoreFields: {
    fontSize: 12,
    margin: theme.spacing(1),
    // margin: 8,
    paddingRight: 19,
    width: 240,
    backgroundColor: "#fff",
    color: "#08080d",
    height: 37,
    borderRadius: 19,
    justifyContent: "right",
    border: "1px solid #979797"

    // "&:hover": {
    //   backgroundColor: "#0500cb"
    // }
  },
  showMoreFieldsIcon: {
    display: "flex",
    position: "absolute",
    left: "19px"
  },
  botPaper: {
    height: 470
  },
  emotionsContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  emotionStats: {
    display: "flex",
    marginBottom: 35,
    width: 150
  },
  negativeEmotion: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  negativePercent: {
    position: "relative",
    width: 45,
    fontWeight: "bold",
    textAlign: "left",
    "&::after": {
      content: `""`,
      position: "absolute",
      right: 0,
      width: 16,
      height: 16,
      background: "#ec373c",
      borderRadius: "50%"
    }
  },
  negativeText: {
    fontSize: 10
  },
  positiveEmotion: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  positivePercent: {
    position: "relative",
    width: 45,
    fontWeight: "bold",
    textAlign: "right",
    "&::after": {
      content: `""`,
      position: "absolute",
      left: 0,
      width: 16,
      height: 16,
      background: "#03d588",
      borderRadius: "50%"
    }
  },
  positiveText: {
    fontSize: 10
  },
  showTextEmotion: {
    fontSize: 12,
    margin: theme.spacing(1),
    // margin: 8,
    paddingRight: 19,
    width: 240,
    backgroundColor: "#fff",
    color: "#08080d",
    height: 37,
    borderRadius: 19,
    justifyContent: "right",
    border: "1px solid #979797"

    // "&:hover": {
    //   backgroundColor: "#0500cb"
    // }
  },
  showTextEmotionIcon: {
    display: "flex",
    position: "absolute",
    left: "19px"
  }
});


const emotionDatas = [
  {
    name: "حس مثبت",
    value: 58,
    color: "#03d588"
  },
  {
    name: "حس منفی",
    value: 42,
    color: "#ec373c"
  }
];

const data = [
  {
    date: moment()
    .subtract(29, "days")
    .format("MMM Do"),
    posts: 100,
    dayOfMonth: 1,
    color: "#a9da79"
  },
  {
    date: moment()
    .subtract(28, "days")
    .format("MMM Do"),
    posts: 150,
    dayOfMonth: 2,
    color: "#95eb56"
  },
  {
    date: moment()
    .subtract(27, "days")
    .format("MMM Do"),
    posts: 200,
    dayOfMonth: 3,
    color: "#91dde2"
  },
  {
    date: moment()
    .subtract(26, "days")
    .format("MMM Do"),
    posts: 321,
    dayOfMonth: 4,
    color: "#0a1b35"
  },
  {
    date: moment()
    .subtract(25, "days")
    .format("MMM Do"),
    posts: 100,
    dayOfMonth: 5,
    color: "#e9432f"
  },
  {
    date: moment()
    .subtract(24, "days")
    .format("MMM Do"),
    posts: 533,
    dayOfMonth: 6,
    color: "#72e25f"
  },
  {
    date: moment()
    .subtract(23, "days")
    .format("MMM Do"),
    posts: 423,
    dayOfMonth: 7,
    color: "#8b8bf6"
  },
  {
    date: moment()
    .subtract(22, "days")
    .format("MMM Do"),
    posts: 324,
    dayOfMonth: 8,
    color: "#b2ab52"
  },
  {
    date: moment()
    .subtract(21, "days")
    .format("MMM Do"),
    posts: 423,
    dayOfMonth: 9,
    color: "#c35fd5"
  },
  {
    date: moment()
    .subtract(20, "days")
    .format("MMM Do"),
    posts: 312,
    dayOfMonth: 10,
    color: "#39c4e3"
  },
  {
    date: moment()
    .subtract(19, "days")
    .format("MMM Do"),
    posts: 123,
    dayOfMonth: 11,
    color: "#e03673"
  },
  {
    date: moment()
    .subtract(18, "days")
    .format("MMM Do"),
    posts: 253,
    dayOfMonth: 12,
    color: "#36fb59"
  },
  {
    date: moment()
    .subtract(17, "days")
    .format("MMM Do"),
    posts: 397,
    dayOfMonth: 13,
    color: "#c80b8a"
  },
  {
    date: moment()
    .subtract(16, "days")
    .format("MMM Do"),
    posts: 456,
    dayOfMonth: 14,
    color: "#67df60"
  },
  {
    date: moment()
    .subtract(15, "days")
    .format("MMM Do"),
    posts: 575,
    dayOfMonth: 15,
    color: "#9bcc4c"
  },
  {
    date: moment()
    .subtract(14, "days")
    .format("MMM Do"),
    posts: 423,
    dayOfMonth: 16,
    color: "#78bef0"
  },
  {
    date: moment()
    .subtract(13, "days")
    .format("MMM Do"),
    posts: 100,
    dayOfMonth: 17,
    color: "#dcffaa"
  },
  {
    date: moment()
    .subtract(12, "days")
    .format("MMM Do"),
    posts: 222,
    dayOfMonth: 18,
    color: "#a9da79"
  },
  {
    date: moment()
    .subtract(11, "days")
    .format("MMM Do"),
    posts: 321,
    dayOfMonth: 19,
    color: "#91dde2"
  },
  {
    date: moment()
    .subtract(10, "days")
    .format("MMM Do"),
    posts: 123,
    dayOfMonth: 20,
    color: "#0a1b35"
  },
  {
    date: moment()
    .subtract(9, "days")
    .format("MMM Do"),
    posts: 99,
    dayOfMonth: 21,
    color: "#e9432f"
  },
  {
    date: moment()
    .subtract(8, "days")
    .format("MMM Do"),
    posts: 654,
    dayOfMonth: 22,
    color: "#72e25f"
  },
  {
    date: moment()
    .subtract(7, "days")
    .format("MMM Do"),
    posts: 122,
    dayOfMonth: 23,
    color: "#8b8bf6"
  },
  {
    date: moment()
    .subtract(6, "days")
    .format("MMM Do"),
    posts: 344,
    dayOfMonth: 24,
    color: "#b2ab52"
  },
  {
    date: moment()
    .subtract(5, "days")
    .format("MMM Do"),
    posts: 244,
    dayOfMonth: 25,
    color: "#c35fd5"
  },
  {
    date: moment()
    .subtract(4, "days")
    .format("MMM Do"),
    posts: 354,
    dayOfMonth: 26,
    color: "#39c4e3"
  },
  {
    date: moment()
    .subtract(3, "days")
    .format("MMM Do"),
    posts: 421,
    dayOfMonth: 27,
    color: "#e03673"
  },
  {
    date: moment()
    .subtract(2, "days")
    .format("MMM Do"),
    posts: 124,
    dayOfMonth: 28,
    color: "#36fb59"
  },
  {
    date: moment()
    .subtract(1, "days")
    .format("MMM Do"),
    posts: 123,
    dayOfMonth: 29,
    color: "#36fb59"
  },
  {
    date: moment().format("MMM Do"),
    posts: 456,
    dayOfMonth: 30,
    color: "#36fb59"
  }
];

const words = [
  {
    text: "دونالد",
    value: 20
  },
  {
    text: "تحریم",
    value: 10
  },
  {
    text: "ظریف",
    value: 10
  },
  {
    text: "مردم",
    value: 13
  },
  {
    text: "آمریکا",
    value: 13
  },
  {
    text: "چین",
    value: 10
  },
  {
    text: "ایران",
    value: 8
  },
  {
    text: "تغییر",
    value: 13
  },
  {
    text: "خرید",
    value: 13
  },
  {
    text: "ما",
    value: 10
  },
  {
    text: "کاخ",
    value: 10
  },
  {
    text: "تعرفه",
    value: 10
  },
  {
    text: "جدید",
    value: 8
  },
  {
    text: "گفت",
    value: 10
  },
  {
    text: "رسانه",
    value: 10
  },
  {
    text: "گرینلند",
    value: 13
  }
];

const data01 = [
  {
    name: "Group A",
    value: 400
  },
  {
    name: "Group B",
    value: 300
  },
  {
    name: "Group C",
    value: 300
  },
  {
    name: "Group D",
    value: 200
  },
  {
    name: "Group E",
    value: 278
  },
  {
    name: "Group F",
    value: 189
  }
];

class TrackerDashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words,
      data,
      data01,
      emotionDatas,
      trackersSliderValue: [1, 30],
      minSlider: 1,
      maxSlider: 40,
      selectedTab: "keyWords",
      selectedChartAction: "day"
    };

    this.handleSelectTab = this.handleSelectTab.bind(this);
    this.handleSelectChartAction = this.handleSelectChartAction.bind(this);
  }

  brushChangeHandler = event => {
    var new_data = this.state.data;
    new_data.map(
        (item, index) => (item.posts = Math.floor(Math.random() * (1000 + 1)))
    );
    this.setState({
      data: new_data
    });
  };

  trackersSliderChangeHandler = (event, newValue) => {
    this.setState({
      trackersSliderValue: newValue
    });
  };

  trackersSliderChangeCommittedHandler = (event, newValue) => {
    var newMin = newValue[0] - 10;
    if (newMin < 1) {
      newMin = 1;
    }

    var newMax = newValue[1] + 10;
    if (newMax > 360) {
      newMax = 360;
    } else if (newMax < 30) {
      newMax = 30;
    }

    console.log(newMin, newMax);

    this.setState({
      minSlider: newMin,
      maxSlider: newMax
    });
  };

  trackerSliderButtonHandler = event => {
    var new_data = [];
    for (var i = 30; i >= 1; i--) {
      var d = {
        date: moment()
        .subtract(i, "days")
        .format("MMM Do"),
        posts: Math.floor(Math.random() * (1000 + 1)),
        color: "#36fb59"
      };
      new_data.push(d);
    }
    this.setState({
      data: new_data
    });
  };

  handleSelectTab = tab => {
    this.setState({
      selectedTab: tab
    });
  };

  handleSelectChartAction = action => {
    this.setState({
      selectedChartAction: action
    });
  };

  render() {
    const {classes} = this.props;
    return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container className={classes.topNavbar}>
            <Grid container className={classes.root}>
              <Grid item md={12} sm={12} xs={12}>
                <Paper className={classes.topNavbarPaper}>
                  <div className={classes.topNavbarTitleBox}>
                    <Typography
                        variant="body1"
                        className={classes.topNavbarTitleText}
                    >
                      ردیاب:
                    </Typography>
                    <Typography
                        variant="body1"
                        className={classes.topNavbarSelectedTracker}
                    >
                      {this.props.trackers.map((item, index) => {
                        return item.id == this.props.selectedTracker
                            ? item.name
                            : "";
                      })}
                    </Typography>
                  </div>
                  <div className={classes.topNavbarMeta}>
                    <Button className={classes.instagramIconBtn}>
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button className={classes.twitterIconBtn}>
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Divider
                        orientation="vertical"
                        className={classes.metaDivider}
                    />
                    <Button color="primary" className={classes.selectDateRange}>
                      ۱ مرداد - ۱۹ مرداد
                      <div className={classes.selectDateRangeIcon}>
                        <i className="fas fa-chevron-down" />
                      </div>
                    </Button>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Container className={classes.chartContainer}>
            <Grid container className={classes.root}>
              <Grid item md={12} sm={12} xs={12}>
                <Paper className={classes.chartPaper}>
                  <Grid container className={classes.root}>
                    <Grid item md={12}>
                      <Paper className={classes.chartStatusPaper}>
                        <Grid container>
                          <Grid item md={3} className={classes.statusItem}>
                            <div className={classes.statusIcon}>
                              <ChatBubbleOutlineIcon fontSize="large" />
                            </div>
                            <div className={classes.statusText}>
                              3,157
                              <span className={classes.statusTextMute}>
                              پست‌ها
                            </span>
                            </div>
                          </Grid>
                          <Grid item md={3} className={classes.statusItem}>
                            <div className={classes.statusIcon}>
                              <PersonOutlineIcon fontSize="large" />
                            </div>
                            <div className={classes.statusText}>
                              2,988
                              <span className={classes.statusTextMute}>
                              حساب‌ها
                            </span>
                            </div>
                          </Grid>
                          <Grid item md={3} className={classes.statusItem}>
                            <div className={classes.statusIcon}>
                              <FavoriteBorderIcon fontSize="large" />
                            </div>
                            <div className={classes.statusText}>
                              765,456
                              <span className={classes.statusTextMute}>
                              لایک‌ها
                            </span>
                            </div>
                          </Grid>
                          <Grid item md={3} className={classes.statusItem}>
                            <div className={classes.statusIcon}>
                              <CommentIcon fontSize="large" />
                            </div>
                            <div className={classes.statusText}>
                              23,642
                              <span className={classes.statusTextMute}>
                              کامنت‌ها
                            </span>
                            </div>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.chartTitleContainer}>
                    <Grid item md={6} className={classes.chartTitle}>
                      <Typography
                          variant="subtitle1"
                          className={classes.chartTitleText}
                      >
                        پست‌های ارسالی مرتبط با ردیاب
                      </Typography>
                    </Grid>
                    <Grid item md={6} className={classes.chartTopActions}>
                      <List
                          component="div"
                          disablePadding
                          className={classes.chartActions}
                      >
                        <ListItem
                            className={classNames(
                                classes.listItem,
                                "" +
                                (this.state.selectedChartAction == "day"
                                    ? classes.selectedChartAction
                                    : "")
                            )}
                            onClick={() => this.handleSelectChartAction("day")}
                        >
                          <ListItemText
                              primary="روز"
                              className={classNames(classes.textCenter)}
                          />
                        </ListItem>
                        <ListItem
                            className={classNames(
                                classes.listItem,
                                "" +
                                (this.state.selectedChartAction == "week"
                                    ? classes.selectedChartAction
                                    : "")
                            )}
                            onClick={() => this.handleSelectChartAction("week")}
                        >
                          <ListItemText
                              primary="هفته"
                              className={classNames(classes.textCenter)}
                          />
                        </ListItem>
                        <ListItem
                            className={classNames(
                                classes.listItem,
                                "" +
                                (this.state.selectedChartAction == "month"
                                    ? classes.selectedChartAction
                                    : "")
                            )}
                            onClick={() => this.handleSelectChartAction("month")}
                        >
                          <ListItemText
                              primary="ماه"
                              className={classNames(classes.textCenter)}
                          />
                        </ListItem>
                        <ListItem
                            className={classNames(
                                classes.listItem,
                                "" +
                                (this.state.selectedChartAction == "year"
                                    ? classes.selectedChartAction
                                    : "")
                            )}
                            onClick={() => this.handleSelectChartAction("year")}
                        >
                          <ListItemText
                              primary="سال"
                              className={classNames(classes.textCenter)}
                          />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                  <Grid container className={classes.chartBox}>
                    <Grid item md={12} className={classes.chart}>
                      <ResponsiveContainer
                          width="100%"
                          height="100%"
                          className={classes.leftToRight}
                      >
                        <AreaChart
                            // width={500}
                            height={150}
                            data={this.state.data.reverse()}
                            // margin={{top: 10, right: 20, left: 0, bottom: 0}}
                        >
                          <defs>
                            <linearGradient
                                id="color"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                              <stop
                                  offset="5%"
                                  stopColor="#4753ff"
                                  stopOpacity={1}
                              />
                              <stop
                                  offset="95%"
                                  stopColor="#4753ff"
                                  stopOpacity={0}
                              />
                            </linearGradient>
                          </defs>
                          {/* <CartesianGrid strokeDasharray="3 3" /> */}
                          <XAxis dataKey="dayOfMonth">
                            <Label value="تیر" position="right" offset={10} />
                          </XAxis>
                          <Tooltip />
                          <Area
                              type="monotone"
                              dataKey="posts"
                              stroke="#4753ff"
                              strokeWidth={3}
                              fillOpacity={1}
                              fill="url(#color)"
                          />
                          <YAxis orientation="right" />
                        </AreaChart>
                      </ResponsiveContainer>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
              <Grid item md={6} sm={12} xs={12}>
                <Paper
                    className={classNames(
                        classes.paper,
                        classes.columnPaper,
                        classes.botPaper
                    )}
                >
                  <div className={classes.paperHeader}>
                    <Typography variant="h6" className={classes.headerText}>
                      موضوعات مربوط
                    </Typography>
                    <div className={classes.paperHeaderGuideIcon}>
                      <BootstrapTooltip title="موضوعات مرتبط با ردیاب انتخابی که نشان دهنده تاثیرپذیری یک متن تستی برای نمایش این قابلیت است و باید توضیحات هر سکشن در این قسمت نمایش داده شود.">
                        <i className="far fa-lightbulb fa-lg"></i>
                      </BootstrapTooltip>
                    </div>
                  </div>
                  <Divider variant="fullWidth" />
                  <div className={classes.fieldsContent}>
                    <List component="div" disablePadding className={classes.tabs}>
                      <ListItem
                          className={classNames(
                              classes.listItem,
                              "" +
                              (this.state.selectedTab == "keyWords"
                                  ? classes.selectedTab
                                  : "")
                          )}
                          onClick={() => this.handleSelectTab("keyWords")}
                      >
                        <ListItemText
                            primary="کلمات کلیدی"
                            className={classNames(classes.textCenter)}
                        />
                      </ListItem>
                      <ListItem
                          className={classNames(
                              classes.listItem,
                              "" +
                              (this.state.selectedTab == "hashtags"
                                  ? classes.selectedTab
                                  : "")
                          )}
                          onClick={() => this.handleSelectTab("hashtags")}
                      >
                        <ListItemText
                            primary="هشتگ‌ها"
                            className={classNames(classes.textCenter)}
                        />
                      </ListItem>
                    </List>
                    <ReactWordcloud
                        options={{
                          colors: ["#3340ff"],
                          rotations: 3,
                          rotationAngles: [0],
                          fontSizes: [10, 20],
                          fontWeight: "bold"
                        }}
                        words={this.state.words}
                    />
                    <Button color="primary" className={classes.showMoreFields}>
                      مشاهده تمام موضوعات مرتبط
                      <div className={classes.showMoreFieldsIcon}>
                        <i className="fas fa-chevron-left" />
                      </div>
                    </Button>
                  </div>
                </Paper>
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <Paper
                    className={classNames(
                        classes.paper,
                        classes.columnPaper,
                        classes.botPaper
                    )}
                >
                  <div className={classes.paperHeader}>
                    <Typography variant="h6" className={classes.headerText}>
                      احساس‌سنج
                    </Typography>
                    <div className={classes.paperHeaderGuideIcon}>
                      <BootstrapTooltip placement="top" title="احساس‌سنج">
                        <i className="far fa-lightbulb fa-lg"></i>
                      </BootstrapTooltip>
                    </div>
                  </div>
                  <Divider variant="fullWidth" />
                  <ResponsiveContainer
                      width="100%"
                      className={classes.leftToRight}
                  >
                    <PieChart width={150}>
                      {emotionDatas.map((item, index) => {
                        const color = item.color;
                        return (
                            <defs key={index}>
                              <radialGradient
                                  id={"color" + index}
                                  x1="10"
                                  y1="10"
                                  x2="1"
                                  y2="1"
                              >
                                <stop
                                    offset="0%"
                                    stopColor={color}
                                    stopOpacity={0.5}
                                />
                                <stop
                                    offset="10%"
                                    stopColor={color}
                                    stopOpacity={0.75}
                                />
                                <stop
                                    offset="20%"
                                    stopColor={color}
                                    stopOpacity={1}
                                />
                              </radialGradient>
                            </defs>
                        );
                      })}
                      <Pie
                          data={this.state.emotionDatas}
                          dataKey="value"
                          nameKey="name"
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={74}
                          fill="#82ca9d"
                          startAngle={90}
                          endAngle={450}
                      >
                        {emotionDatas.map((item, index) => {
                          const color = item.color;
                          return (
                              <Cell fill={"url(#color" + index + ")"} key={index} />
                          );
                        })}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className={classes.emotionsContent}>
                    <div className={classes.emotionStats}>
                      <div className={classes.negativeEmotion}>
                        <Typography
                            variant="body1"
                            className={classes.negativePercent}
                        >
                          {this.state.emotionDatas[1].value}%
                        </Typography>
                        <Typography variant="body1" className={classes.negativeText}>
                          {this.state.emotionDatas[1].name}
                        </Typography>
                      </div>
                      <div className={classes.positiveEmotion}>
                        <Typography
                            variant="body1"
                            className={classes.positivePercent}
                        >
                          {this.state.emotionDatas[0].value}%
                        </Typography>
                        <Typography variant="body1" className={classes.positiceText}>
                          {this.state.emotionDatas[0].name}
                        </Typography>
                      </div>
                    </div>
                    <Button color="primary" className={classes.showTextEmotion}>
                      مشاهده احساس موجود در متن
                      <div className={classes.showTextEmotionIcon}>
                        <i className="fas fa-chevron-left" />
                      </div>
                    </Button>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
    );
  }
}

TrackerDashboardContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const {selectedTrackerDashboardItem} = state;
  return {
    trackers: selectedTrackerDashboardItem.trackers,
    selectedTracker: selectedTrackerDashboardItem.selectedTracker,
    selectedTrackerDashboardItem:selectedTrackerDashboardItem.selectedTrackerDashboardItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSelectedTracker: id => {dispatch(DashboardActions.changeSelectedTracker(id));
    }
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles, {withTheme: true})(TrackerDashboardContainer));