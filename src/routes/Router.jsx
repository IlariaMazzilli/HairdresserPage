import { createBrowserRouter } from 'react-router-dom'
import Homepage from '../pages/Homepage';
import Prices from '../pages/Prices';
import Team from '../pages/Team';
import Contact from '../pages/Contact';

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: (
            <>
                <Homepage />    
            </>
        )
    },
    {
        path: "/about",
        element: (
            <>
              <Team/>
            </>
        )
    },
    {
        path: "/contacts",
        element: (
            <>
               <Contact/> 
            </>
        )
    },
    {
        path: "/prices",
        element: (
            <>
                <Prices/>
            </>
        )
    },
])