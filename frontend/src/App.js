import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/generalStyles.css"
import Home from "./pages/Home"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Cities from "./pages/Cities";
import Itinerary from "./pages/Itinerary";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import {connect} from "react-redux"









class App extends React.Component {

  render() {

    return (
      <BrowserRouter>



        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Cities" component={Cities} />
          <Route path ="/Itinerary/:id" component={Itinerary}/>
          <Route path="/Sign-In" component={SignIn} />
          <Route path="/Sign-Up" component={SignUp} />
          <Redirect to="/Home" />
    
        </Switch>


      </BrowserRouter>



    )
  }


}

const mapStateToProps = state => {
  return {
    usuarios: state.userRed,
  
  }
}

export default connect (mapStateToProps, null)(App)