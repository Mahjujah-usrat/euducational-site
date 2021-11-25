import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About"
import Error from "./components/Error/Error";
import Details from "./components/Details/Details";
import Footer from "./components/footer/Footer";
import AllServices from "./components/AllServices/AllServices";
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
export const userContext = createContext();
function App() {
  const [user, setUser] = useState({
    name:"usrat",
  })
  return (
    <div className="App">
      
    <userContext.Provider value={[user, setUser]}>
        <Router>
        <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/Services">
            <AllServices></AllServices>
            </Route>
          <Route path="/about">
            <About></About>
          
          </Route>
          <Route path="/contact">
           <Contact></Contact>
          
          </Route>
           
            <Route path="/details/:servicesId">
              <Details></Details>
            </Route>

            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </userContext.Provider>
     
    </div>
  );
}

export default App;
