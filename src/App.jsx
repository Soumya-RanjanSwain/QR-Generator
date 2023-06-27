import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import useFetchData from './utils/api';
import Movie_Details from "./pages/Movie_Details";
import MovieCategory from "./components/MovieCategory";
import Category from "./pages/Category";

function App() {
  const { data: Trending, loading: TrendingLoading } = useFetchData(
    "/trending/movie/day?language=en-US"
  );
  return <div>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<div className="pt-[90px]"><Hero popular={Trending?.results} /><MovieCategory /></div>} />
        <Route path="/movie/:id" element={<Movie_Details />} />
        <Route path="/category/:category" element={<Category />} />
      </Routes>

    </BrowserRouter>
  </div>

}

export default App
