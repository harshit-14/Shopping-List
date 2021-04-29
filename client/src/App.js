import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingList from './components/ShoppingList'
import AppNavBar from './components/AppNavBar'
import {Provider} from 'react-redux';
import store from './store';
import {Container} from 'reactstrap';
import ItemModal from './components/itemModal'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavBar></AppNavBar>
      <Container>
      <ItemModal></ItemModal>
      <ShoppingList></ShoppingList>
      </Container>
    </div>
    </Provider>
  );
}

export default App;
