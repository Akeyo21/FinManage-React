import  Grid from "@mui/material/Grid";

import SectionHeader from "../../../components/SectionHeader.tsx";
import { drawerBackgroundColor } from "../../../utils/palette.ts";

const BillsByDateContainer =()=>{
  return (
    <Grid item xs={12} md={5} my={4} p={3} sx={{
      backgroundColor: drawerBackgroundColor,
      height: "100vh",
      borderRadius: "1%",
    }}>
      {/* <SectionHeader text="Bills by date"/> */}
    </Grid>
  )
}

export default BillsByDateContainer
