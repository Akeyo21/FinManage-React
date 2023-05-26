import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import BillCard from "./BillCard";
import { billSamples } from "../Bills.sample";
import { drawerBackgroundColor, iconsColor } from "../../../utils/palette";
import SectionHeader from "../../../components/SectionHeader";
import {
  InputLabel,
  Modal,
  Select,
  TextField,
  MenuItem,
  FormControl,
} from "@mui/material";
import { BillType } from "../Bills.types";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const AllBillsContainer = () => {
  const [showAddBillModal, setShowAddBillModal] = useState<boolean>(false);

  const openAddBillModal = () => {
    setShowAddBillModal(true);
  };

  const closeAddBillModalHandler = () => {
    setShowAddBillModal(false);
  };

  Object.values(BillType).map((billType) => console.log("TYPE", billType));
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

      <Box>
        {billSamples.map((bill) => (
          <BillCard bill={bill} key={bill.id} />
        ))}
      </Box>

      <Modal
        open={showAddBillModal}
        onClose={closeAddBillModalHandler}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <form>
          <Box
            sx={{
              width: 400,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              p: 5,
            }}
          >
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ textTransform: "uppercase", textAlign: "center" }}
            >
              Add Bill
            </Typography>

            <Box sx={{ display: "flex", my: 2 }}>
              <TextField
                label="Bill Name"
                id="bill-name"
                required
                color="primary"
                sx={{ mr: 1 }}
              />
              <TextField label="Bill Amount" type="number" required />
            </Box>

            <FormControl fullWidth sx={{mb:2}}>
              <InputLabel htmlFor="bill-due-date" />
              <TextField id="bill-due-date" required type="date" />
            </FormControl>

            <FormControl fullWidth sx={{mb:2}}>
              <InputLabel id="bill-type-select-label">Bill Type </InputLabel>
              <Select label="Bill Type">
                {Object.values(BillType).map((billType) => (
                  <MenuItem>{billType}</MenuItem>
                ))}
              </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              sx={{ color: iconsColor, ":hover":{ color:"white"} }}
            >
              Add Bill
            </Button>
          </Box>
        </form>
      </Modal>
    </Grid>
  );
};

export default AllBillsContainer;
