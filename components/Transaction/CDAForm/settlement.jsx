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
  { id: "charges", label: "Charges" },
  { id: "amount", label: "Amount" },
  { id: "charged", label: "Charged To" },
];

const Settlement = () => {
  const [settlement, setSettlement] = useState(initialCommissionColumns);
  const [rows, setRows] = useState([
    {
      charges: "Commission",
      amount: <TextField id="commission" label="" fullWidth />,
      charged: <TextField id="charged_to_1" label="" fullWidth />,
    },
  ]);
  const [selectedType, setSelectedType] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleAddRow = () => {
    const newRow = {
      charges: selectedType || "Type",
      amount: (
        <TextField
          id={`${selectedType}_${rows.length + 1}`}
          label=""
          fullWidth
        />
      ),
      charged: (
        <TextField id={`charged_to_${rows.length + 1}`} label="" fullWidth />
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
    setSettlement(newColumns);
    setIsButtonDisabled(!typeValue);
  };

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CDAFormTable columns={settlement} data={rows} />
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
              <MenuItem value="Bonus">Bonus</MenuItem>
              <MenuItem value="Transaction Fee">Transaction Fee</MenuItem>
              <MenuItem value="Pre-Commission settlement change">
                Pre-Commission settlement change
              </MenuItem>
              <MenuItem value="Commission reduction">
                Commission reduction
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

export default Settlement;
