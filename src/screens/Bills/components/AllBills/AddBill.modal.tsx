import React from "react";
import InputLabel from "@mui/material/InputLabel";
import Modal from "@mui/material/Modal";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { BillType } from "../../Bills.types";
import { iconsColor } from "../../../../utils/palette";

type props = {
  openAddBillModal: boolean;
  onCloseAddBillmodal: () => void;
};
const AddBillModal = ({ openAddBillModal, onCloseAddBillmodal }: props) => {
  return (
    <Modal
      open={openAddBillModal}
      onClose={onCloseAddBillmodal}
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
              color="secondary"
              sx={{ mr: 1 }}
            />
            <TextField label="Bill Amount" type="number" color="secondary" required />
          </Box>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="bill-due-date" />
            <TextField
              id="bill-due-date"
              required
              type="date"
              color="secondary"
            />
          </FormControl>

          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="bill-type-select-label">Bill Type </InputLabel>
            <Select label="Bill Type" color="secondary">
              {Object.values(BillType).map((billType) => (
                <MenuItem>{billType}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            sx={{ color: iconsColor, ":hover": { color: "white" } }}
          >
            Add Bill
          </Button>
        </Box>
      </form>
    </Modal>
  );
};

export default AddBillModal;
