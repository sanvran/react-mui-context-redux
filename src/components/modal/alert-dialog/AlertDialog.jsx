import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// main component
const AlertDialog = ({
  open,
  openAlertDialog,
  closeAlertDialog,
  dialogContentBody,
}) => {
  return (
    <>
      <div>
        <Button variant="outlined" onClick={openAlertDialog}>
          Slide in alert dialog
        </Button>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={closeAlertDialog}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              {dialogContentBody}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeAlertDialog}>Disagree</Button>
            <Button onClick={closeAlertDialog}>Agree</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AlertDialog;
