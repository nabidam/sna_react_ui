import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {withStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import Collapse from "@material-ui/core/Collapse";
import InputBase from "@material-ui/core/InputBase";
import Backdrop from "@material-ui/core/Backdrop";
import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import BookIcon from "@material-ui/icons/BookOutlined";
import {DashboardActions} from "../_actions";
import {history} from "../_helpers";
import BootstrapTooltip from "./BSTooltip";

const drawerWidth = 260;

const styles = theme => ({
  root: {
    display: "flex",
    zIndex: "unset"
  },
  rootSQ: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 520,
    height: 44,
    borderBottomLeftRadius: "unset",
    borderBottomRightRadius: "unset",
    boxShadow: "unset",
    borderBottom: "6px solid #edf1f6"
  },
  inputSQ: {
    marginLeft: 8,
    flex: 1
  },
  iconButtonSQ: {
    padding: 10,
    color: "#08080d"
  },
  showClearBtn: {
    display: "block"
  },
  hideClearBtn: {
    display: "none"
  },
  dividerSQ: {
    width: 1,
    height: 28,
    margin: 4
  },
  button: {
    fontSize: 14,
    margin: theme.spacing(1),
    width: 196,
    backgroundColor: "#3340ff",
    color: "#fff",
    height: 56,
    borderRadius: 28,
    "&:hover": {
      backgroundColor: "#0500cb"
    }
  },
  nested: {
    paddingRight: theme.spacing(3),
    fontSize: 11,
    paddingTop: 0,
    paddingBot: 0
  },
  selectedNested: {
    color: "#4753ff",
    "&::after": {
      content: `""`,
      position: "absolute",
      left: 24,
      width: 6,
      height: 6,
      background: "#4753ff",
      borderRadius: "50%"
    }
  },
  hide: {
    display: "none"
  },
  drawer: {
    position: "relative",
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    right: 0,
    width: drawerWidth
  },
  rtlToolBar: {
    direction: "rtl"
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ...theme.mixins.toolbar
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: "none"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  backBtn: {
    padding: 0
  },
  listItem: {
    heigth: 44,
    width: 226,
    "&:hover": {
      color: "#4753ff",
      cursor: "pointer"
    }
  },
  backBtnItem: {
    paddingBottom: 0
  },
  listItemx: {
    width: "unset",
    "&::after": {
      content: `""`,
      display: "block",
      margin: "auto",
      position: "absolute",
      right: 16,
      bottom: 0,
      width: 488,
      height: 2,
      background: "#e2e6ea"
    },
    paddingLeft: 24,
    paddingRight: 24,
    "&:last-child::after": {
      display: "none"
    },
    "&:hover": {
      backgroundColor: "#eff3f7",
      color: "#4753ff",
      cursor: "pointer"
    }
  },
  listItemTextMeta: {
    color: "#bfc7d1",
    marginLeft: 14
  },
  iconChevronList: {
    minWidth: "unset",
    color: "#08080d"
  },
  listItemIcon: {
    minWidth: 32
  },
  backBtnIcon: {
    minWidth: 16,
    color: "#000",
    marginLeft: 6
  },
  listItemSelectTracker: {
    paddingLeft: 0,
    paddingRight: 0
  },
  selectTracker: {
    fontSize: 12,
    margin: theme.spacing(1),
    // margin: 8,
    paddingRight: 19,
    width: 226,
    backgroundColor: "#edf1f6",
    color: "#08080d",
    height: 44,
    borderRadius: 22,
    justifyContent: "right"
    // "&:hover": {
    //   backgroundColor: "#0500cb"
    // }
  },
  selectTrackerIcon: {
    display: "flex",
    position: "absolute",
    left: "19px"
  },
  selectTrackerDialog: {
    position: "absolute",
    right: 0
  },
  selectedListItem: {
    color: "#4753ff"
  },
  selectTrackerPaper: {
    width: 520,
    height: 305
  },
  selectTrackerList: {
    paddingTop: 0,
    width: 520,
    height: 305
  },
  backdrop: {
    zIndex: "unset"
  },
  divider: {
    display: "flex",
    justifyContent: "center",
    color: "#e2e6ea",
    width: "75%",
    margin: "0 auto"
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%"
  },
  footerIcon: {
    fontSize: "1.5em",
    "&:hover": {
      backgroundColor: "unset",
      color: "#4753ff"
    }
  },
  leftIcon: {
    position: "absolute",
    right: "75%"
  },
  primaryText: {
    fontSize: 18
  },
  postsBadge: {
    padding: "5px 5px",
    backgroundColor: "#edf1f6",
    borderRadius: 3,
    color: "#08080d",
    marginRight: 11
  }
});

class TrackersSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackerUsername: "",
      menuOpen: false,
      newTrackerDialog: false,
      isUsernameEntered: true,
      isSelectTrackerOpen: false,
      selectTrackerAnchorEl: null,
      selectTrackerId: undefined,
      isClearBtnShow: false,
      searchTrackerString: "",
      searchedTracker: []
    };
    console.log("trackerSidebar");
    console.log(props);

    this.handleChangeSearchTrackerString = this.handleChangeSearchTrackerString.bind(this);
    this.handleClearSearchTrackerString = this.handleClearSearchTrackerString.bind(this);
    this.handleClickSelectTracker = this.handleClickSelectTracker.bind(this);
    this.handleCloseSelectTracker = this.handleCloseSelectTracker.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleSelectTrackerMenu = this.handleSelectTrackerMenu.bind(this);
    this.handleNewTrackerDialog = this.handleNewTrackerDialog.bind(this);
    this.handleChangeTrackerUsername = this.handleChangeTrackerUsername.bind(this);
    this.handleAddTracker = this.handleAddTracker.bind(this);
    this.handleClickListItem = this.handleClickListItem.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleBack = () => {
    this.props.selectPage("");
    history.push("/dashboard");
  };

  handleChangeSearchTrackerString = event => {
    var searched_tracker = event.target.value.toUpperCase();
    var trackers = this.props.trackers;
    var searched_trackers = [];
    trackers.map((item, index) => {
      if (item.name.toUpperCase().indexOf(searched_tracker) > -1) {
        searched_trackers.push(item);
      }
    });

    this.setState({
      searchTrackerString: event.target.value,
      searchedTrackers: searched_trackers
    });
  };

  handleClearSearchTrackerString = () => {
    this.setState({
      searchTrackerString: ""
    });
  };

  handleClickSelectTracker = event => {
    this.setState({
      selectTrackerAnchorEl: event.currentTarget,
      isSelectTrackerOpen: Boolean(event.currentTarget)
    });
  };

  handleCloseSelectTracker = () => {
    this.setState({
      selectTrackerAnchorEl: null,
      isSelectTrackerOpen: false
    });
  };

  handleClickMenu = () => {
    this.setState({menuOpen: !this.state.menuOpen});
  };

  handleSelectTrackerMenu = item => {
    this.props.selectTracker(item.id);
    this.setState({
      selectTrackerAnchorEl: null,
      isSelectTrackerOpen: false
    });

    history.push("/dashboard/trackers");
  };

  handleNewTrackerDialog = () => {
    history.push("/dashboard/add-tracker");
  };

  handleChangeTrackerUsername = event => {
    this.setState({trackerUsername: event.target.value});
    if (event.target.value == "") {
      this.setState({isUsernameEntered: false});
    } else {
      this.setState({isUsernameEntered: true});
    }
  };

  handleClickListItem = item => {
    this.props.selectTrackerDashboardListItem(item);
  };

  handleAddTracker = () => {
    if (this.state.trackerUsername != "") {
      this.handleNewTrackerDialog();
      this.setState({trackerUsername: ""});
      this.props.addTracker(this.state.trackerUsername);
    } else {
      this.setState({isUsernameEntered: false});
    }
  };

  render() {
    const {classes, theme} = this.props;
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
        >
          <div className={classes.toolbar} />
          <List
              className={classNames(classes.list, classes.backBtn)}
              component="nav"
          >
            <ListItem
                className={classNames(classes.listItem, classes.backBtnItem)}
                onClick={() => this.props.backToTrackers()}
            >
              <div className={classes.backBtnIcon}>
                <i className="fas fa-arrow-right" />
              </div>
              <ListItemText className="list-item-right">
                بازگشت به لیست ردیاب‌ها
              </ListItemText>
            </ListItem>
          </List>
          <List className={classes.list} component="nav">
            <ListItem
                className={classNames(
                    classes.listItem,
                    classes.listItemSelectTracker
                )}
            >
              <Button
                  color="primary"
                  aria-describedby={this.state.selectTrackerId}
                  className={classes.selectTracker}
                  onClick={event => this.handleClickSelectTracker(event)}
              >
                { this.props.selectedTracker
                                    ? this.props.trackers.filter((t) => t.id === this.props.selectedTracker)[0].name
                                    : "انتخاب ردیاب"}
                <div className={classes.selectTrackerIcon}>
                  <i className="fas fa-chevron-down" />
                </div>
              </Button>
              <Backdrop
                  className={classes.backdrop}
                  open={this.state.isSelectTrackerOpen}
                  invisible={false}
              />
              <Popover
                  open={this.state.isSelectTrackerOpen}
                  id={this.state.selectTrackerId}
                  onClose={() => this.handleCloseSelectTracker()}
                  anchorEl={this.state.selectTrackerAnchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
              >
                <div className="popover">
                  <Paper className={classes.rootSQ}>
                    <IconButton
                        className={classes.iconButtonSQ}
                        aria-label="search"
                    >
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                        value={this.state.searchTrackerString}
                        onChange={this.handleChangeSearchTrackerString}
                        className={classes.inputSQ}
                        placeholder="جستجو در ردیاب‌ها"
                        inputProps={{"aria-label": "search queries"}}
                    />
                    <IconButton
                        color="primary"
                        className={classNames(
                            classes.iconButtonSQ,
                            this.state.searchTrackerString != ""
                                ? classes.showClearBtn
                                : classes.hideClearBtn
                        )}
                        onClick={this.handleClearSearchTrackerString}
                        aria-label="clear"
                    >
                      <CloseIcon />
                    </IconButton>
                  </Paper>
                  <List component="nav" className={classes.selectTrackerList}>
                    {this.state.searchTrackerString != ""
                        ? this.state.searchedTrackers.map((item, index) => {
                          return (
                              <ListItem
                                  className={classNames(classes.listItemx)}
                                  key={item.id}
                                  button
                                  onClick={() => this.handleSelectTrackerMenu(item)}
                              >
                                <ListItemText className="list-item-right">
                                  {item.name}
                                </ListItemText>
                                <ListItemText className={classes.listItemTextMeta}>
                                  {item.date}
                                </ListItemText>
                                <ListItemIcon className={classes.iconChevronList}>
                                  <ChevronLeft />
                                </ListItemIcon>
                              </ListItem>
                          );
                        })
                        : this.props.trackers.map((item, index) => {
                          return (
                              <ListItem
                                  className={classNames(classes.listItemx)}
                                  key={item.id}
                                  button
                                  onClick={() => this.handleSelectTrackerMenu(item)}
                              >
                                <ListItemText className="list-item-right">
                                  {item.name}
                                </ListItemText>
                                <ListItemText className={classes.listItemTextMeta}>
                                  {item.date}
                                </ListItemText>
                                <ListItemIcon className={classes.iconChevronList}>
                                  <ChevronLeft />
                                </ListItemIcon>
                              </ListItem>
                          );
                        })}
                  </List>
                </div>
              </Popover>
            </ListItem>
            <Collapse
                in={this.props.selectedTracker}
                timeout="auto"
                unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem
                    className={classNames(
                        classes.nested,
                        classes.listItem,
                        "" +
                        (this.props.selectedTrackerDashboardItem == "dashboard"
                            ? classes.selectedNested
                            : "")
                    )}
                    onClick={() => this.handleClickListItem("dashboard")}
                >
                  <ListItemText
                      primary="میز کار"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(
                        classes.nested,
                        classes.listItem,
                        "" +
                        (this.props.selectedTrackerDashboardItem == "posts"
                            ? classes.selectedNested
                            : "")
                    )}
                    onClick={() => this.handleClickListItem("posts")}
                >
                  <ListItemText className="list-item-right level-2-items">
                    پست‌ها
                    <span className={classes.postsBadge}>347</span>
                  </ListItemText>
                </ListItem>
                <ListItem
                    className={classNames(
                        classes.nested,
                        classes.listItem,
                        "" +
                        (this.props.selectedTrackerDashboardItem == "keywords"
                            ? classes.selectedNested
                            : "")
                    )}
                    onClick={() => this.handleClickListItem("keywords")}
                >
                  <ListItemText
                      primary="عبارات خاص"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(
                        classes.nested,
                        classes.listItem,
                        "" +
                        (this.props.selectedTrackerDashboardItem == "margins"
                            ? classes.selectedNested
                            : "")
                    )}
                    onClick={() => this.handleClickListItem("margins")}

                >
                  <ListItemText
                      primary="کنارش‌ها"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(
                        classes.nested,
                        classes.listItem,
                        "" +
                        (this.props.selectedTrackerDashboardItem == "influencers"
                            ? classes.selectedNested
                            : "")
                    )}
                    onClick={() => this.handleClickListItem("influencers")}

                >
                  <ListItemText
                      primary="افراد مؤثر"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(
                        classes.nested,
                        classes.listItem,
                        "" +
                        (this.props.selectedTrackerDashboardItem == "emotions"
                            ? classes.selectedNested
                            : "")
                    )}
                    onClick={() => this.handleClickListItem("emotions")}

                >
                  <ListItemText
                      primary="حس موجود"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(
                        classes.nested,
                        classes.listItem,
                        "" +
                        (this.props.selectedTrackerDashboardItem == "groups"
                            ? classes.selectedNested
                            : "")
                    )}
                    onClick={() => this.handleClickListItem("groups")}

                >
                  <ListItemText
                      primary="دسته‌بندی‌ها"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(
                        classes.nested,
                        classes.listItem,
                        "" +
                        (this.props.selectedTrackerDashboardItem == "locations"
                            ? classes.selectedNested
                            : "")
                    )}
                    onClick={() => this.handleClickListItem("locations")}

                >
                  <ListItemText
                      primary="مکان مرتبط"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
              </List>
            </Collapse>
          </List>
          <List className={classes.footer} component="nav">
            <Divider className={classes.divider} />
            <ListItem>
              <BootstrapTooltip title="راهنمای سیستم">
                <IconButton color="inherit" className={classes.footerIcon}>
                  <BookIcon />
                </IconButton>
              </BootstrapTooltip>
              <BootstrapTooltip title="پرسش">
                <IconButton color="inherit" className={classes.footerIcon}>
                  <i className="far fa-question-circle" />
                </IconButton>
              </BootstrapTooltip>
              <BootstrapTooltip title="اطلاعات">
                <IconButton
                    color="inherit"
                    className={classNames(classes.footerIcon, classes.leftIcon)}
                >
                  <InfoIcon />
                </IconButton>
              </BootstrapTooltip>
            </ListItem>
          </List>
        </Drawer>
    );
  }
}

TrackersSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool,
  triggerDrawer: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log("tracker sidebar map state")
  console.log(state)
  const {triggerDrawer, selectedTrackerMenu, selectedTrackerDashboardItem} = state;
  return {
    isDrawerOpen: triggerDrawer.isDrawerOpen,
    selectedTracker: selectedTrackerDashboardItem.selectedTracker,
    trackers: selectedTrackerDashboardItem.trackers,
    selectedTrackerMenu: selectedTrackerMenu,
    selectedTrackerDashboardItem: (selectedTrackerMenu.selectedTrackerId, selectedTrackerMenu.name)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    triggerDrawer: () => dispatch(DashboardActions.triggerDrawer()),
    addTracker: username => dispatch(DashboardActions.addTracker(username)),
    selectTracker: (id) => dispatch(DashboardActions.selectTracker(id)),
    selectTrackerDashboardListItem: item => dispatch(DashboardActions.selectTrackerDashboardListItem(item)),
    selectPage: page => dispatch(DashboardActions.selectPage(page)),
    backToTrackers: () => dispatch(DashboardActions.backToTrackers())
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles, {withTheme: true})(TrackersSidebar));