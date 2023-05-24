// import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import BillCard from "./BillCard.tsx";
import { billSamples } from "./Bills.sample.ts";
import { drawerBackgroundColor } from "../../utils/palette.ts";

const Bills = () => {
  return (
    <Grid container spacing={2} ml={10} py={8}>
      <Grid
        item
        xs={12}
        md={6}
        p={3}
        sx={{
          backgroundColor: drawerBackgroundColor,
          height: "100vh",
          borderRadius: "1%",
        }}
      >
        <Box m={2}>
          <Typography variant="h4" fontWeight={800}>BILLS</Typography>
        </Box>

        <BillCard bill={billSamples[0]} />
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography>BILLS BY DATE</Typography>
      </Grid>
    </Grid>
  );
};

export default Bills;
