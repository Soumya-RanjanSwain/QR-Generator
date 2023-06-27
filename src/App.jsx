import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Movie_Details from "./pages/Movie_Details";
import Home from "./pages/Home";
import Category from "./pages/Category";

function App() {

  return <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<Movie_Details />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>

    </BrowserRouter>
  </div>

}

export default App
