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
  { id: "item", label: "Item" },
  { id: "amount", label: "Amount" },
  { id: "charged", label: "Charged To" },
];

const OppositePartyCommission = () => {
  const [column, setColumn] = useState(initialCommissionColumns);
  const [rows, setRows] = useState([
    {
      item: "Commission",
      amount: <TextField id="commission" label="" fullWidth />,
      charged: <TextField id="charged_to" label="" fullWidth />,
    },
  ]);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CDAFormTable columns={column} data={rows} />
        </Grid>
        <Grid item xs={12}>
          <Typography>Total Amount: 0</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default OppositePartyCommission;
