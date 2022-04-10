import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
       <div className="Navigation">
           <center>
                <ul>
                    <NavLink to={"/"} className={(nav)=>(nav.isActive ? "nav-active" : "")}> 
                        <li>Accueil</li>
                    </NavLink>

                    <NavLink to={"/About"} className={(nav)=>(nav.isActive ? "nav-active" : "")}> 
                        <li>About</li>
                    </NavLink>
              
              
                </ul>
           </center>
       </div>
    );
};

export default Navigation;