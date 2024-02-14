import { func } from "prop-types";
import React  from "react";
import {BrowserRouter,Routes,Route,Link} from  'react-router-dom';
import Home from "./home";
import AboutMe from "./about"


export default function SinglePageApp()
{
    return(       <>
        <BrowserRouter>
        <div>
            <ul>
                <li>
                    <Link to ="/">HomePage</Link>
                    </li>
                    <li>
                    <Link to ="/about">AboutPage</Link>
                    </li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/about" element={<AboutMe/>}/>


                        </Routes>

                    </div>

                    </BrowserRouter>


                    </>
)
}