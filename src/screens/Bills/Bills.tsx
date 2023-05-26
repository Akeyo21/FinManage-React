import React from 'react'
import Grid from "@mui/material/Grid";
import AllBillsContainer from "./components/AllBills/AllBillsContainer";
import BillsByDateContainer from "./components/BillsByDate/BillsByDateContainer";

const Bills = () => {
  return (
    <Grid container>
      <AllBillsContainer/>

      <BillsByDateContainer/>
    </Grid>
  );
};

export default Bills;
