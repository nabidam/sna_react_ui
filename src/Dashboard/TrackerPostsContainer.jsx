import React from "react";
import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Grid,
  Paper,
  Divider,
  Button,
} from "@material-ui/core";
import {connect} from "react-redux";
import {DashboardActions} from "../_actions";
import ReactExport from "react-data-export";
import ViewStreamOutlinedIcon from "@material-ui/icons/ViewStreamOutlined";
import ViewModuleOutlinedIcon from "@material-ui/icons/ViewModuleOutlined";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1
    // marginBottom: 20
  },
  topNavbar: {
    marginTop: -3,
    padding: 0
    // marginBottom: 20
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
    border: "solid 5px rgba(255, 255, 255, 0.85)",
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
    border: "solid 5px rgba(255, 255, 255, 0.85)",
    "&:hover": {
      opacity: 0.7,
      backgroundColor: "#1da1f2"
    }
  },
  twtterIconAvatar: {
    color: "#fff",
    backgroundColor: "#1da1f2",
    width: 16,
    height: 16,
    borderRadius: 22,
    position: "absolute",
    top: 2,
    left: 2,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
  avatar: {
    width: 44,
    height: 44,
    borderRadius: "50%"
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
    padding: 20,
    borderRadius: 0
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
    // borderRadius: 3,
    display: "flex",
    height: 94,
    paddingRight: 36,
    paddingLeft: 36
    // paddingTop: 18,

    // width: "40%vw"
  },
  postsPaper: {
    display: "flex",
    padding: "16px 36px"
  },
  chartStatusPaper: {
    display: "flex",
    padding: 25,
    justifyContent: "center",
    backgroundColor: "#f2f3fb",
    // borderRadius: 3,
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

  actions: {
    display: "flex",
    alignItems: "center"
  },
  searchInput: {
    width: 300,
    height: 44,
    borderRadius: 22,
    background: "#edf1f6",
    padding: 21,
    border: "1px solid #edf1f6",
    "&:focus": {
      background: "#fff",
      border: "1px solid #4753ff",
      outlineWidth: 0
    }
  },
  searchIconBtn: {
    color: "#fff",
    backgroundColor: "#4753ff",
    minWidth: 44,
    height: 44,
    borderRadius: 22,
    margin: "0px 15px",
    "&:hover": {
      opacity: 0.7,
      backgroundColor: "#4753ff"
    }
  },
  searchDivider: {
    height: 20,
    width: 1,
    color: "#e4e8ed",
    margin: "0px 10px"
  },
  sortBtnContainer: {
    flexGrow: 1
  },
  sortBtn: {
    fontSize: 14,
    color: "#08080d",
    backgroundColor: "#fff",
    minWidth: 100,
    height: 44,
    borderRadius: 22,
    margin: "0px 5px",
    padding: 10,
    justifyContent: "right",
    "&:hover": {
      opacity: 0.7,
      backgroundColor: "#edf1f6"
    }
  },
  sortIcon: {
    display: "flex",
    position: "absolute",
    left: "10px"
  }
  ,

  selectTableView: {
    display: "flex",
    flexDirection: "row",
    fontSize: 12,
    width: 91,
    justifyContent: "center",
    backgroundColor: "#edf1f6",
    color: "#08080d",
    margin: theme.spacing(1),
    height: 44,
    borderRadius: 22
  },
  selectTableViewIcon: {
    display: "flex",
    minWidth: "unset",
    borderRadius: 22,
    width: "30%",
    "&:hover": {
      backgroundColor: "#edf1f6"
    },
    "&:active": {
      backgroundColor: "#edf1f6"
    }
  },
  selectedView: {
    color: "#3340ff"
  },

  dividerFW: {
    width: "100%",
    height: 1,
    backgroundColor: "#e4e8ed"
  },

  table: {
    width: "100%"
  },
  tableHeader: {
    fontSize: 12,
    color: "#08080d"
  },

  negativeEmotion: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "&::after": {
      content: `""`,
      position: "absolute",
      width: 16,
      height: 16,
      background: "#ec373c",
      border: "solid 5px rgba(255, 255, 255, 0.85)",
      borderRadius: "50%"
    }
  },
  positiveEmotion: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "&::after": {
      content: `""`,
      position: "absolute",
      width: 16,
      height: 16,
      background: "#03d588",
      border: "solid 5px rgba(255, 255, 255, 0.85)",
      borderRadius: "50%"
    }
  },
  textMute: {
    color: "#adb2b9"
  },

  paginationBox: {
    marginBottom: 40
  },
  paginationLinks: {
    width: 250,
    height: 44,
    border: "solid 2px #e4e8ed",
    marginTop: 30,
    borderRadius: 22,
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  paginationLink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 8,
    width: 28,
    height: 28,
    borderRadius: "50%",
    "&:hover": {
      cursor: "pointer"
    }
  },
  activePaginationLink: {
    border: "solid 2px #3340ff",
    backgroundColor: "#d7d9ff"
  },
  paginationText: {
    textAlign: "center",
    color: "#adb2b9"
  },
  textNormal: {
    color: "#08080d",
    padding: "0 3px"
  },

  tableUsernamePart: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },

  tableRow: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#f2f3fb"
    }
  }
});

class TrackerPostsContainer extends React.Component {
  constructor(props) {
    super(props);
    console.log("tracker post container");
    console.log(props);

    this.state = {
      trackersSliderValue: [1, 30],
      minSlider: 1,
      maxSlider: 40,
      selectedView: "grid",
      rowHover: 0
    };
    console.log(this.state.selectedView);
    this.handleSelectView = this.handleSelectView.bind(this);
    this.handleHoverRow = this.handleHoverRow.bind(this);
    this.handleUnHoverRow = this.handleUnHoverRow.bind(this);
    this.trackersSliderChangeHandler = this.trackersSliderChangeHandler.bind(this);
  }

  handleHoverRow = id => {
    this.setState({
      rowHover: id
    });
  };
  handleUnHoverRow = () => {
    this.setState({
      rowHover: 0
    });
  };
  handleSelectView = view => {
    this.setState({
      selectedView: view
    });
  };

  trackersSliderChangeHandler = (event, newValue) => {
    this.setState({
      trackersSliderValue: newValue
    });
  };

  render() {
    const {classes} = this.props;
    console.log("tracker posts container render")
    console.log(
        (this.state.selectedView == "row"
            ? classes.selectedView
            : "")
    )
    return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container className={classes.topNavbar} square={true}>
            <Grid container className={classes.root}>
              <Grid item md={12} sm={12} xs={12}>
                <Paper className={classes.topNavbarPaper}>
                  <div className={classes.topNavbarTitleBox}>
                    <Typography
                        variant="p"
                        className={classes.topNavbarTitleText}
                    >
                      ردیاب:
                    </Typography>
                    <Typography
                        variant="p"
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
            <Grid container className={classes.root}>
              <Grid item md={12} sm={12} xs={12}>
                <Paper className={classes.postsPaper} square={true}>
                  <Grid container className={classes.root}>
                    <Grid item md={12} className={classes.actions}>
                      <input
                          type="text"
                          className={classes.searchInput}
                          placeholder="هشتگ و کلمات کلیدی"
                      />
                      <Button className={classes.searchIconBtn}>
                        <i className="fa fa-search fa-lg"></i>
                      </Button>

                      <Divider
                          orientation="vertical"
                          className={classes.searchDivider}
                      />
                      <div className={classes.sortBtnContainer}>
                      <Button className={classes.sortBtn}>
                        مرتب‌سازی
                        <div className={classes.sortIcon}>
                          <i className="fas fa-chevron-down" />
                        </div>
                      </Button>
                      </div>
                      <div color="primary" className={classes.selectTableView}>
                        <Button
                            className={classNames(
                                classes.selectTableViewIcon,
                                "" +
                                (this.state.selectedView == "row"
                                    ? classes.selectedView
                                    : "")
                            )}
                            onClick={() => this.handleSelectView("row")}
                        >
                          <ViewStreamOutlinedIcon />
                        </Button>
                        <Button
                            className={classNames(
                                classes.selectTableViewIcon,
                                "" +
                                (this.state.selectedView == "grid"
                                    ? classes.selectedView
                                    : "")
                            )}
                            onClick={() => this.handleSelectView("grid")}
                        >
                          <ViewModuleOutlinedIcon />
                        </Button>
                      </div>
                    </Grid>
                    <Divider variant="fullWidth" className={classes.dividerFW} />
                    <Grid item md={12} className={classes.tableGrid}>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell
                                align="right"
                                className={classes.tableHeader}
                                style={{width: "10%"}}
                            >
                              کاربری
                            </TableCell>
                            <TableCell
                                align="right"
                                className={classes.tableHeader}
                                style={{width: "42%"}}
                            >
                              پست
                            </TableCell>
                            <TableCell
                                align="center"
                                className={classes.tableHeader}
                                style={{width: "12%"}}
                            >
                              حس متن
                            </TableCell>
                            <TableCell
                                align="center"
                                className={classes.tableHeader}
                                style={{width: "14%"}}
                            >
                              قابلیت اشتراک
                            </TableCell>
                            <TableCell
                                align="center"
                                className={classes.tableHeader}
                                style={{width: "5%"}}
                            >
                              لایک
                            </TableCell>
                            <TableCell
                                align="center"
                                className={classes.tableHeader}
                                style={{width: "5%"}}
                            >
                              کامنت
                            </TableCell>
                            <TableCell
                                className={classes.tableHeader}
                                style={{width: "10%"}}
                            >
                              تاریخ
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {this.props.posts.map(row => (
                              <TableRow key={row.id} className={classes.tableRow}
                                        onMouseEnter={() => this.handleHoverRow(row.id)}
                                        onMouseLeave={() => this.handleUnHoverRow()}
                              >
                                <TableCell
                                    style={{width: "25%"}}
                                    className={classes.flex}
                                    // padding="none"
                                    align="right"
                                >
                                  <Grid
                                      container
                                      className={classes.root}
                                      spacing={1}
                                  >
                                    <Grid
                                        item
                                        md={4}
                                        sm={4}
                                        xs={4}
                                        className={classes.tableUsernamePart}
                                    >
                                      <Avatar
                                          alt="Remy Sharp"
                                          src="https://material-ui.com/static/images/avatar/1.jpg"
                                          className={classes.avatar}
                                      />
                                      <span className={classes.twitterIconAvatar}>
                                    <i className="fab fa-twitter fa-sm"></i>
                                  </span>
                                    </Grid>
                                    <Grid
                                        item
                                        md={8}
                                        sm={8}
                                        xs={8}
                                        className={classes.tableUsernamePart}
                                    >
                                      <span>{row.name}</span>
                                      <span className={classes.textMute}>
                                    @{row.username}
                                  </span>
                                    </Grid>
                                  </Grid>
                                </TableCell>
                                <TableCell align="right" style={{width: "50%"}}>
                                  {row.post}...
                                </TableCell>
                                <TableCell align="center" style={{width: "5%"}}>
                                  {row.emotion == "negative" ? (
                                      <div className={classes.negativeEmotion}></div>
                                  ) : (
                                      <div className={classes.positiveEmotion}></div>
                                  )}
                                </TableCell>
                                <TableCell
                                    className={  this.state.rowHover != row.id
                                        ? classes.textMute
                                        : ""}
                                    align="center"
                                    style={{width: "5%"}}
                                >
                                  {row.sharable == 0 ? "ندارد" : "دارد"}
                                </TableCell>
                                <TableCell
                                    className={this.state.rowHover != row.id
                                        ? classes.textMute
                                        : ""}
                                    align="center"
                                    style={{width: "5%"}}
                                >
                                  {row.likes}
                                </TableCell>
                                <TableCell
                                    className={this.state.rowHover != row.id
                                        ? classes.textMute
                                        : ""}
                                    align="center"
                                    style={{width: "5%"}}
                                >
                                  {row.comments}
                                </TableCell>
                                <TableCell
                                    className={this.state.rowHover != row.id
                                        ? classes.textMute
                                        : ""}
                                    align="left"
                                    style={{width: "5%"}}
                                >
                                  {row.date}
                                  <br />
                                  {row.time}
                                </TableCell>
                              </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Grid>
                    <Grid
                        item
                        md={12}
                        className={classes.pagination}
                        align="center"
                    >
                      <div className={classes.paginationBox}>
                        <div className={classes.paginationLinks}>
                          <div
                              className={classNames(
                                  classes.paginationLink,
                                  classes.activePaginationLink
                              )}
                          >
                            1
                          </div>
                          <div className={classNames(classes.paginationLink)}>
                            2
                          </div>
                          <div className={classNames(classes.paginationLink)}>
                            3
                          </div>
                          <div className={classNames(classes.paginationLink)}>
                            4
                          </div>
                          <div className={classNames(classes.paginationLink)}>
                            5
                          </div>
                          <div className={classNames(classes.paginationLink)}>
                            <i className="fa fa-angle-left"></i>
                          </div>
                          <div className={classNames(classes.paginationLink)}>
                            <i className="fa fa-angle-double-left"></i>
                          </div>
                        </div>
                        <div className={classes.paginationText}>
                          نمایش <span className={classes.textNormal}>1</span> از{" "}
                          <span className={classes.textNormal}>20</span> برای{" "}
                          <span className={classes.textNormal}>3343</span> پست
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
    );
  }
}

TrackerPostsContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  console.log("tracker post container mapstate");
  console.log(state);
  const {selectedTrackerDashboardItem} = state;
  return {
    trackers:selectedTrackerDashboardItem.trackers,
    selectedTracker: selectedTrackerDashboardItem.trackers.filter((t) => t.id === selectedTrackerDashboardItem.selectedTracker)[0],
    selectedTrackerDashboardItem:selectedTrackerDashboardItem.selectedTrackerDashboardItem,
    posts: selectedTrackerDashboardItem.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSelectedTracker: (id, name) => {
      dispatch(DashboardActions.changeSelectedTracker(id, name));
    }
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles, {withTheme: true})(TrackerPostsContainer));