import React from "react";
import { Button, Grid, TextField } from "@mui/material";

const Notes = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField id="notes" label="Notes" multiline rows={10} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Button variant="contained" fullWidth>
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
            No Notes Found
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Notes;
