import React from 'react'
import { Link } from 'react-router-dom'
import "./index.css"
import { IoHome } from "react-icons/io5";


export default function Navbar() {
    return (
        <div>


        
            <div className="links">

                <Link to="/"><IoHome className="home" /></Link>


                {/* <li>
                    <Link to="login">Login</Link>
                </li> */}

            </div>



        </div>
    )
}
