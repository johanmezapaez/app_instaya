import './App.css';
import Login from './Components/login';
import Register from './Components/register';
import Remember from './Components/Forgotpassword';
import TablaHome from './Components/Tabla';
import Editorder from './Components/Updateorder';
import Create from './Components/Createorder';
import Contenedor from './Components/contenedor';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/navbar';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Forgotpassword" element={<Remember />} />
          <Route path="/Tabla" element={<TablaHome />} />
          <Route path="/books/:id/edit" element={<Editorder />} />
          <Route path="/books/new" element={<Create />} />
          <Route path="/contenedor" element={<Contenedor />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;