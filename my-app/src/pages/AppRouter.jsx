import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading){
        return <Loader/>;
    }

    return (
        isAuth
            ?   <Switch>
                    {privateRoutes.map(rout =>
                        <Route component={rout.component}
                               path={rout.path}
                               exact={rout.exact}
                               key={rout.path}
                        />
                    )}
                    <Redirect to={"/posts"}/>
                </Switch>

            :   <Switch>
                    {publicRoutes.map(rout =>
                        <Route component={rout.component}
                               path={rout.path}
                               exact={rout.exact}
                               key={rout.path}
                        />
                    )}

                    <Redirect to={"/login"}/>
                </Switch>

    );
};

export default AppRouter;