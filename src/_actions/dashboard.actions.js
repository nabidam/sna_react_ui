import {DashboardConstants} from "../_constants";
import {trackerService} from "../_services";
import {alertActions} from "./alert.actions";

export const DashboardActions = {
  triggerDrawer,
  changeSelectedTracker,
  changeSnackbarStatus,
  addTracker,
  selectTrackerMenu,
  selectTrackerDashboardListItem,
  selectEmotion,
  selectGroup,
  selectKeyword,
  backToTrackers,
  changeTrackerStatus,
  selectTrackersType,
  selectTracker,
  selectPage
};

function addTracker(data) {
  return dispatch => {
    dispatch(add(data));
    trackerService.addTracker(data)
    .then(
        (res) => {
          dispatch(alertActions.success(`پرسش با موفقیت ثبت شد: ${JSON.stringify(res)}`));
        },
        error => {
          dispatch(alertActions.error(error.status));
        }
    );
  };

  function add(data ){
    return {
      type: DashboardConstants.ADD_TRACKER,
      data
    }
  }
  };

function triggerDrawer(){
  return{type: DashboardConstants.TRIGGER_DRAWER}
};

function changeSelectedTracker (trackerId ) {
  return{type: DashboardConstants.CHANGE_SELCETED_TRACKER,
    trackerId}
}

function changeSnackbarStatus(data){
  return {type: DashboardConstants.CHANGE_SNACKBAR_STATUS,
  data}
};

function selectTrackerMenu(id, name) {
  return {
    type: DashboardConstants.SELECT_TRACKER_MENU,
    id,
    name
  }
};

function selectTrackerDashboardListItem(item) {
  return{
    type: DashboardConstants.SELECT_TRACKER_DASHBOARD_LIST_ITEM,
    item
  }
};

function selectEmotion(emotion){
  return {
    type: DashboardConstants.SELECT_EMOTION,
    emotion
  }
};

function selectGroup (id)
{
  type: DashboardConstants.SELECT_GROUP,
  id
};

function selectKeyword(word) {
  return {
    type: DashboardActions.SELECT_KEYWORD,
    word
  }
};

function backToTrackers()
{
  return{
    type: DashboardActions.BACK_TO_TRACKERS
  }

};

function changeTrackerStatus(tracker){
  return {
    type: DashboardConstants.CHANGE_TRACKER_STATUS,
    tracker
  }
};

function selectTrackersType(t)
{
  return {
    type: DashboardConstants.SELECT_TRACKERS_TYPE,
    t
  }
};

function selectTracker(id)
{
  return {
    type: DashboardConstants.SELECT_TRACKER,
    id
  }
};

function selectPage(page)
{
  return {
    type: DashboardConstants.SELECT_PAGE,
    page
  }
};



