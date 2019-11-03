import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {
  Typography,
  Container,
  Grid,
  Paper,
  Button,
  TextField
} from "@material-ui/core";
import {DashboardActions} from "../_actions";
import {connect} from "react-redux";

const styles = theme => ({
  root: {
    display: "flex",
    flexGrow: 1
  },
  content: {
    direction: "rtl",
    flexGrow: 1,
    padding: theme.spacing(3),
    marginRight: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  paper: {
    // display: "flex",
    // height: "35vh",
    padding: "20px"
    // width: "40%vw"
  },
  container: {
    display: "flex"
    // flexDirection: "column",
    // flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    direction: "ltr"
  },
  submitButton: {
    backgroundColor: "green",
    margin: theme.spacing(1),
    color: "white",
    "&:hover": {
      backgroundColor: "darkgreen"
    }
  }
});

class AddTracker extends Component {
  constructor(props) {
    console.log("AddTracker");
    console.log(props);
    super(props);
    this.state = {
      name: "",
      terms: "",
      hashtags:"",
      isNameEntered: true,
      isTermsEntered: true,
      isHashtagsEntered: true
    };

    this.handleChangeName= this.handleChangeName.bind(this);
    this.handleChangeTerms = this.handleChangeTerms.bind(this);
    this.handleChangeHashtags = this.handleChangeHashtags.bind(this);
    this.handleAddTracker = this.handleAddTracker.bind(this);
  }

  handleChangeName = event => {
    this.setState({name: event.target.value});
    if (event.target.value == "") {
      this.setState({isNameEntered: false});
    } else {
      this.setState({isNameEntered: true});
    }
  };

  handleChangeTerms = event => {
    this.setState({terms: event.target.value});
    if (event.target.value == "") {
      this.setState({isTermsEntered: false});
    } else {
      this.setState({isTermsEntered: true});
    }
  };
  handleChangeHashtags= event => {
    this.setState({terms: event.target.value});
    if (event.target.value == "") {
      this.setState({isHashtagsEntered: false});
    } else {
      this.setState({isHashtagsEntered: true});
    }
  };

  handleAddTracker = () => {

    console.log('---------------------handleAddTracker---------------------')
    if (this.state.name != "") {
      if (this.state.terms != "") {
        var data = {
          name: this.state.name,
          terms: this.state.terms,
          hashtags: this.state.hashtags
        };
        this.setState({name: "", terms: ""});
        this.props.addTracker(data);
       // history.push("/");
        this.props.changeSnackbarStatus({
          open: true,
          msg: "با موفقیت ثبت شد."
        });
      } else {
        this.setState({isNameEntered: false});
      }
    } else {
      if (this.state.name != "") {
        this.setState({isNameEntered: false});
      }
      this.setState({isTermsEntered: false});
    }
  };

  render() {
    const {classes} = this.props;
    console.log("console.log('---------------------addTracker---------------------')");
    console.log(this.props);
    return (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="lg">
            <Grid container className={classes.root}>
              <Grid item md={12} sm={12} xs={12}>
                <Paper className={classes.paper}>
                  <Grid container spacing={2}>
                    <Grid item md={12} sm={12} xs={12}>
                      <Typography variant="h6">ایجاد پرسش جدید</Typography>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                      <Typography variant="body1">
                        برای ایجاد پرسش جدید، فرم زیر را تکمیل کنید.
                      </Typography>
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                      <TextField
                          id="outlined-name"
                          label="نام پرسش"
                          className={classes.textField}
                          value={this.state.name}
                          onChange={this.handleChangeName}
                          error={!this.state.isNameEntered}
                          required
                          margin="normal"
                          fullWidth
                      />
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                      <TextField
                          id="outlined-name"
                          label="terms"
                          className={classes.textField}
                          value={this.state.terms}
                          onChange={this.handleChangeTerms}
                          error={!this.state.isTermsEntered}
                          required
                          margin="normal"
                          fullWidth
                      />
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                      <TextField
                          id="outlined-name"
                          label="hashtags"
                          className={classes.textField}
                          value={this.state.username}
                          onChange={this.handleChangeHashtags}
                          error={!this.state.isHashtagsEntered}
                          required
                          margin="normal"
                          fullWidth
                      />
                    </Grid>
                    <Grid item md={6} sm={6} xs={12}>
                      <Button
                          variant="contained"
                          className={classes.submitButton}
                          onClick={() => this.handleAddTracker()}
                      >
                        ثبت
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTracker: data => {
      dispatch(DashboardActions.addTracker(data));
    },
    changeSnackbarStatus: data => {
      dispatch(DashboardActions.changeSnackbarStatus(data));
    }
  };
};

export default connect(
    null,
    mapDispatchToProps
)(withStyles(styles, {withTheme: true})(AddTracker));
