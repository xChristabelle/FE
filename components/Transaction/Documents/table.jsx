import * as React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
  Paper,
  Button,
  Grid,
  Menu,
  MenuItem,
  TableRow,
  TextField,
  Popover,
  Modal, 
} from "@mui/material";

import {
  DensityMedium,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Check,
  Close
} from "@mui/icons-material";

const BasicPopover = ({ title }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <React.Fragment>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{ marginRight: 2 }}
      >
        {title}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <React.Fragment>
          <Box sx={{ p: 2, width: 550 }}>
            <Typography sx={{ pt: 1, pb: 2 }} variant="h5">
              {title}
            </Typography>
            <TextField
              id={`${title}`}
              label="Notes"
              multiline
              rows={4}
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button variant="contained">Submit</Button>
          </Box>
        </React.Fragment>
      </Popover>
    </React.Fragment>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  minWidth: "50%",
  height: "95%",
};

const ViewModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        View
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

const Row = (props) => {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.phase}</TableCell>
        <TableCell>{row.isPrivate ? <Check /> : <Close />}</TableCell>
        <TableCell>{row.uploadedBy}</TableCell>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <BasicPopover title="Notes" />
                  <BasicPopover title="Request for Exemption" />
                </Grid>
                <Grid item xs={6} display="flex" justifyContent="flex-end">
                  <IconButton
                    id="basic-button"
                    aria-controls={openMenu ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openMenu ? "true" : undefined}
                    onClick={handleClick}
                    sx={{ mr: 1 }}
                  >
                    <DensityMedium />
                  </IconButton>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      Upload Completed Document
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Send Broker Template
                    </MenuItem>
                  </Menu>
                  <ViewModal />
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};
const rows = [
  {
    name: "MLS Property History Report",
    phase: "Active",
    isPrivate: false,
    uploadedBy: "",
  },
  {
    name: "NSF - Use of Non-Standard Forms Advisory",
    phase: "Active",
    isPrivate: false,
    uploadedBy: "",
  },
  {
    name: "FHDA - Fair Housing & Discrimination Advisory",
    phase: "Active",
    isPrivate: false,
    uploadedBy: "",
  },
  {
    name: "RCSD-S - Representative Capacity Signature Disclosure",
    phase: "Active",
    isPrivate: false,
    uploadedBy: "",
  },
  {
    name: "RCSD-S Documentation to Show Signature Authority",
    phase: "Active",
    isPrivate: false,
    uploadedBy: "",
  },
];

const DocumentsTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Document Name</TableCell>
            <TableCell>Phase</TableCell>
            <TableCell>Private</TableCell>
            <TableCell>Uploaded By</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DocumentsTable;
