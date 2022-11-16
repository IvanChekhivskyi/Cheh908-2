import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {AuthContext} from "../../context";
import MyButton from "../button/MyButton";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const logOut = () => {

        setIsAuth(false);
        localStorage.removeItem('auth');
    }

          return(
              <div>
                  {isAuth
                        ?
                              <div className={"nawbar"}>
                                  <MyButton onClick={logOut}>Go out</MyButton>
                                  <div className={"nawbar__Link"}>
                                      <Link to={"/about"}>About for saits</Link>
                                      <Link to={"/posts"}>Posts</Link>
                                  </div>
                              </div>


                        :   <div className={"nawbar"}>
                              <div className={"nawbar__Link"}>
                                  <Link to={"/about"}>About for saits</Link>
                                  <Link to={"/posts"}>Posts</Link>
                              </div>
                            </div>
                  }
              </div>

        );
};

export default Navbar;