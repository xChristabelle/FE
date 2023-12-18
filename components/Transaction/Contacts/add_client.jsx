import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
const AddClient = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (event) => {
    const typeValue = event.target.value;
    setSelectedType(typeValue);
  };

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default AddClient;
