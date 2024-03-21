import React, {useState, useEffect} from "react";
import "./Nav.css";
import { FaQuestionCircle, FaUser, FaEdit, FaCog } from "react-icons/fa";
import logo from "./logo.png";

function Nav() {

    const [show, handleShow] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    },[]);


  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img 
            src={logo} 
            alt="netflix_logo" 
            className="nav_logo" 
        />

        <div className="menu_container">
            <div className="menu_trigger" onClick={() =>{setOpen(!open)}}>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
                alt="netflix avatar" 
                className="nav_avatar" 
                />
            </div>

            <div className={`dropdown_menu ${open ? "active" : "inactive"}`}>
                <ul className="menu">
                    <li><FaEdit />Manage Profile</li> 
                    <li><FaUser />Account</li>
                    <li><FaQuestionCircle />Help Center</li>
                    <li><FaCog />Settings</li>
                </ul>
                <h3 style={{textAlign: "center"}}>Sign Out of MEY Site</h3>
            </div>
        </div>
    </div>
  );
}


export default Nav;