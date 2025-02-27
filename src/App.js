// import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import AuthProvider from "./Components/Auth";
import About from './Components/About';
import Amenties from './Components/Amenties';
import Gallery from './Components/Gallery';
import MenuUser from './Components/MenuUser';
import Menu from './Components/Menu'
import Rooms from './Components/Rooms';
import Signup from './Components/Signup';
import Login from './Components/Login';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/amenties" element={<Amenties/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/menu" element={<MenuUser/>} />
      <Route path="/menuadmin" element={<Menu/>} />
      <Route path="/rooms" element={<Rooms/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;
