import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

import SectionHeader from "../../../components/SectionHeader.tsx";
import { drawerBackgroundColor } from "../../../utils/palette.ts";
import { billsByUniqueDueDate } from "./UniqueDueDateBills.ts";

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
            <>
              <Card sx={{ m: 2 }}>
                <CardContent>
                  <Typography variant="h5" fontWeight={500}>
                    {uniqueDueDate} of every month
                  </Typography>
                  <Divider />
                  {billsDueDateMap[uniqueDueDate]?.map((bill) => (
                    <Typography m={1}>{bill.name}</Typography>
                  ))}
                </CardContent>
              </Card>
            </>
          )
      )}
    </Grid>
  );
};

export default BillsByDateContainer;
