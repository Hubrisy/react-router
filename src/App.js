import React from 'react';
import './App.css';
import  {Route, Routes,} from 'react-router-dom';
import Publications from './Components/post/Publications';
import HomePage from './Components/home/HomePage';
import MainContactsApp from './Components/contacts/MainPage';
import ImageApp from './Components/images/Images';


function App() {
  return (
    <div>
    <div class="container">
      <header class="main">
        <a href="/home">Home</a>
        <a href="post">Posts</a>
        <a href="contacts">Contacts</a>
        <a href="images">Images</a>
      </header>
      </div>
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/post" element={<Publications />}></Route>
      <Route path="/contacts" element={<MainContactsApp />}></Route>
      <Route path="/images" element={<ImageApp/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
