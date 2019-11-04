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
  Button
} from "@material-ui/core";
import { connect } from "react-redux";
import { DashboardActions, trackersActions } from "../_actions";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";

const styles = theme => ({});

class Trackers extends React.Component {
  constructor(props) {
    super(props);
    console.log("add trackers constructor");
    console.log(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.wrapper}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="md" className={classes.container}>
            <Grid container className={classes.root} spacing={2}>
              <Grid item md={6} sm={12} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2">
                    در صورت تمایل این ردیاب را به یک پروژه اضافه کنید
                  </Typography>
                </div>
                <input
                  type="hidden"
                  name="project_id"
                  id={
                    this.state.selectedProject == null
                      ? 0
                      : this.state.selectedProject.id
                  }
                />
                <Button
                  className={classNames(
                    classes.input,
                    this.state.isSelectProjectOpen
                      ? classes.openSelectProjectInput
                      : "",
                    this.state.selectedProject ? classes.projectIsSelected : ""
                  )}
                  onClick={event => this.handleSelectProjectClick(event)}
                >
                  {this.state.selectedProject == null
                    ? "انتخاب یک پروژه"
                    : this.state.selectedProject.name}
                  <div className={classes.chevronDownIcon}>
                    <i className="fas fa-chevron-down" />
                  </div>
                </Button>
                <Popover
                  open={this.state.isSelectProjectOpen}
                  onClose={() => this.handleCloseSelectProject()}
                  anchorEl={this.state.selectProjectAnchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  classes={{
                    paper: classes.popover
                  }}
                >
                  <List component="nav" className={classes.selectQueryList}>
                    <ListItem
                      className={classNames(
                        classes.listItem,
                        classes.listItemNewProject
                      )}
                      key="0"
                      button
                      onClick={() => this.props.selectPage("projects/add")}
                    >
                      <ListItemText className="list-item-right">
                        پروژه جدید
                      </ListItemText>
                      <ListItemIcon className={classes.iconAddProject}>
                        <AddIcon />
                      </ListItemIcon>
                    </ListItem>
                    {this.props.projects.map((item, index) => {
                      return (
                        <ListItem
                          className={classNames(classes.listItem)}
                          key={item.id}
                          button
                          onClick={() => this.handleSeletProject(item)}
                        >
                          <ListItemText className="list-item-right">
                            {item.name}
                          </ListItemText>
                        </ListItem>
                      );
                    })}
                  </List>
                </Popover>
              </Grid>
            </Grid>
            <Grid container className={classes.root} spacing={2}>
              <Grid item md={6} sm={12} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2">نام ردیاب</Typography>
                </div>
                <input
                  type="text"
                  className={classes.input}
                  placeholder="وارد کردن نام ردیاب"
                  value={this.state.addQueryName}
                  onChange={e => this.handleChangeName(e)}
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2">
                    یک بازه زمانی برای ردیاب خود انتخاب کنید
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
                  <Typography variant="body2">
                    شبکه اجتماعی مورد نظر برای ردیاب خود را انتخاب کنید
                  </Typography>
                </div>
                <Grid container className={classes.root} spacing={2}>
                  <Grid item md={1} sm={1} xs={1}>
                    <div className={classes.socialMediaIconBox}>
                      <IconButton
                        className={
                          this.state.instagram
                            ? classes.instagramIconBtn
                            : classes.socialMediaIcon
                        }
                        onClick={() => this.handleInstagramClick()}
                      >
                        <i className="fab fa-instagram fa-sm"></i>
                      </IconButton>
                      {this.state.instagram ? (
                        <span className={classes.checkIconTiny}>
                          <CheckIcon style={{ fontSize: "0.9rem" }} />
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </Grid>
                  <Grid item md={5} sm={11} xs={11}>
                    <div className={classes.tagWrapper}>
                      {this.state.instagramUsers.map((item, index) => {
                        return (
                          <div className={classes.tagHolder} key={index}>
                            <div className={classes.tag}>{item}</div>
                            <div
                              className={classes.tagRemove}
                              onClick={() =>
                                this.handleRemoveInstagramUser(index)
                              }
                            >
                              <ClearIcon className={classes.tagRemoveIcon} />
                            </div>
                          </div>
                        );
                      })}
                      <input
                        type="text"
                        className={classes.tagInput}
                        placeholder="نام کاربری فرد موثر برای ردیابی"
                        id="instagram-users"
                        onKeyUp={e => this.handleAddInstagramUser(e)}
                      />
                    </div>
                  </Grid>
                  <Grid item md={1} sm={1} xs={1}>
                    <div className={classes.socialMediaIconBox}>
                      <IconButton
                        className={
                          this.state.twitter
                            ? classes.twitterIconBtn
                            : classes.socialMediaIcon
                        }
                        onClick={() => this.handleTwitterClick()}
                      >
                        <i className="fab fa-twitter fa-sm"></i>
                      </IconButton>
                      {this.state.twitter ? (
                        <span className={classes.checkIconTiny}>
                          <CheckIcon style={{ fontSize: "0.9rem" }} />
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </Grid>
                  <Grid item md={5} sm={11} xs={11}>
                    <div className={classes.tagWrapper}>
                      {this.state.twitterUsers.map((item, index) => {
                        return (
                          <div className={classes.tagHolder} key={index}>
                            <div className={classes.tag}>{item}</div>
                            <div
                              className={classes.tagRemove}
                              onClick={() =>
                                this.handleRemoveTwitterUser(index)
                              }
                            >
                              <ClearIcon className={classes.tagRemoveIcon} />
                            </div>
                          </div>
                        );
                      })}
                      <input
                        type="text"
                        className={classes.tagInput}
                        placeholder="نام کاربری فرد موثر برای ردیابی"
                        id="twitter-users"
                        onKeyUp={e => this.handleAddTwitterUser(e)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item md={12} sm={12} xs={12}>
                <div className={classes.labelBox}>
                  <i
                    className={classNames(classes.bulbIcon, "far fa-lightbulb")}
                  ></i>
                  <Typography variant="body2">
                    هشتگ یا کلمه کلیدی مرتبط با ردیاب را وارد کنید
                  </Typography>
                </div>
                <Grid container className={classes.root} spacing={2}>
                  <Grid item md={6} sm={12} xs={12}>
                    <div className={classes.tagWrapper}>
                      {this.state.hashtags.map((item, index) => {
                        return (
                          <div className={classes.tagHolder} key={index}>
                            <div className={classes.tag}>{item}</div>
                            <div
                              className={classes.tagRemove}
                              onClick={() => this.handleRemoveHashtag(index)}
                            >
                              <ClearIcon className={classes.tagRemoveIcon} />
                            </div>
                          </div>
                        );
                      })}
                      <input
                        type="text"
                        className={classes.tagInput}
                        placeholder="هشتگ مرتبط با ردیاب را وارد کنید"
                        onKeyUp={e => this.handleAddHashtag(e)}
                      />
                    </div>
                  </Grid>
                  <Grid item md={6} sm={12} xs={12}>
                    <div className={classes.tagWrapper}>
                      {this.state.keywords.map((item, index) => {
                        return (
                          <div className={classes.tagHolder} key={index}>
                            <div className={classes.tag}>{item}</div>
                            <div
                              className={classes.tagRemove}
                              onClick={() => this.handleRemoveKeyword(index)}
                            >
                              <ClearIcon className={classes.tagRemoveIcon} />
                            </div>
                          </div>
                        );
                      })}
                      <input
                        type="text"
                        className={classes.tagInput}
                        placeholder="کلمات کلیدی مرتبط با ردیاب را وارد کنید"
                        onKeyUp={e => this.handleAddKeyword(e)}
                      />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              {this.state.isLocationEnable != true ? (
                <Grid
                  item
                  md={12}
                  sm={12}
                  xs={12}
                  className={classes.enableMapGrid}
                >
                  <Button
                    color="primary"
                    className={classes.enableMapBtn}
                    onClick={() => this.handleEnableLocation()}
                  >
                    انتخاب محدوده جغرافیایی
                  </Button>
                </Grid>
              ) : (
                ""
              )}
              {this.state.isLocationEnable ? (
                <Grid item md={12} sm={12} xs={12}>
                  <div className={classes.labelBox}>
                    <i
                      className={classNames(
                        classes.bulbIcon,
                        "far fa-lightbulb"
                      )}
                    ></i>
                    <Typography variant="body2">
                      محدوده جغرافیایی مرتبط با ردیاب را انتخاب کنید
                    </Typography>
                  </div>
                  <Grid container className={classes.root} spacing={2}>
                    <Grid item md={6} sm={12} xs={12}>
                      <div className={classes.mapBox} id="map-box">
                        <MapComponent center={this.state.mapCenter} />
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
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                      <div className={classes.box}>
                        <Typography
                          variant="body2"
                          className={classes.textMute}
                        >
                          هشتگ یا کلمه کلیدی مرتبط پیدا نشده است
                        </Typography>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
            </Grid>
          </Container>
        </main>
      </div>
    );
  }
}

Trackers.propTypes = {};

const mapStateToProps = state => {
  const { lastTrackers, selectedTrackerDashboardItem } = state;
  console.log("trackers map state");
  console.log(state);
  return {
    trackers: selectedTrackerDashboardItem.trackers,
    selectedTracker: lastTrackers.selectedTracker,
    selectedTrackersType: lastTrackers.selectedTrackersType
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectTracker: id => dispatch(DashboardActions.selectTracker(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(Trackers));
