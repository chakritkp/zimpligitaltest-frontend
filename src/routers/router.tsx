import { createBrowserRouter } from "react-router-dom";
import TicketPurchasing from "../pages/TicketPurchasing/TicketPurchasing";

const router = createBrowserRouter([
    {
        path: '/',
        element: <TicketPurchasing/>
    },
])

export default router