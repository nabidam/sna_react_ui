import React from "react";
import classNames from "classnames";
import {
  Grid,
  Typography,
  Paper,
  Button,
  Avatar
} from "@material-ui/core";
import GiftIcon from "@material-ui/icons/CardGiftcard";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
      grow: {
        display: "flex",
        justifyContent: "flex-end",
        marginLeft: 10,
        flexGrow: 1,
        textAlign: "left",
        height: "32px",
        "&:hover": {}
      },
  card: {
    padding: "0px 24px",
    backgroundColor: "#fff",
    borderRadius: 0,
    boxShadow: "none",
    borderRight: "solid 1px #edf1f6"
    // minWidth: 275,
  },
  subtitle: {
    fontSize: "0.7em"
  },
  giftIcon: {
    color: "#fff"
  },
  avatar: {
    height: 32,
    width: 32,
    backgroundImage: "linear-gradient(315deg, #fc3832, #f2c314)"
  },
  cardText: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "right"
  },
  cardPlus: {
    "&:h5": {
      background: "linear-gradient(315deg, #fc3832, #f2c314)"
    }
  },
  primaryText: {
    fontWeitgh: "bold",
    color: "#08080d"
  },
  secondaryText: {
    fontSize: 8,
    color: "#404040"
  }
}));

const UpgradePremium = () => {
  const classes = useStyles();

  return (
      <div className={classes.grow}>
        <Paper className={classes.card} component={Button} variant="contained">
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
              <Avatar className={classes.avatar}>
                <GiftIcon className={classes.giftIcon} />
              </Avatar>
            </Grid>
            <Grid item xs zeroMinWidth className={classes.cardText}>
            <Typography
                  variant="body2"
                  component="p"
                  className={classes.primaryText}
              >
                ارتقاء سرویس
              </Typography>
              <Typography variant="subtitle2" className={classes.secondaryText}>
              ۱۴ روز رایگان
              </Typography>
            </Grid>
            <Grid item className={classNames(classes.cardText, classes.cardPlus)}>
            <Typography
                  variant="h5"
                  className={classNames(classes.plus, "upgradePremium-icon")}
            >
                +
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
  );
};

export default UpgradePremium;
