import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import BillCard from "./BillCard";
import { billSamples } from "../Bills.sample";
import { drawerBackgroundColor } from "../../../utils/palette";
import SectionHeader from "../../../components/SectionHeader";

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
        overflow: "scroll",
      }}
    >
      <SectionHeader text="Bills" />

      <Box>
        {billSamples.map((bill) => (
          <BillCard bill={bill} key={bill.id} />
        ))}
      </Box>
    </Grid>
  );
};

export default AllBillsContainer;
