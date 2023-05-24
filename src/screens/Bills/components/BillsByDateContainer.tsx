import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import SectionHeader from "../../../components/SectionHeader.tsx";
import { drawerBackgroundColor } from "../../../utils/palette.ts";
import { billsByUniqueDueDate } from "./BillsByDate.service.ts";
import UniqueDueDateBills from "./UniqueDueDateBills.tsx";

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
