import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { alert } from "./alert.reducer";
import { DashboardReducer, trackersReducer } from "./dashboard.reducer";

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  // dashboards reducers
  triggerDrawer: DashboardReducer.triggerDrawer,
  changeSnackbarStatus: DashboardReducer.changeSnackbarStatus,
  selectedTrackerMenu: DashboardReducer.selectedTrackerMenu,
  selectedTrackerDashboardItem: DashboardReducer.selectedTrackerDashboardItem,
  // trackers reducers
  editableTracker: trackersReducer.editableTracker,
  goToAddTracker: trackersReducer.goToAddTracker,
  changeAddTracker: trackersReducer.changeAddTracker,
  createTracker: trackersReducer.createTracker,
  deleteTracker: trackersReducer.deleteTracker,
  changeEditableTracker: trackersReducer.changeEditableTracker,
  editTracker: trackersReducer.editTracker
});

export default rootReducer;
