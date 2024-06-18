import { Box, Button, Checkbox, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";

const Total = () => {
  const [hidden, setHidden] = useState(true);
  return (
    <Box
      sx={{
        border: "1px solid #bdbdbd",
        borderRadius: "4px",
      }}
    >
      <Box
        mx={3}
        my={4}
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Box display="flex" alignItems="center">
          <Typography sx={{ fontWeight: "bold" }} variant="h5">
            Total
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography sx={{ fontWeight: "bold" }} variant="h5">
            $549.11
          </Typography>
          <KeyboardArrowUpIcon
            onClick={() => setHidden(!!!hidden)}
            sx={{
              transform: hidden ? "rotate(0deg)" : "rotate(180deg)",
              transition: "transform 0.5s ease-in-out",
              cursor: "pointer",
            }}
            fontSize="large"
          />
        </Box>
      </Box>
      <Box
        sx={{
          transition: "max-height 0.5s ease-in-out",
          overflow: hidden ? "hidden" : "scroll",
          maxHeight: hidden ? "0px" : "500px",
        }}
      >
        <Box
          mx={3}
          my={4}
          display="flex"
          alignItems="end"
          justifyContent={"space-between"}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Tickets
            </Typography>
            <Typography variant="body1">Resale Tickets: $229.00 x 2</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="body1">$458.00</Typography>
          </Box>
        </Box>
        <Box mx={3} my={4}>
          <Typography sx={{ fontWeight: "bold" }} variant="h6">
            Notes From Seller
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body1">
              xfr XFER Proof of at least one dose of COVID-19 vaccination for
              ages 5 to 11 and guests ages 12 and up will be required to show
              proof of two COVID-19 vaccine doses or one dose of the Johnson &
              Johnson vaccine. Masks must be worn.
            </Typography>
          </Box>
        </Box>
        <Box
          mx={3}
          mt={4}
          display="flex"
          alignItems="end"
          justifyContent={"space-between"}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }} variant="h6">
              Fees
            </Typography>
            <Typography variant="body1">Service Fee: $44.08 x 2</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="body1">$88.16</Typography>
          </Box>
        </Box>
        <Box
          mx={3}
          display="flex"
          alignItems="end"
          justifyContent={"space-between"}
        >
          <Box>
            <Typography variant="body1">Order Processing Fee</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <Typography variant="body1">$2.95</Typography>
          </Box>
        </Box>
        <Box mx={3} mt={4}>
          <Typography
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            variant="body2"
            color={"primary"}
          >
            Cancel Order
          </Typography>
        </Box>
      </Box>

      <Box mx={3} my={4}>
        <Typography sx={{ fontWeight: "bold" }} variant="body1">
          *All Sales Final - No Reunds
        </Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Checkbox
            sx={{
              padding: 0,
              margin: 0,
            }}
          />{" "}
          <Typography
            display="flex"
            gap={1}
            sx={{ fontWeight: "bold" }}
            variant="body2"
          >
            I have read and agree to the curent{" "}
            <Typography
              sx={{ cursor: "pointer", fontWeight: "bold" }}
              variant="body2"
              color={"primary"}
            >
              Terms of Use
            </Typography>
          </Typography>
          .
        </Box>
        <Button
          fullWidth
          sx={{ marginY: "1rem", height: "50px", textTransform: "none" }}
          variant="contained"
          color="success"
        >
          Place Order
        </Button>
        <Typography variant="caption">
          *Exceptions may apply, see our Terms of Use.
        </Typography>
      </Box>
    </Box>
  );
};

export default Total;
