// import React from 'react'
import { Grid, Typography } from "@mui/material";
import AllBillsContainer from "./components/AllBillsContainer.tsx";
import { drawerBackgroundColor } from "../../utils/palette.ts";
import SectionHeader from "../../components/SectionHeader.tsx";
import BillsByDateContainer from "./components/BillsByDateContainer.tsx";

const Bills = () => {
  return (
    <Grid container>
      <AllBillsContainer/>

      <BillsByDateContainer/>
    </Grid>
  );
};

export default Bills;
