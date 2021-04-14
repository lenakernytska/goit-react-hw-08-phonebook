import React from "react";
import { Switch, Route } from 'react-router-dom';
import ContactView from "./views/ContactView";
import Container from "./components/Container";
import AppBar from "./components/AppBar";



function App (){
  return (
      <Container>
        <AppBar />

        <Switch>
          {/* <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} /> */}
          <Route path="/contacts" component={ContactView} />
        </Switch>
      </Container>
    );
  }




export default App;
