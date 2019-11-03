import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";
import WordsCloud from "./WordsCloud";
import {PrivateRoute} from "../_components";
import {Dashboard} from './Dashboard'

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  close: {
    padding: theme.spacing(0.5)
  },
  success: {
    backgroundColor: green[600]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

class First extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {classes} = this.props;

    console.log("user")
    console.log(localStorage.getItem('user'))
    console.log(this.props)
    return (
        <div className={classes.root}>
          <PrivateRoute path="/" component={Dashboard} />
          <PrivateRoute path="/cloud" component={WordsCloud} />
        </div>
    );
  }
}

const FirstPage = (withStyles(styles, {withTheme: true})(First));
export {FirstPage as First};