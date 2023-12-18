import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Tab, Tabs, Button } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import Header from "@/components/Header";
import Details from "@/components/Transaction/Details";
import Tasks from "@/components/Transaction/Tasks";
import Documents from "@/components/Transaction/Documents";
import CDAForm from "@/components/Transaction/CDAForm";
import Contacts from "@/components/Transaction/Contacts";
import Schedule from "@/components/Transaction/Schedule";
import ActivityLog from "@/components/Transaction/ActivityLog";
import Notes from "@/components/Transaction/Notes";
import Chat from "@/components/Transaction/Chat";
import VideoEmail from "@/components/Transaction/VideoEmail";

const MySwal = withReactContent(Swal);

const CustomTabPanel = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const CreateTransaction = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = async (event, newValue) => {
    if (newValue === 10) {
      // Display SweetAlert or perform any other action for index 9
      await MySwal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          MySwal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } else {
      // Navigate to the selected tab
      setValue(newValue);
    }
  };

  return (
    <React.Fragment>
      <Box m="1.5rem 2.5rem">
        <Header
          title="Transaction"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        />
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="tabs">
            <Tab label="Details" {...a11yProps(0)} />
            <Tab label="Tasks" {...a11yProps(1)} />
            <Tab label="Documents" {...a11yProps(2)} />
            <Tab label="CDA Form" {...a11yProps(3)} />
            <Tab label="Contacts" {...a11yProps(4)} />
            <Tab label="Schedule" {...a11yProps(5)} />
            <Tab label="Activity Log" {...a11yProps(6)} />
            <Tab label="Chat" {...a11yProps(7)} />
            <Tab label="Notes" {...a11yProps(8)} />
            <Tab label="Video Email" {...a11yProps(9)} />
            <Tab label="Delete Transaction" {...a11yProps(10)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Details />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Tasks />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Documents />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <CDAForm />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Contacts />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <Schedule />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <ActivityLog />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={7}>
          <Chat />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={8}>
          <Notes />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={9}>
          <VideoEmail />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={10}></CustomTabPanel>
      </Box>
    </React.Fragment>
  );
};

export default CreateTransaction;
