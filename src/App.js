import React from 'react';
import './App.css';
import  {Route, Routes,Link,HashRouter} from 'react-router-dom';
import Publications from './Components/post/Publications';
import HomePage from './Components/home/HomePage';
import MainContactsApp from './Components/contacts/MainPage';
import ImageApp from './Components/images/Images';


function App() {
  return (
    <HashRouter>
    <div>
    <div class="container">
      <header class="main">
        <Link to="/home">Home</Link>
        <Link to="/post">Posts</Link>
        <Link to="/contacts">Contacts</Link>
        <Link to="/images">Images</Link>
      </header>
      </div>
    <Routes>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/post" element={<Publications />}></Route>
      <Route path="/contacts" element={<MainContactsApp />}></Route>
      <Route path="/images" element={<ImageApp/>}></Route>
    </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
