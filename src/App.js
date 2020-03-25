import React from 'react';
import Header from './components/layout/Header';
import './App.css';
import Contacts from './components/contacts/Contacts';
import {Provider} from './context';
import AddContact from './components/contacts/AddContact';

function App() {
  return (
  <Provider>
      <React.Fragment>
        <Header branding="Contact Manager"/>
        <main className="py-4">
          <div className="container">
            <AddContact/>
            <Contacts/>
          </div>
        </main>
      </React.Fragment>
    </Provider>
  );
}

export default App;
