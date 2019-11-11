import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";
import lesMiserablesData from "../_data/les-miserables.gexf";
import gexf from "gexf";

class InfluencersGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getOption = () => ({
    // title: {
    //   text: "Les Miserables",
    //   subtext: "Default layout",
    //   top: "bottom",
    //   left: "right"
    // },
    tooltip: {},
    // legend: [
    //   {
    //     // selectedMode: 'single',
    //     data: this.state.graphCategories.map(function(a) {
    //       return a.name;
    //     })
    //   }
    // ],
    animationDuration: 1500,
    animationEasingUpdate: "quinticInOut",
    series: [
      {
        name: "Les Miserables",
        type: "graph",
        layout: "none",
        data: this.props.graph.nodes,
        links: this.props.graph.links,
        categories: this.props.graphCategories,
        roam: true,
        focusNodeAdjacency: true,
        itemStyle: {
          normal: {
            borderColor: "#fff",
            borderWidth: 1,
            shadowBlur: 10,
            shadowColor: "rgba(0, 0, 0, 0.3)"
          }
        },
        // label: {
        //   position: "right",
        //   formatter: "{b}"
        // },
        lineStyle: {
          color: "source",
          curveness: 0.3
        },
        emphasis: {
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  });

  render() {
    const { classes, graph, graphCategories } = this.props;
    return (
      <div>
        <ReactEcharts option={this.getOption()} style={{ height: 300 }} />
      </div>
    );
  }
}

InfluencersGraph.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { trackers } = state;
  return {
    trackers: trackers.trackers,
    selectedTracker: trackers.selectedTracker,
    selectedTrackerDashboardItem: trackers.selectedTrackerDashboardItem,
    posts: trackers.posts,
    keywords: trackers.keywords
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InfluencersGraph);
