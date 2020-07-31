import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import "./App.css";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import EditContact from "./components/contacts/EditContact";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Header branding="Contact Manager" />
          <main className="py-4">
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts}></Route>
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/contact/add" component={AddContact}></Route>
                <Route exact path="/contact/edit/:id" component={EditContact}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </div>
          </main>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
