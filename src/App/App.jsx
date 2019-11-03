import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from '../_helpers';
import {alertActions, userActions} from '../_actions';
import { First} from '../Dashboard';
import { LoginPage } from '../LoginPage';
import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});
class App extends React.Component {
    constructor(props) {
        super(props);
        history.listen((location, action) => {
        console.log("on route change");
        this.props.clear();
      });
      console.log('App')
      console.log(this.props)
    }


    render() {

        const { alert,classes } = this.props;
        return (
            <div className={classes.root}>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history} >
                            <div>
                                <Route path="/" component={First} />
                                <Route exact path="/login" component={LoginPage} />
                            </div>
                        </Router>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}
const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(userActions.login()),
    clear: () =>dispatch(alertActions.clear())
  };
};
const connectedApp = connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(App));
export { connectedApp as App }; 