import logo from './logo.svg';
import './App.css';
import Home from './pages/homepage/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFind from './pages/notfind/NotFind';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFind/>}/>


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
