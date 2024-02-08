import React, {useEffect, useState} from "react"
import "./Preloader.css"

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
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/256px-Netflix_2015_N_logo.svg.png" 
            alt="Netflix Logo"  
            />
        </div>
    </div>
  ) : null;
}

export default Preloader;