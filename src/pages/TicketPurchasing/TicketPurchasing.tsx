import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Payment from "./component/Payment";
import Total from "./component/Total";

const TicketPurchasing = () => {
  return (
    <Container maxWidth="lg" component="main">
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Box
            sx={{
              border: "1px solid #bdbdbd",
              borderRadius: "4px",
            }}
            mb={2}
          >
            <Box m={4} mb={2} display="flex" alignItems="center">
              <Typography sx={{ fontWeight: "bold" }} variant="h5" mr={1}>
                Delivery
              </Typography>
              <CheckCircleOutlineIcon fontSize="large" color="success" />
            </Box>

            <Box m={4} mt={0}>
              <Typography mb={1} sx={{ fontWeight: "bold" }} variant="body1">
                Mobile Entry - Free
              </Typography>
              <Typography variant="body2" color={"#9e9e9e"}>
                Tickets Available by Sun Apr 3, 2022
              </Typography>
              <Typography variant="body2" color={"#9e9e9e"}>
                These mobile tickets will be transferred directly to you from a
                trusted seller. We'll email you instructions on how to accept
                them on the original ticket provider's mobile app.
              </Typography>
            </Box>
          </Box>
          <Box>
            <Payment />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Total />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TicketPurchasing;
