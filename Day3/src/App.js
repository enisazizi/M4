import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import ReservationForm from './components/ReservationForm'
import BookList from "./components/BookList"
import history from "./data/history.json";


function App() {
  return (
    <>
   <WarningSign title="myvalue"/>
   <MyBadge title="sometext" color="dark" />
   <BooksList booksObj={history} />
   <ReservationForm />

   </>
  );


}

export default App;
