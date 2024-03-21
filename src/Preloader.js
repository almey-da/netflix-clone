import React, {useEffect, useState} from "react"
import "./Preloader.css"
import logo from "./logo.png";

const Preloader = () => {

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setVisible(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [])

  return visible ? (
    <div className="preloader">
        <div className="spinner">
            <img 
            className="netflix-logo"
            src={logo} 
            alt="mey logo"  
            />
        </div>
    </div>
  ) : null;
}

export default Preloader;