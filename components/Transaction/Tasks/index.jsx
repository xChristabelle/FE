import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { faker } from "@faker-js/faker";
import TasksTable from "./table";
import Calendar from "@/components/Calendar";

const Tasks = () => {
  const active = [];

  for (let i = 0; i < 4; i++) {
    const newData = {
      task: faker.lorem.word(),
      phase: faker.lorem.word(),
      actions: faker.lorem.word(),
      assignedTo: faker.lorem.word(),
      markComplete: faker.lorem.word(),
      completedBy: faker.lorem.word(),
    };
    active.push(newData);
  }

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Agent
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Transaction Coordinator
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Transaction Auditor
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Broker Staff
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Broker Admin
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Team Admin
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Client
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Marketing
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Referral Agreement for John Stillwell
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Referral Agreement
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Showing Agent
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              TC
            </Button>
          </Box>
          <Box display={"inline"}>
            <Button variant="contained" sx={{ margin: 1 }}>
              Referral Mobile Home
            </Button>
          </Box>
          <TasksTable data={active} />
        </Grid>
        <Grid item xs={3}>
          <Calendar />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
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

export default Tasks;
