import { NavLink } from "react-router-dom";
import "../../CSS/Navbar.css"


export default function Navbar(){


    return (
        <div className="Navbar" >
            <div className="titleLogo">
                <img src="../../../public/Images/icon.jpg" alt="" />
                <p>Mohit Mishra</p>
            </div>

            <div className="sign-login">
            <input type="search" name="" placeholder="Search.." />
            <NavLink to='/login' >Login</NavLink>
            <NavLink to='/signup' >SignUp</NavLink>
            </div>
        </div>
    )
}