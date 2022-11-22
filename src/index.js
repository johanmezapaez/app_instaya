import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Forgotpassword } from './Components/Forgotpassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
  <Routes>
  <Route exact path="/" element={<App/>} />
  <Route path="/index" element={<App/>} />
  <Route path="/Login" element={<Login/>} />
  <Route path="/Register" element={<Register/>} />
  <Route path="/Forgotpassword" element={<Forgotpassword/>} />
  
  </Routes>
  </Router>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
