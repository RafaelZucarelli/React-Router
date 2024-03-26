
import './App.css';

//1- config react router
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from "./pages/Info";
import NotFound from './pages/NotFound';
import Search from "./pages/Search";

//components
import Navbar from './components/Navbar';
import { SearchForm } from './components/SearchForm';


function App() {
  return (
    <div className="App">
      
      <h1>React Router</h1>
      <BrowserRouter>
      {/*links com react router */}
        <Navbar />
        {/*Search Form */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* 6 - nested route */}
          <Route path="/products/:id/info" element={<Info />} />
          {/*Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          <Route path="/search" element={<Search />} />
          {/* 10 - redirect */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/*No match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
