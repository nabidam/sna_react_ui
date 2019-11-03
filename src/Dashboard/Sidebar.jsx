import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {withStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {connect} from "react-redux";
import {DashboardActions} from "../_actions";
import Icon from '@material-ui/core/Icon';
import Collapse from "@material-ui/core/Collapse";
import InputBase from "@material-ui/core/InputBase";
import Backdrop from "@material-ui/core/Backdrop";
import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import DashboardIcon from "@material-ui/icons/Dashboard";
import InfoIcon from "@material-ui/icons/InfoOutlined";
import BookIcon from "@material-ui/icons/BookOutlined";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import TrafficIcon from "@material-ui/icons/Traffic";
import PeopleIcon from "@material-ui/icons/People";
import {history} from "../_helpers";
import BootstrapTooltip from "./BSTooltip";
import {Button} from "@material-ui/core";

const drawerWidth = 240;

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
    paddingRight: theme.spacing(4),
    fontSize: 11,
    paddingTop: 0,
    paddingBot: 0
  },
  selectedNested: {
    color: "#4753ff",
    "&::after": {
      content: `""`,
      position: "absolute",
      left: 12,
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
  listItem: {
    heigth: 44,
    width: 196,
    fontSize: 12,
    "&:hover": {
      color: "#4753ff",
      cursor: "pointer"
    }
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
  listItemSelectTracker: {
    paddingLeft: 0,
    paddingRight: 0
  },
  selectTracker: {
    fontSize: 12,
    margin: theme.spacing(1),
    width: 196,
    backgroundColor: "#edf1f6",
    color: "#08080d",
    height: 44,
    borderRadius: 5,
    justifyContent: "right"
    // "&:hover": {
    //   backgroundColor: "#0500cb"
    // }
  },
  selectTrackerIcon: {
    display: "flex",
    position: "absolute",
    left: "8px"
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
  }
});

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      menuOpen: false,
      newTrackerDialog: false,
      isNameEntered: true,
      isUsernameEntered: true,
      isSelectTrackerOpen: false,
      selectTrackerAnchorEl: null,
      selectTrackerId: undefined,
      isClearBtnShow: false,
      searchTrackerString: "",
      searchedTrackers: []
    };
    console.log("sidebar props")
    console.log(props)
    this.handleChangeSearchTrackerString = this.handleChangeSearchTrackerString.bind(this);
    this.handleClearSearchTrackerString = this.handleClearSearchTrackerString.bind(this);
    this.handleClickSelectTracker = this.handleClickSelectTracker.bind(this);
    this.handleCloseSelectTracker = this.handleCloseSelectTracker.bind(this);
    this.handleClickMenu = this.handleClickMenu.bind(this);
    this.handleSelectTrackerMenu = this.handleSelectTrackerMenu.bind(this);
    this.handleNewTrackerDialog = this.handleNewTrackerDialog.bind(this);
    this.handleChangeTrackerName = this.handleChangeTrackerName.bind(this);
    this.handleAddTracker = this.handleAddTracker.bind(this);
  }
  handleChangeSearchTrackerString = event => {
    var searched_tracker = event.target.value.toUpperCase();
    var Trackers = this.props.trackers;
    var searched_trackers = [];
    Trackers.map((item) => {
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
    console.log("handleClickSelectTracker")
     console.log(event.currentTarget);

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
    console.log("handleSelectTrackerMenu")
    console.log(item)
    this.props.selectTrackerMenu(item.id, item.name);

    this.setState({
      selectTrackerAnchorEl: null,
      isSelectTrackerOpen: false
    });

    history.push("/dashboard/tracker");
  };

  handleNewTrackerDialog = () => {
    history.push("/add-tracker");
  };

  handleChangeTrackerName = event => {
    this.setState({name: event.target.value});
    if (event.target.value == "") {
      this.setState({isNameEntered: false});
    } else {
      this.setState({isNameEntered: true});
    }
  };

  handleAddTracker = () => {
    if (this.state.name != "") {
      this.handleNewTrackerDialog();
      this.setState({name: ""});
      this.props.addTracker(this.state.name);
    } else {
      this.setState({isNameEntered: false});
    }
  };

  render() {
    const {classes} = this.props;
    return (
        <Drawer anchor="right"
            className={classNames(classes.drawer, {
              //[classes.drawerOpen]: this.props.isDrawerOpen,
             // [classes.drawerClose]: !this.props.isDrawerOpen
            })}
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper
                }}
            //open={this.props.isDrawerOpen}
        >
          <div className={classes.toolbar}>
            <Typography
                variant="h5"
                component="p"
                className={classes.primaryText}
            >
              ــدادهـــ ـکاویـــ
            </Typography>
          </div>
          <List>
            <ListItem>
              <Button
                  color="primary"
                  className={classes.button}
                  onClick={() => {
                    history.push("/add-tracker");
                  }}
              >
                ردیاب جدید
              </Button>
            </ListItem>
            <Dialog
                open={this.state.newTrackerDialog}
                onClose={() => this.handleNewTrackerDialog()}
                aria-labelledby="newTracker"
                maxWidth="xs"
            >
              <DialogTitle className="list-item-right" id="newTracker">
                ایجاد پرسش جدید
              </DialogTitle>
              <DialogContent>
                <DialogContentText className="list-item-right">
                  نام پرسش مورد نظر را وارد کنید:
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="name"
                    type="text"
                    fullWidth
                    value={this.state.name}
                    onChange={this.handleChangeTrackerName}
                    error={!this.state.isNameEntered}
                    required
                />
              </DialogContent>
              <DialogActions>
                <Button
                    onClick={() => this.handleNewTrackerDialog()}
                    color="primary"
                >
                  لغو
                </Button>
                <Button onClick={() => this.handleAddTracker()} color="primary">
                  ثبت
                </Button>
              </DialogActions>
            </Dialog>
          </List>
          {/*<Divider />)*/}
          <List className={classes.list} component="nav">
            <ListItem
                className={classNames(classes.listItem, classes.selectedListItem)}
                onClick={() => {
                  history.push("/");
                }}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText className="list-item-right">میز کار</ListItemText>
            </ListItem>
            <ListItem className={classes.listItem}>
              <ListItemIcon className={classes.listItemIcon}>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText className="list-item-right">ردیاب‌ها</ListItemText>
            </ListItem>
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
                {this.props.selectedTrackerMenu
                    ? this.props.selectedTrackerMenu.name
                    : "انتخاب ردیاب"}
                <div className={classes.selectTrackerIcon}>
                  <i className="fas fa-sort" />
                </div>
              </Button>
              {/* <Dialog
              className={classes.selectQueryDialog}
              open={this.state.isSelectQueryOpen}
              onClose={() => this.handleClickSelectQuery()}
              aria-labelledby="selectQuery"
              maxWidth="xs"
              component={Popover}
              top={0}
              right={0}
            >
              <DialogTitle className="list-item-right" id="selectQuery">
                ایجاد کوئری جدید
              </DialogTitle>
              <DialogContent>
                <DialogContentText className="list-item-right">
                  نام کاربری مورد نظر را وارد کنید:
                </DialogContentText>
              </DialogContent>
            </Dialog> */}
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
                        inputProps={{"aria-label": "search trackers"}}
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
                        ? this.state.searchedTrackers.map((item) => {
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
                                  {item.created_at}
                                </ListItemText>
                                <ListItemIcon className={classes.iconChevronList}>
                                  <ChevronLeft />
                                </ListItemIcon>
                              </ListItem>
                          );
                        })
                        : this.props.trackers.map((item) => {
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
                                  {item.created_at}
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
                in={this.props.selectedTrackerMenu}
                timeout="auto"
                unmountOnExit
            >
              <List component="div" disablePadding>
                <ListItem
                    className={classNames(
                        classes.nested,
                        classes.listItem,
                        classes.selectedNested
                    )}
                >
                  <ListItemText
                      primary="پست‌ها"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(classes.nested, classes.listItem)}
                >
                  <ListItemText
                      primary="عبارات خاص"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(classes.nested, classes.listItem)}
                >
                  <ListItemText
                      primary="کنارش‌ها"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(classes.nested, classes.listItem)}
                >
                  <ListItemText
                      primary="افراد مؤثر"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(classes.nested, classes.listItem)}
                >
                  <ListItemText
                      primary="حس موجود"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(classes.nested, classes.listItem)}
                >
                  <ListItemText
                      primary="دسته‌بندی‌ها"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
                <ListItem
                    className={classNames(classes.nested, classes.listItem)}
                >
                  <ListItemText
                      primary="مکان"
                      className="list-item-right level-2-items"
                  />
                </ListItem>
              </List>
              <Divider />
            </Collapse>
            <ListItem
                className={classes.listItem}
                onClick={() => this.props.selectPage("traffic-analysis")}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <TrafficIcon />
              </ListItemIcon>
              <ListItemText primary="تحلیل ترافیکی" className="list-item-right" />
            </ListItem>
            <ListItem
                className={classes.listItem}
                onClick={() => this.props.selectPage("projects")}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary="پروژه‌ها" className="list-item-right" />
            </ListItem>
            <ListItem
                className={classes.listItem}
                onClick={() => this.props.selectPage("trends")}
            >
              <ListItemIcon className={classes.listItemIcon}>
                <ShowChartIcon />
              </ListItemIcon>
              <ListItemText primary="ترندها" className="list-item-right" />
            </ListItem>
            <ListItem
                className={classes.listItem}
                onClick={() => this.props.selectPage("influencers")}//effective-accounts,influencers
            >
              <ListItemIcon className={classes.listItemIcon}>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="افراد مؤثر" className="list-item-right" />
            </ListItem>
            <ListItem className={classes.listItem}
                      onClick={() => this.props.selectPage("accounts")}>
              <ListItemIcon className={classes.listItemIcon}>
                <Icon>
                  <i className="fas fa-users fa-xs" />
                </Icon>
              </ListItemIcon>
              <ListItemText
                  primary="مدیریت شبکه‌ اجتماعی"
                  className="list-item-right"
              />
            </ListItem>
          </List>
          <Divider className={classes.divider} />
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

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  isDrawerOpen: PropTypes.bool,
  triggerDrawer: PropTypes.func.isRequired,
  selectTrackerMenu: PropTypes.func.isRequired
};

function mapStateToProps(state){
   console.log("Sidebar map state to props")
   console.log(state)
  const {triggerDrawer,lastTrackers,selectedTrackerMenu,selectedTrackerDashboardItem} = state;
  const {selectedTrackerId,name} = selectedTrackerMenu;

  return {
    isDrawerOpen: triggerDrawer.isDrawerOpen,
    trackers: lastTrackers.trackers,
    selectedTrackerMenu: (selectedTrackerId, name),
    selectedPage: selectedTrackerDashboardItem.selectedPage
  };
}

const mapDispatchToProps = dispatch => {
  return {
    triggerDrawer: () => dispatch(DashboardActions.triggerDrawer()),
    addTracker: username => dispatch(DashboardActions.addTracker(username)),
    selectTrackerMenu: (id, name) => dispatch(DashboardActions.selectTrackerMenu(id, name)),
    selectPage: page => dispatch(DashboardActions.selectPage(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, {withTheme: true})(Sidebar));
