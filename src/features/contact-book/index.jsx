import { Box, Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header";
import BasicTable from "../../components/table/basic-table";
import MyModalDialog from "../../components/modal/ModalDialog";
import AlertDialog from "../../components/modal/alert-dialog/AlertDialog";
const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const initFormVal = {
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
  };
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [formValue, setFormValue] = useState(initFormVal);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFormValue(initFormVal);
  };
  const openAlertDialog = () => {
    setOpenAlert(true);
  };
  const closeAlertDialog = () => {
    setOpenAlert(false);
    setFormValue(initFormVal);
  };
  const columns = [
    { name: "First name" },
    { name: "Last name" },
    { name: "Contact" },
    { name: "Email" },
  ];
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const submitFormData = () => {
    console.log("submitFormData", formValue);
  };

  const ContactAddForm = () => {
    return (
      <form autoComplete="off" onSubmit={submitFormData}>
        <Box mb={2}>
          <TextField
            label="First Name"
            size="small"
            fullWidth
            name="firstName"
            value={formValue.firstName}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Last name"
            size="small"
            fullWidth
            name="lastName"
            value={formValue.lastName}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Mobile number"
            type="number"
            size="small"
            fullWidth
            name="contact"
            value={formValue.contact}
            onChange={handleInputChange}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label="Email id"
            type="email"
            size="small"
            fullWidth
            name="email"
            value={formValue.email}
            onChange={handleInputChange}
          />
        </Box>
      </form>
    );
  };

  const ActionButton = () => (
    <Box>
      <Button variant="outlined" color="error" onClick={handleClose}>
        Close
      </Button>
      <Button variant="outlined" onClick={submitFormData}>
        Submit
      </Button>
    </Box>
  );

  return (
    <>
      <Header />
      <Container>
        <Box display="flex" justifyContent="flex-end">
          <Box mt={2}>
            <Button variant="outlined" onClick={handleClickOpen}>
              Add contact
            </Button>
          </Box>
        </Box>
        <BasicTable columns={columns} rows={contacts} heading="Contact List" />
        <MyModalDialog
          fullWidth={true}
          size="sm"
          title="Add contact"
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          open={open}
          btnAction={<ActionButton />}
          dialogContent={<ContactAddForm />}
        />
        <AlertDialog
          openAlertDialog={openAlertDialog}
          closeAlertDialog={closeAlertDialog}
          open={openAlert}
          dialogContentBody={<ContactAddForm />}
        />
      </Container>
    </>
  );
};

export default ContactList;
