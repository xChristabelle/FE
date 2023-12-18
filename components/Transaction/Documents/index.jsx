import React, { useRef, useState } from "react";
import { Button, Grid } from "@mui/material";
import DocumentsTable from "./table";

const Documents = () => {
  const [value, setValue] = useState({});
  const fileInputRef = useRef(null);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="contained" component="label">
            Upload File
            <input
              type="file"
              name="file"
              onChange={(e) => {
                setValue({
                  ...value,
                  file: e.target.files[0],
                });
              }}
              hidden
              ref={fileInputRef}
            />
          </Button>
        </Grid>
        <Grid item xs={12}>
          <DocumentsTable />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Documents;
