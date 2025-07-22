
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './pages/home/home'
import About from './pages/about/about'
import AddArtical from './pages/addArtical/addArtical'
import Artical from './pages/artical/artical'
import EditeArtical from './pages/editArtical/editArtical'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/add-artical' element={<AddArtical />} /> 
      <Route path='/artical/:articalId' element={<Artical />} />
      <Route path='/edit-artical/:articalId' element={<EditeArtical />} />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
