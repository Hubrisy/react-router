import React from 'react';
import './App.css';
import  {Route, Routes,Link,BrowserRouter} from 'react-router-dom';
import Publications from './Components/post/Publications';
import HomePage from './Components/home/HomePage';
import MainContactsApp from './Components/contacts/MainPage';
import ImageApp from './Components/images/Images';


function App() {
  return (
    <BrowserRouter>
    <div>
    <div class="container">
      <header class="main">
        <Link to="/home/react-router">Home</Link>
        <Link to="/react-router/post">Posts</Link>
        <Link to="/react-router/contacts">Contacts</Link>
        <Link to="/react-router/images">Images</Link>
      </header>
      </div>
    <Routes>
      <Route path="/home/react-router" element={<HomePage />}></Route>
      <Route path="/react-router/post" element={<Publications />}></Route>
      <Route path="/react-router/contacts" element={<MainContactsApp />}></Route>
      <Route path="/react-router/images" element={<ImageApp/>}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
