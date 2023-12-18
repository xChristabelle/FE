import React, { useState } from "react";
import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Settlement from "./settlement";
import Disbursement from "./disbursement";
import OppositePartyCommission from "./opposite_party_commission";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  minWidth: "50%",
  height: "35%",
};

const ContactsModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} fullWidth>
        Contacts
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" mb={2}>Contacts</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6">ATTORNEY</Typography>
              <Typography variant="body1">
                no Attorney added! click here to add.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">LENDER</Typography>
              <Typography variant="body1">
                no Lender added! click here to add.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">TITLE REP</Typography>
              <Typography variant="body1">
                no Title Rep added! click here to add.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">ESCROW REP</Typography>
              <Typography variant="body1">
                no Escrow Rep added! click here to add.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">TRANSACTION COORDINATOR</Typography>
              <Typography variant="body1">
                no Transaction Coordinator added! click here to add.
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">SHARED AGENTS</Typography>
              <Typography variant="body1">
                no Shared Agents added! click here to add.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

const CDAForm = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3">Closing Company:</Typography>
            </Grid>
            <Grid item xs={4}>
              <TextField id="company_name" label="Company Name" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField id="phone" label="Phone" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField id="file_number" label="File Number" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField id="contact_name" label="Contact Name" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField id="fax" label="Fax" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField id="email" label="Email Address" fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="corporation_name"
                label="Corporation Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField id="ein" label="EIN" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="message"
                label="Message"
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
          </Grid>
          <br /> <br /> <br />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3">Settlement Charges:</Typography>
              <Typography variant="body1">
                Itemize commission and fees due for your side of this
                transaction.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Settlement />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">Disbursement:</Typography>
              <Typography variant="body1">
                Itemize all disbursement from the total settlement charges.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Disbursement />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3">Opposite Party Commission:</Typography>
              <Typography variant="body1">
                Opposite Party (Agent) Commission.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <OppositePartyCommission />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained">Save</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h3">Transaction Details:</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField id="sales_price" label="Sales Price" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="earnest_money_held"
                label="How much earnest money is held?"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    id="acceptance_date"
                    label="Acceptance Date"
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    id="inspection_contingency_date"
                    label="Home Inspection Contingency Date"
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    id="appraisal_date"
                    label="Appraisal Date"
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    id="loan_contingency_date"
                    label="Loan Contingency Date"
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DatePicker"]}>
                  <DatePicker
                    id="closing_date"
                    label="Closing Date"
                    slotProps={{ textField: { fullWidth: true } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <ContactsModal />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default CDAForm;
