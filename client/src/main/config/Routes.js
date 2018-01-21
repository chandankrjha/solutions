import React from "react";
import {Route, Switch} from "react-router-dom";
import LandingPage from "../../pages/landing";
import ProblemsPage from "../../pages/problems";
import SolutionsPage from "../../pages/solutions";
import LoginPage from "../../pages/login";

class Routes extends React.Component {

  render() {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/problems' component={ProblemsPage} />
        <Route path='/solutions' component={SolutionsPage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    );
  }

}

export default Routes;