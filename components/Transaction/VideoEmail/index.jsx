import React from "react";
import { Grid } from "@mui/material";

import Calendar from "@/components/Calendar";

const VideoEmail = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={9}></Grid>
        <Grid item xs={3}>
          <Calendar />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default VideoEmail;
