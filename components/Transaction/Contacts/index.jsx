import React, { useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";

import Calendar from "@/components/Calendar";
import AddClient from "./add_client";
import ClientCard from "./client_card";

const client = {
  fullName: "John Doe",
  email: "tbd@gmail.com",
};

const Contacts = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h4">Add New Client</Typography>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <AddClient />
                </Grid>
                <Grid item xs={2}>
                  <Button variant="contained">Add</Button>
                </Grid>
                <Grid item xs={6}>
                  <ClientCard data={client} />
                </Grid>
                <Grid item xs={12}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h5" mb={2}>
                        Primary Agent
                      </Typography>
                      <ClientCard button="agent" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" mb={2}>
                        Attorney
                      </Typography>
                      <ClientCard button="attorney" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" mb={2}>
                        Lender
                      </Typography>
                      <ClientCard button="lender" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" mb={2}>
                        Title Rep
                      </Typography>
                      <ClientCard button="title rep" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" mb={2}>
                        Escrow Rep
                      </Typography>
                      <ClientCard button="escrow rep" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" mb={2}>
                        Transaction Coordinator
                      </Typography>
                      <ClientCard button="transaction coordinator" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" mb={2}>
                        Shared User
                      </Typography>
                      <ClientCard button="Shared User" />
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h5" mb={2}>
                        Share Transaction
                      </Typography>
                      <ClientCard button="Share Transaction" />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ mt: 1 }}>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Calendar />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Contacts;
