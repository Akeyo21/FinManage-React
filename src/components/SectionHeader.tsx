import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { drawerBackgroundColor } from "../utils/palette.ts";

type props = {
  text: string;
};

const SectionHeader = ({ text }: props) => {
  return (
    <Box
      m={2}
      sx={{
        backgroundColor: drawerBackgroundColor,
      }}
    >
      <Typography variant="h4" fontWeight={800} textTransform="uppercase">
        {text}
      </Typography>
    </Box>
  );
};

export default SectionHeader;
