import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {connect} from "react-redux";
import {DashboardActions} from "../_actions";
import {history} from "../_helpers";

class MainDashboard extends React.Component {
  componentDidMount = () => {
    history.push("dashboard/trackers");
  };
  render() {
    return <main></main>;
  }
}

export default MainDashboard;