import {
  DashboardConstants,
  trackersConstants,
  trafficAnalysisConstants,
  projectsConstants
} from "../_constants";
import { trackerService } from "../_services";
import { alertActions } from "./alert.actions";

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
  changeTrafficAnalysisStatus,
  selectTrafficAnalysisType,
  selectPage,

  changeBagItemStatus,
  checkAllBagItemStatus,
  changeGlobalVar,
  changeComeFrom,

  changeTrackersDate
};

export const TrackersActions = {
  editableTracker,
  goToAddTracker,
  changeAddTracker,
  createTracker,
  deleteTracker,
  changeEditableTracker,
  editTracker
};

export const TrafficAnalysisActions = {
  editableTrafficAnalysis,
  goToAddTrafficAnalysis,
  changeAddTrafficAnalysis,
  createTrafficAnalysis,
  deleteTrafficAnalysis,
  changeEditableTrafficAnalysis,
  editTrafficAnalysis
};

export const ProjectsActions = {
  editableProject,
  goToAddProject,
  changeAddProject,
  createProject,
  deleteProject,
  changeEditableProject,
  editProject
};

function addTracker(data) {
  return dispatch => {
    dispatch(add(data));
    trackerService.addTracker(data).then(
      res => {
        dispatch(
          alertActions.success(`پرسش با موفقیت ثبت شد: ${JSON.stringify(res)}`)
        );
      },
      error => {
        dispatch(alertActions.error(error.status));
      }
    );
  };

  function add(data) {
    return {
      type: DashboardConstants.ADD_TRACKER,
      data
    };
  }
}

function triggerDrawer() {
  return { type: DashboardConstants.TRIGGER_DRAWER };
}

function changeSelectedTracker(trackerId) {
  return { type: DashboardConstants.CHANGE_SELCETED_TRACKER, trackerId };
}

function changeSnackbarStatus(data) {
  return { type: DashboardConstants.CHANGE_SNACKBAR_STATUS, data };
}

function selectTrackerMenu(id, name) {
  return {
    type: DashboardConstants.SELECT_TRACKER_MENU,
    id,
    name
  };
}

function selectTrackerDashboardListItem(item) {
  return {
    type: DashboardConstants.SELECT_TRACKER_DASHBOARD_LIST_ITEM,
    item
  };
}

function selectEmotion(emotion) {
  return {
    type: DashboardConstants.SELECT_EMOTION,
    emotion
  };
}

function selectGroup(id) {
  return {
    type: DashboardConstants.SELECT_GROUP,
    id
  };
}

function selectKeyword(word) {
  return {
    type: DashboardConstants.SELECT_KEYWORD,
    word
  };
}

function backToTrackers() {
  return {
    type: DashboardConstants.BACK_TO_TRACKERS
  };
}

function changeTrackerStatus(tracker) {
  return {
    type: DashboardConstants.CHANGE_TRACKER_STATUS,
    tracker
  };
}

function selectTrackersType(t) {
  return {
    type: DashboardConstants.SELECT_TRACKERS_TYPE,
    t
  };
}

function selectTracker(id) {
  return {
    type: DashboardConstants.SELECT_TRACKER,
    id
  };
}

function changeTrafficAnalysisStatus(trafficAnalysis) {
  return {
    type: DashboardConstants.CHANGE_ANALYSIS_STATUS,
    trafficAnalysis
  };
}

function selectTrafficAnalysisType(t) {
  return {
    type: DashboardConstants.SELECT_ANALYSIS_TYPE,
    t
  };
}

function selectPage(page) {
  return {
    type: DashboardConstants.SELECT_PAGE,
    page
  };
}

// Naa
function changeBagItemStatus(item) {
  return {
    type: DashboardConstants.CHANGE_BAG_ITEM_STATUS,
    item
  };
}

function checkAllBagItemStatus(status) {
  return {
    type: DashboardConstants.CHECK_ALL_BAG_ITEM_STATUS,
    status
  };
}

function changeGlobalVar(data) {
  return {
    type: DashboardConstants.CHANGE_GLOBAL_VAR,
    data
  };
}

function changeComeFrom(comeFrom) {
  return {
    type: DashboardConstants.CHANGE_COME_FROM,
    comeFrom
  };
}

function changeTrackersDate(date) {
  return {
    type: DashboardConstants.CHANGE_TRACKERS_DATE,
    date
  };
}

// trackers
function editableTracker(id) {
  return {
    type: trackersConstants.EDITABLE_TRACKER,
    id
  };
}

function goToAddTracker() {
  return {
    type: trackersConstants.GO_TO_ADD_TRACKER
  };
}

function changeAddTracker(data) {
  return {
    type: trackersConstants.CHANGE_ADD_TRACKER,
    data
  };
}

function createTracker() {
  return {
    type: trackersConstants.CREATE_TRACKER
  };
}

function deleteTracker(tracker) {
  return {
    type: trackersConstants.DELETE_TRACKER,
    tracker
  };
}

function changeEditableTracker(data) {
  return {
    type: trackersConstants.CHANGE_EDITABLE_TRACKER,
    data
  };
}

function editTracker() {
  return {
    type: trackersConstants.EDIT_TRACKER
  };
}

// traffic analysis
function editableTrafficAnalysis(id) {
  return {
    type: trafficAnalysisConstants.EDITABLE_TRAFFIC_ANALYSIS,
    id
  };
}

function goToAddTrafficAnalysis() {
  return {
    type: trafficAnalysisConstants.GO_TO_ADD_TRAFFIC_ANALYSIS
  };
}

function changeAddTrafficAnalysis(data) {
  return {
    type: trafficAnalysisConstants.CHANGE_ADD_TRAFFIC_ANALYSIS,
    data
  };
}

function createTrafficAnalysis() {
  return {
    type: trafficAnalysisConstants.CREATE_TRAFFIC_ANALYSIS
  };
}

function deleteTrafficAnalysis(trafficAnalysis) {
  return {
    type: trafficAnalysisConstants.DELETE_TRAFFIC_ANALYSIS,
    trafficAnalysis
  };
}

function changeEditableTrafficAnalysis(data) {
  return {
    type: trafficAnalysisConstants.CHANGE_EDITABLE_TRAFFIC_ANALYSIS,
    data
  };
}

function editTrafficAnalysis() {
  return {
    type: trafficAnalysisConstants.EDIT_TRAFFIC_ANALYSIS
  };
}

// projects
function editableProject(id) {
  return {
    type: projectsConstants.EDITABLE_PROJECT,
    id
  };
}

function goToAddProject() {
  return {
    type: projectsConstants.GO_TO_ADD_PROJECT
  };
}

function changeAddProject(data) {
  return {
    type: projectsConstants.CHANGE_ADD_PROJECT,
    data
  };
}

function createProject() {
  return {
    type: projectsConstants.CREATE_PROJECT
  };
}

function deleteProject(project) {
  return {
    type: projectsConstants.DELETE_PROJECT,
    project
  };
}

function changeEditableProject(data) {
  return {
    type: projectsConstants.CHANGE_EDITABLE_PROJECT,
    data
  };
}

function editProject() {
  return {
    type: projectsConstants.EDIT_PROJECT
  };
}
