import {
  Box,
  InputAdornment,
  Radio,
  TextField,
  Typography,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";

type TicketProps = {
  cardData: cardData;
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
  handleChange: (id: number, name: string, value: any) => void;
};

interface cardData {
  id: number;
  checked: boolean;
  cardNumber: string;
  firstName: string;
  lastName: string;
  exp: string;
  edit: boolean;
}

const Ticket: React.FC<TicketProps> = ({
  cardData,
  handleEdit,
  handleDelete,
  handleChange,
}) => {
  return (
    <Box
      sx={
        cardData?.checked
          ? {
              border: "1px solid #90caf9",
              backgroundColor: "#e3f2fd",
            }
          : {
              border: "1px solid #9e9e9e",
            }
      }
      display="flex"
      alignItems="start"
      p={2}
      pl={0}
    >
      <Box>
        <Radio
          checked={cardData?.checked}
          onChange={() =>
            handleChange(cardData.id, "checked", !!!cardData?.checked)
          }
        />
      </Box>
      <Box>
        <Box display="flex" alignItems="center" gap={1}>
          <img width={"50px"} src="/public/visa.png" />
          <Box>
            {cardData?.edit ? (
              <Box display={"flex"} flexDirection={"column"} gap={1}>
                <Box>
                  {" "}
                  <TextField
                    required
                    label=""
                    sx={{ backgroundColor: "white", width: "250px" }}
                    size="small"
                    variant={"outlined"}
                    onChange={(e) =>
                      handleChange(cardData.id, "cardNumber", e.target.value)
                    }
                    defaultValue={cardData?.cardNumber}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">Visa:</InputAdornment>
                      ),
                    }}
                    placeholder="Card Number"
                  />
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <TextField
                    fullWidth
                    required
                    label=""
                    sx={{ backgroundColor: "white" }}
                    size="small"
                    variant={"outlined"}
                    onChange={(e) =>
                      handleChange(cardData.id, "firstName", e.target.value)
                    }
                    defaultValue={cardData?.firstName}
                    placeholder="First Name"
                  />
                  <TextField
                    fullWidth
                    required
                    label=""
                    sx={{ backgroundColor: "white" }}
                    size="small"
                    variant={"outlined"}
                    onChange={(e) =>
                      handleChange(cardData.id, "lastName", e.target.value)
                    }
                    defaultValue={cardData?.lastName}
                    placeholder="Last Name"
                  />
                  <TextField
                    fullWidth
                    required
                    label=""
                    sx={{ backgroundColor: "white" }}
                    size="small"
                    variant={"outlined"}
                    onChange={(e) =>
                      handleChange(cardData.id, "exp", e.target.value)
                    }
                    defaultValue={cardData?.exp}
                    placeholder="exp. 00/00"
                  />
                </Box>
              </Box>
            ) : (
              <>
                <Typography sx={{ fontWeight: "bold" }} variant="body1">
                  Visa - {cardData?.cardNumber}
                </Typography>

                <Typography variant="body2" color={"#9e9e9e"}>
                  {cardData?.firstName} {""} {cardData?.lastName} | exp.{" "}
                  {cardData?.exp}
                </Typography>
              </>
            )}

            <Box display="flex" alignItems="center" gap={1}>
              <Typography
                sx={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => handleEdit(cardData?.id)}
                variant="body2"
                color={"primary"}
              >
                Edit
              </Typography>

              <Typography variant="body2" color={"#9e9e9e"}>
                |
              </Typography>
              <Typography
                sx={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={() => handleDelete(cardData.id)}
                variant="body2"
                color={"primary"}
              >
                Delete
              </Typography>
            </Box>
          </Box>
        </Box>
        <Typography variant="body2">Security Code</Typography>
        <Box display="flex" alignItems="center" justifyItems={"center"} gap={1}>
          <Box>
            <TextField
              label=""
              sx={{ backgroundColor: "white", width: "125px" }}
              size="small"
              variant={"outlined"}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <CheckCircleOutlineIcon color="success" />
                  </InputAdornment>
                ),
              }}
              placeholder="•••"
            />
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <img
              src="/public/credit-card.png"
              width={"40px"}
              style={{ opacity: "70%" }}
            />
            <Typography variant="subtitle2" color={"#9e9e9e"}>
              3-digits on back of card
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Ticket;
