import React from 'react'
import Grid from "@mui/material/Grid";
import AllBillsContainer from "./components/AllBillsContainer";
import BillsByDateContainer from "./components/BillsByDateContainer";

const Bills = () => {
  return (
    <Grid container>
      <AllBillsContainer/>

      <BillsByDateContainer/>
    </Grid>
  );
};

export default Bills;
