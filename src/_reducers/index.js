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
  trackers: trackersReducer.trackers
});

export default rootReducer;
