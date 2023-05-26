import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import { drawerBackgroundColor } from "../../../../utils/palette";
import SectionHeader from "../../../../components/SectionHeader";
import AddBillModal from "./AddBill.modal";
import BillsList from "./Bills.list";

const AllBillsContainer = () => {
  const [showAddBillModal, setShowAddBillModal] = useState<boolean>(false);

  const openAddBillModal = () => {
    setShowAddBillModal(true);
  };

  const closeAddBillModalHandler = () => {
    setShowAddBillModal(false);
  };

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
      <SectionHeader text="Bills" onClickAddButtonHandler={openAddBillModal} />

      <BillsList/>

      <AddBillModal
        openAddBillModal={showAddBillModal}
        onCloseAddBillmodal={closeAddBillModalHandler}
      />

    </Grid>
  );
};

export default AllBillsContainer;
