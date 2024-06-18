import { useState } from "react";
import { Box, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AddCardIcon from "@mui/icons-material/AddCard";
import AddIcon from "@mui/icons-material/Add";
import Ticket from "./Ticket";

const Payment = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      checked: true,
      cardNumber: "9999",
      firstName: "User",
      lastName: "Name",
      exp: "00/11",
      edit: false,
    },
  ]);

  const handleAddCard = () => {
    const newData = {
      id: cards.length + 1,
      checked: false,
      cardNumber: "",
      firstName: "",
      lastName: "",
      exp: "",
      edit: true,
    };
    setCards((prev: any) => [...prev, newData]);
  };

  const handleChange = (id: number, name: string, value: any) => {
    if (id) {
      const updatedCards = cards.map((card) => {
        if (name === "checked") {
          return {
            ...card,
            checked: card.id === id ? value : false,
            edit:
              !card.cardNumber && !card.firstName && !card.lastName && !card.exp
                ? true
                : false,
          };
        } else {
          return card.id === id ? { ...card, [name]: value } : card;
        }
      });
      setCards(updatedCards);
    } else {
      console.log("id not found");
    }
  };

  const handleDelete = (id: number) => {
    if (id) {
      const updatedCards = cards.map((card: any) =>
        card.id === id ? { ...card, deleted: true } : card
      );
      setCards(updatedCards);
    } else {
      console.log("id not found");
    }
  };

  const handleEdit = (id: number) => {
    if (id) {
      const updatedCards = cards.map((card: any) => {
        if (
          !card.cardNumber &&
          !card.firstName &&
          !card.lastName &&
          !card.exp
        ) {
          console.log("data not found");

          return card.id === id ? { ...card, edit: true } : card;
        } else {
          return card.id === id ? { ...card, edit: !!!card.edit } : card;
        }
      });
      setCards(updatedCards);
    } else {
      console.log("id not found");
    }
  };

  return (
    <Box
      sx={{
        border: "1px solid #bdbdbd",
        borderRadius: "4px",
      }}
    >
      <Box
        m={4}
        mb={2}
        display="flex"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Box display="flex" alignItems="center">
          <Typography sx={{ fontWeight: "bold" }} variant="h5" mr={1}>
            Payment
          </Typography>
          <CheckCircleOutlineIcon fontSize="large" color="success" />
        </Box>
        <Box>
          <img
            width={"50px"}
            src="/public/Ticketmaster-Logo-Azure_without_R.png"
          />
        </Box>
      </Box>
      <Box m={4} mt={0}>
        <Typography ml={3} sx={{ fontWeight: "bold" }} variant="body1">
          Use Credit/Debit Card
        </Typography>
      </Box>
      <Box m={4} mt={0} display={"flex"} flexDirection={"column"} gap={1}>
        {cards
          ?.filter((card: any) => card.deleted !== true)
          ?.map((card) => (
            <Ticket
              key={card.id}
              cardData={card}
              handleChange={(id: number, name: string, value: any) =>
                handleChange(id, name, value)
              }
              handleDelete={(id) => handleDelete(id)}
              handleEdit={(id) => handleEdit(id)}
            />
          ))}
      </Box>
      <Box
        onClick={handleAddCard}
        sx={{ cursor: "pointer" }}
        display="flex"
        alignItems="center"
        gap={2}
        m={4}
        mt={0}
      >
        <AddIcon fontSize="large" color="primary" />
        <AddCardIcon fontSize="large" />
        <Typography
          sx={{ fontWeight: "bold" }}
          onClick={() => {}}
          variant="body2"
          color={"primary"}
        >
          Add New Card
        </Typography>
      </Box>

      <Box sx={{ borderTop: "1px solid #bdbdbd" }} m={4} mt={0} py={3}>
        <Typography mb={1} sx={{ fontWeight: "bold" }} variant="body1">
          Or Pay With
        </Typography>
        <Typography sx={{ fontWeight: "bold" }} variant="body1">
          {`By using a digital wallet and continuing past this page, you have read
          and are accepting the Terms of Use.`}
        </Typography>
      </Box>
    </Box>
  );
};

export default Payment;
