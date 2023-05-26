import React from 'react'
import Icon from "@mui/material/Icon";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Bill } from "../Bills.types";
import { BillType, billTypeIconMap } from "../BillTypeIcon.map";
import { iconsColor } from "../../../utils/palette";

type props = {
  bill: Bill;
};

const BillCard = ({ bill }: props) => {
  const { type, name: billName, amount: billAmount } = bill;
  return (
    <Card sx={{ margin: 2 }}>
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
          }}
        >
          <Icon
            fontSize="large"
            sx={{
              marginRight: 2,
              color: iconsColor,
            }}
          >
            {billTypeIconMap[type]}
          </Icon>

          <Box>
            <Typography gutterBottom variant="h5" component="div">
              {billName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {billAmount}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BillCard;
