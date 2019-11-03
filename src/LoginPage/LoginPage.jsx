import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import PropTypes from "prop-types";
import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  withStyles
} from "@material-ui/core";
//import '../_styles/bootstrap-theme.css'

const styles = theme => ({
  root: {
    alignItems: "center",
    display: "flex",
    flexGrow: 1
  },
  content: {
    alignItems: "center",
    flexGrow: 1,
    padding: theme.spacing(3),
    marginRight: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  paper: {
    // height: "35vh",
    border: "4px solid #1FAF7E",
    borderRadius: "12px",
    padding: "20px 40px 60px 0",
    display: "block"
  },
  container: {
    display: "block",
    boxSizing: "border-box"
    // flexDirection: "column",
    // flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    direction: "rtl"
  },
  submitButton: {
    alignItems: "left",
    backgroundColor: "#035574",
    padding: "8px 30px",
    marginRight: "10px",
    marginTop: "15px",
    color: "white",
    "&:hover": {
      backgroundColor: "#1FAF7E"
    }
  }
});
class LoginPage extends Component {
  constructor(props) {
    super(props);

    console.log("login:");
    console.log(this.props);

    if (!localStorage.user) {
      // reset login status
      this.state = {
        username: "",
        password: "",
        submitted: false
      };
    } else {
      this.state = localStorage.getItem("user");
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    this.setState({ submitted: true });
    const { username, password } = this.state;
    console.log("login page");
    console.log(`${username}:${password}`);
    if (username && password) {
      this.props.login(username, password);
    }
  }

  render() {
    const { props, classes, alert } = this.props;
    console.log("props: ");
    console.log(props);
    const { username, password, submitted } = this.state;
    return (
      <main className={classes.content}>
        <Container maxWidth="lg">
          <Grid container className={classes.root}>
            <Grid item md={12} sm={12} xs={12}>
              <Paper className={classes.paper}>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="h6">ورود به اسمارت افزار</Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography variant="body1">
                    فرم زیر را تکمیل کرده و ورود را بزنید.
                  </Typography>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <div
                    className={
                      "form-group has-feedback" +
                      (submitted && !username ? " has-error" : "")
                    }
                  >
                    <TextField
                      type="text"
                      className={classes.textField}
                      name="username"
                      placeholder="نام کاربری"
                      value={username}
                      onChange={this.handleChange}
                    />
                    {submitted && !username && (
                      <div className="help-block">نام کاربری ضروری است</div>
                    )}
                    <span className="glyphicon glyphicon-user form-control-feedback" />
                  </div>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <div
                    className={
                      "form-group has-feedback" +
                      (submitted && !password ? " has-error" : "")
                    }
                  >
                    <TextField
                      type="password"
                      className={classes.textField}
                      name="password"
                      placeholder="کلمه عبور"
                      value={password}
                      onChange={this.handleChange}
                    />
                    <span className="glyphicon glyphicon-lock form-control-feedback" />
                    {submitted && !password && (
                      <div className="help-block">کلمه عبور ضروری است</div>
                    )}
                  </div>
                </Grid>
                {/*<div className="col-xs-12">
                      <div className="checkbox icheck">
                        <label>
                          <input type="checkbox" name="remember-me"
                                 checked="checked"/> مرا به خاطر بسپار
                        </label>
                      </div>
                    </div>*/}
                <Grid item md={6} sm={6} xs={12}>
                  <Button
                    variant="contained"
                    className={classes.submitButton}
                    onClick={() => this.handleSubmit()}
                  >
                    ورود
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  loggingIn: PropTypes.bool
};

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) =>
      dispatch(userActions.login(username, password))
  };
};

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(LoginPage));
export { Login as LoginPage };
