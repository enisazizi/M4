import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'

import BookList from "./components/BookList"
import history from "./data/history.json";


function App() {
  return (
    <>
   <WarningSign title="myvalue"/>
   <MyBadge title="sometext" color="dark" />
   <BookList objArr={history} />
  

   </>
  );


}

export default App;
