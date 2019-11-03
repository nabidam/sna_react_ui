import {combineReducers} from 'redux';
import {authentication} from './authentication.reducer';
import {users} from './users.reducer';
import {alert} from './alert.reducer';
import {DashboardReducer} from './dashboard.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  alert,
  triggerDrawer: DashboardReducer.triggerDrawer,
  lastTrackers: DashboardReducer.lastTrackers,
  changeSnackbarStatus: DashboardReducer.changeSnackbarStatus,
  selectedTrackerMenu: DashboardReducer.selectedTrackerMenu,
  selectedTrackerDashboardItem: DashboardReducer.selectedTrackerDashboardItem
});

export default rootReducer;