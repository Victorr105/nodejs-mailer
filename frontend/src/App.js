import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nodemailer from './pages/Nodemailer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
        <Route path='/' element={<Nodemailer/>}>Nodemailer</Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
