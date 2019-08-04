import React from "react";
import "./App.css";
import Home from "./pages/Home.jsx";
import Dish from "./pages/Dish/Dish.jsx";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage.jsx";
import { Router, Route, Switch, Link } from "react-router-dom";
import history from "./history";

class App extends React.Component { 
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Link to={`/`}>На главную</Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Dish/:id" component={Dish} />
            <Route path="/ThankYou/" component={ThankYouPage} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
