import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import CDAFormTable from "./table";

const initialCommissionColumns = [
  { id: "disbursement", label: "Disbursement" },
  { id: "amount", label: "Amount" },
  { id: "payTo", label: "Pay To" },
  { id: "payFrom", label: "Pay From" },
];

const Disbursement = () => {
  const [disbursement, setDisbursement] = useState(initialCommissionColumns);
  const [rows, setRows] = useState([
    {
      disbursement: "Net Pay Due to Agent (Estimate)",
      amount: <TextField id="net_pay" label="" fullWidth />,
      payTo: <TextField id="pay_to_1" label="" fullWidth />,
    },
  ]);
  const [selectedType, setSelectedType] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleAddRow = () => {
    const newRow = {
      disbursement: selectedType,
      amount: (
        <TextField
          id={`${selectedType}_${rows.length + 1}`}
          label=""
          fullWidth
        />
      ),
      payTo: <TextField id={`pay_to_${rows.length + 1}`} label="" fullWidth />,
      payFrom: (
        <TextField id={`pay_from_${rows.length + 1}`} label="" fullWidth />
      ),
    };
    setRows([...rows, newRow]);
    setSelectedType("");
    setIsButtonDisabled(true);
  };

  const handleTypeChange = (event) => {
    const typeValue = event.target.value;
    setSelectedType(typeValue);
    const newColumns = typeValue
      ? [...initialCommissionColumns]
      : initialCommissionColumns;
    setDisbursement(newColumns);
    setIsButtonDisabled(!typeValue);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CDAFormTable columns={disbursement} data={rows} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Total Amount: 0</Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="type-select-label"></InputLabel>
            <Select
              labelId="type-select-label"
              id="type-select"
              value={selectedType}
              onChange={handleTypeChange}
            >
              <MenuItem value="Add a payout">-- Add a payout --</MenuItem>
              <MenuItem value="Additional brokerage split or fees">
                Additional brokerage split or fees
              </MenuItem>
              <MenuItem value="Contribution to buyer">
                Contribution to buyer
              </MenuItem>
              <MenuItem value="Contribution to seller">
                Contribution to seller
              </MenuItem>
              <MenuItem value="External Referral">External Referral</MenuItem>
              <MenuItem value="Corporation Name">Corporation Name</MenuItem>
              <MenuItem value="Transaction Coordinator Fee">
                Transaction Coordinator Fee
              </MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddRow}
            disabled={isButtonDisabled}
            fullWidth
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Disbursement;
