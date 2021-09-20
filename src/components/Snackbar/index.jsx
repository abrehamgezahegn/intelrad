import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbar({
  type = "success",
  isOpen,
  message = "",
  duration = 5000,
  onClose,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Snackbar open={isOpen} autoHideDuration={duration} onClose={onClose}>
        <Alert onClose={onClose} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}
