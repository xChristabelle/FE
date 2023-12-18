import * as React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { faker } from "@faker-js/faker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ClientCard = ({ data, button }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Card sx={{ minHeight: 210 }}>
        <Grid container spacing={2}>
          {data ? (
            <React.Fragment>
              <Grid item xs={4}>
                <CardMedia
                  sx={{ height: 140, margin: 4 }}
                  image={faker.image.avatar()}
                  title=""
                />
              </Grid>
              <Grid item xs={8}>
                <CardContent>
                  <Typography variant="h6" color="text.primary" gutterBottom>
                    {data.fullName}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {data.email}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid item xs={12}>
                <CardContent>
                  <Button size="small" onClick={handleOpen}>
                    Add {button}
                  </Button>
                </CardContent>
              </Grid>
            </React.Fragment>
          )}
        </Grid>
      </Card>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField id="name" label="Name" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="companyName" label="Company Name" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="address" label="Address Line 1" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="address2" label="Address Line 2" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="state" label="State" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="city" label="City" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="zip" label="Zip Code" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="email" label="Email" fullWidth />
                </Grid>
                <Grid item xs={6}>
                  <TextField id="phone" label="Phone Number" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Button size="small">
                    Add {button}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}></Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default ClientCard;
