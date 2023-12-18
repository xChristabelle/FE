import React from "react";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import Calendar from "@/components/Calendar";

const ActivityLog = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <List
                sx={{
                  width: "100%",
                }}
              >
                {[1, 2, 3].map((value) => (
                  <ListItem
                    key={value}
                    secondaryAction={
                      <Typography variant="body2">
                        {new Date().toLocaleString()}
                      </Typography>
                    }
                  >
                    <ListItemText primary={`Line item ${value}`} />
                  </ListItem>
                ))}
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Calendar />
        </Grid>
        <Grid item xs={12}>
          <Box m={2} component={"span"}>
            <Button variant="contained">Submit for Closing</Button>
          </Box>
          <Box m={2} component={"span"}>
            <Button variant="contained">Submitted for Review</Button>
          </Box>
          <Box m={2} component={"span"}>
            <Button variant="contained">Set Expired</Button>
          </Box>
          <Box m={2} component={"span"}>
            <Button variant="contained">CDA Form</Button>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ActivityLog;
