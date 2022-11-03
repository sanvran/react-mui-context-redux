import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function ModalDialog(props) {
  const { children, onClose, dialogContent, setFormValue, ...other } = props;
  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

ModalDialog.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// main componenets
const MyModalDialog = ({
  handleClose,
  open,
  title,
  btnAction,
  dialogContent,
  setFormValue,
  fullWidth,
  size,
}) => {
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={fullWidth}
        maxWidth={size}
      >
        <ModalDialog id="customized-dialog-title" onClose={handleClose}>
          {title}
        </ModalDialog>
        <DialogContent dividers>{dialogContent}</DialogContent>
        <DialogActions>{btnAction}</DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default MyModalDialog;
