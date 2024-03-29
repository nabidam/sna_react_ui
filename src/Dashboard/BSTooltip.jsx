import React from "react";
import PropTypes from "prop-types";
import { makeStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const arrowGenerator = color => {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${color} transparent`
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: 0,
      marginBottom: "-0.95em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${color} transparent transparent transparent`
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.95em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${color} transparent transparent`
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.95em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${color}`
      }
    }
  };
};

const useStylesBootstrap = makeStyles(theme => ({
  arrow: {
    position: "absolute",
    fontSize: 6,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid"
    }
  },
  popper: arrowGenerator(theme.palette.common.black),
  tooltip: {
    position: "relative",
    backgroundColor: theme.palette.common.black
  },
  tooltipPlacementLeft: {
    margin: "0 8px"
  },
  tooltipPlacementRight: {
    margin: "0 8px"
  },
  tooltipPlacementTop: {
    margin: "8px 0"
  },
  tooltipPlacementBottom: {
    margin: "8px 0"
  }
}));

function BootstrapTooltip(props) {
  const {arrow, ...classes} = useStylesBootstrap();
  const [arrowRef, setArrowRef] = React.useState(null);

  return (
      <Tooltip
          classes={classes}
          PopperProps={{
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(arrowRef),
                  element: arrowRef
                }
              }
            }
          }}
          {...props}
          title={
            <React.Fragment>
              {props.title}
              <span className={arrow} ref={setArrowRef} />
            </React.Fragment>
          }
      />
  );
}

BootstrapTooltip.propTypes = {
  title: PropTypes.node
};

export default BootstrapTooltip;
