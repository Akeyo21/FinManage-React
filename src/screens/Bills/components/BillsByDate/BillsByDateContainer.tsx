import React from 'react'
import Grid from "@mui/material/Grid";

import SectionHeader from "../../../../components/SectionHeader";
import { drawerBackgroundColor } from "../../../../utils/palette";
import { billsByUniqueDueDate } from "./BillsByDate.service";
import UniqueDueDateBills from "./UniqueDueDateBills";

const BillsByDateContainer = () => {
  const { dates, billsDueDateMap } = billsByUniqueDueDate();

  return (
    <Grid
      item
      xs={12}
      md={5}
      my={4}
      p={3}
      sx={{
        backgroundColor: drawerBackgroundColor,
        height: "100vh",
        borderRadius: "1%",
        overflow: "scroll",
      }}
    >
      <SectionHeader text="Bills by date" />

      {dates.map(
        (uniqueDueDate) =>
          billsDueDateMap[uniqueDueDate] && (
            <UniqueDueDateBills
              bills={billsDueDateMap[uniqueDueDate]}
              dueDate={uniqueDueDate}
            />
          )
      )}
    </Grid>
  );
};

export default BillsByDateContainer;
