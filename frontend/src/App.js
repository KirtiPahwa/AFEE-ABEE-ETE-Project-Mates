import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import HomepageAS from './Components/Homepage_AS/HomepageAS';
import Notification from './Components/Pages/Notification';
import Story from './Components/Pages/Story';
import Create from './Components/Pages/Create';
import Bookmark from './Components/Pages/Bookmark';
import SinglePost from './Components/midPart/singlePost';
import './index.css';

function App() {
  return ( 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/homepage" element={<HomepageAS />} />
      <Route path="/homepage/:postId" element={<SinglePost />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/story" element={<Story />} />
      <Route path="/create" element={<Create />} />
      <Route path="/bookmark" element={<Bookmark />} />
    </Routes>
  );
}

export default App;
