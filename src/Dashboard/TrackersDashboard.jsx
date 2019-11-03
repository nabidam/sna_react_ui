import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {DashboardActions} from "../_actions";
import TrackerDashboardContainer from "./TrackerDashboardContainer";
import TrackerPostsContainer from "./TrackerPostsContainer";
import TrackerKeywordsContainer from "./TrackerKeywordsContainer";
import TrackerMarginsContainer from "./TrackerMarginsContainer";
import TrackerInfluencersContainer from "./TrackerInfluencersContainer";
import TrackerGroupsContainer from "./TrackerGroupsContainer";
import TrackerEmotionsContainer from "./TrackerEmotionsContainer";


class TrackersDashboard extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor TrackersDashboard")
    console.log(props)
    this.state = {};
  }

  render() {
    switch (this.props.selectedTrackerDashboardItem) {
      case "dashboard":
        return <TrackerDashboardContainer />;
        break;
      case "posts":
        return <TrackerPostsContainer />;
        break;
      case "keywords":
        return <TrackerKeywordsContainer />;
        break;
      case "margins":
        return <TrackerMarginsContainer />;
        break;
      case "influencers":
        return <TrackerInfluencersContainer />;
        break;
      case "emotions":
        return <TrackerEmotionsContainer />;
        break;
      case "groups":
        return <TrackerGroupsContainer />;
        break;
      case "emotions":
        return <TrackerEmotionsContainer />;
        break;

      default:
        break;
    }
  }
}

TrackersDashboard.propTypes = {
  //classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const {selectedTrackerDashboardItem} = state;
  console.log("Trackers Dashboard mapStateToProps")
  console.log(state)
  return {
    trackers:selectedTrackerDashboardItem.trackers,
    selectedTracker: selectedTrackerDashboardItem.selectedTracker,
    selectedTrackerDashboardItem:selectedTrackerDashboardItem.selectedTrackerDashboardItem
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeSelectedTracker: id => {
      dispatch(DashboardActions.changeSelectedTracker(id));
    }
  };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TrackersDashboard);
