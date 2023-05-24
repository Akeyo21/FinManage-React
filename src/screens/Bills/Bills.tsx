// import React from 'react'
import { Grid, Typography } from "@mui/material";
import AllBillsContainer from "./AllBillsContainer.tsx";
import { drawerBackgroundColor } from "../../utils/palette.ts";

const Bills = () => {
  return (
    <Grid container>
      <AllBillsContainer/>

      <Grid item xs={12} md={5} my={4} sx={{
        backgroundColor: drawerBackgroundColor,
        height: "100vh",
        borderRadius: "1%",
      }}>
        <Typography>BILLS BY DATE</Typography>
      </Grid>
    </Grid>
  );
};

export default Bills;
