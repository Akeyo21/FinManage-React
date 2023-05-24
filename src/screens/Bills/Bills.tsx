import Grid from "@mui/material/Grid";
import AllBillsContainer from "./components/AllBillsContainer.tsx";
import BillsByDateContainer from "./components/BillsByDateContainer.tsx";

const Bills = () => {
  return (
    <Grid container>
      <AllBillsContainer/>

      <BillsByDateContainer/>
    </Grid>
  );
};

export default Bills;
