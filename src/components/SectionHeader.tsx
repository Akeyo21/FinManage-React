import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton  from "@mui/material/IconButton";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";

import { drawerBackgroundColor } from "../utils/palette";

type props = {
  text: string;
};

const SectionHeader = ({ text }: props) => {
  return (
    <Box
      m={2}
      sx={{
        backgroundColor: drawerBackgroundColor,
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between"
      }}
    >
      <Typography variant="h4" fontWeight={800} textTransform="uppercase">
        {text}
      </Typography>

      <IconButton>
        <AddCircleOutlinedIcon sx={{ color: "#9ccce0", fontSize: 50 }} />
      </IconButton>
    </Box>
  );
};

export default SectionHeader;
