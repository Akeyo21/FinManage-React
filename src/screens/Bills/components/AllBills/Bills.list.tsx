import React from 'react';
import Box from "@mui/material/Box";

import BillCard from "./BillCard";
import { billSamples } from "../../Bills.sample";

const BillsList = ()=>{
  return(
    <Box>
        {billSamples.map((bill) => (
          <BillCard bill={bill} key={bill.id} />
        ))}
      </Box>
  )
}

export default BillsList
