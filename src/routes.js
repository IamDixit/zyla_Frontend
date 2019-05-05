import React from "react";
import Home from './pages/Home/Home';
import Not_Found from './pages/Not Found/Not_Found';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Routes = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />         
                <Route component={Not_Found} />        
            </Switch>
        </div>
    </Router>
);

export default Routes;