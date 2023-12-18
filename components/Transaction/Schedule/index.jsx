import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import Calendar from "@/components/Calendar";

const Schedule = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField id="title" label="Title" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField id="summary" label="Summary" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="location" label="Location" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="timezone" label="Time Zone" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <TextField id="startDate" label="Start Date" fullWidth />
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                <FormLabel id="recurring-label">Recurring</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="recurring-label"
                  name="recurring"
                >
                  <FormControlLabel
                    value="none"
                    control={<Radio />}
                    label="None"
                  />
                  <FormControlLabel
                    value="weekly"
                    control={<Radio />}
                    label="Weekly"
                  />
                  <FormControlLabel
                    value="monthly"
                    control={<Radio />}
                    label="Monthly"
                  />
                  <FormControlLabel
                    value="yearly"
                    control={<Radio />}
                    label="Yearly"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <TextField id="taskType" label="Task Type" fullWidth />
            </Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={3}>
              <Button variant="contained" fullWidth>
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Calendar />
        </Grid>
      </Grid>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>Transaction Calendar</Typography>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "prev,next, today",
            center: "title",
            end: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          events={[
            { title: "event 1", date: "2023-12-01" },
            { title: "event 2", date: "2023-12-02" },
          ]}
          height="50vh"
        />
      </Box>
    </React.Fragment>
  );
};

export default Schedule;
