import { createBrowserRouter } from 'react-router-dom'
import Main from '../pages/MainPage/Main';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>
    },
])

export default router;