import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

const Navbar = () => {
          return(
              <div className={"nawbar"}>
                  <div className={"nawbar__Link"}>
                      <Link to={"/about"}>About for saits</Link>
                      <Link to={"/posts"}>Posts</Link>
                  </div>
              </div>
        );
};

export default Navbar;