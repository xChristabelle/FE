import React from "react";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Autocomplete,
} from "@mui/material";

import Calendar from "@/components/Calendar";

const transactionPhase = [
  { id: "active", label: "Active" },
  { id: "pending", label: "Pending" },
  { id: "closing", label: "Submitted for Closing" },
];

const Details = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField id="transaction_id" label="Transaction ID" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="transaction_type"
                label="Transaction Type"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                id="transaction_phase"
                options={transactionPhase}
                fullWidth
                renderInput={(params) => (
                  <TextField {...params} label="Transaction Phase" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="agent" label="Agent" defaultValue="" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="client" label="Client" defaultValue="" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="lead_commission_plan"
                label="Lead Commission Plan"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="property_address"
                label="Full Property Address(Street, City, State, Zip)"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="sales_price" label="Sales Price" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel id="cash_deal_label">Cash Deal</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="cash_deal_label"
                  name="cash_deal_group"
                >
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="much_money_held"
                label="How much earnest money is held?"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="where_money_held"
                label="Where is the earnest money held?"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="when_money_deposit"
                label="When is earnest money deposit due?"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="date_listed" label="Date Listed" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="listed_expiration_date"
                label="Listing Expiration Date"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="acceptance_date"
                label="Acceptance Date"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="inspection_contingency_date"
                label="Home Inspection Contigency Date"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="appraisal_date" label="Appraisal Date" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="loan_contingency_date"
                label="Date Listed"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="closing_date" label="Closing Date" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="down_payment" label="Down Payment" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="termination_date"
                label="Termination Date"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="mls" label="MLS Number" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="listing_agent" label="Listing Agent" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="agent_telephone"
                label="Listing Agent Telephone"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="agent_email"
                label="Listing Agent Email"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="listing_broker" label="Listing Broker" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="listing_client" label="Listing Client" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="transaction_state"
                label="Transaction State"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="transaction_county"
                label="Transaction County"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="transaction_city"
                label="Transaction City"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="transaction_zip"
                label="Transaction Zip"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="property_tax"
                label="Property Tax/Tax ID"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="municipality" label="Municipality" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="expiration_date"
                label="Expiration Date"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="listing_price" label="Listing Price" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="commission_percentage"
                label="Commission Percentage"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="legal_description"
                label="Legal Description"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="seller_name" label="Seller Name" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="buyer_name" label="Buyer Name" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="buyer_phone_number"
                label="Buyer's Phone Number"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="buyer_email_address"
                label="Buyer's Email Address"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="seller_phone_number"
                label="Seller's Phone Number"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="seller_email_address"
                label=" Email Address"
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField id="lead_source" label="Lead Source" fullWidth />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Calendar />
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={2}>
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <Button variant="contained">Sales Sheet</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained">Submit For Closing</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained">Submit For Review</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained">Set Expired</Button>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained">CDA Form</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Details;
