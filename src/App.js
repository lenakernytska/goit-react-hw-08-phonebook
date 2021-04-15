import React, {useEffect}from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from 'react-router-dom';
import ContactView from "./views/ContactView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView"
import Container from "./components/Container";
import AppBar from "./components/AppBar";
import { getCurrentUser } from "./redux/auth/auth-operations";




function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [dispatch]);


  return (
      <Container>
        <AppBar />

        <Switch>
            {/* <Route exact path="/" component={HomeView} /> */}
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} /> 
          <Route path="/contacts" component={ContactView} />
        </Switch>
      </Container>
    );
  }




export default App;
