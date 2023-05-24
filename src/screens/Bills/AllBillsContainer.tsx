import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import BillCard from "./BillCard.tsx";
import { billSamples } from "./Bills.sample.ts";
import { drawerBackgroundColor } from "../../utils/palette.ts";

const AllBillsContainer = () => {
  return (
    <Grid
      item
      xs={12}
      md={6}
      m={4}
      p={3}
      sx={{
        backgroundColor: drawerBackgroundColor,
        height: "100vh",
        borderRadius: "1%",
      }}
    >
      <Box m={2}>
        <Typography variant="h4" fontWeight={800}>
          BILLS
        </Typography>
      </Box>

      {billSamples.map((bill) => (
         <BillCard bill={bill} key={bill.id} />
      ))}
    </Grid>
  );
};

export default AllBillsContainer;
