import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import useFetchData from './utils/api';
import Movie_Details from "./components/movie_details";
import MovieCategory from "./components/MovieCategory";

function App() {
  const { data: Trending, loading: TrendingLoading } = useFetchData(
    "/trending/movie/day?language=en-US"
  );
  return <div>
  <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Hero popular={Trending?.results} />}/>
    <Route path="/movie/:id" element={<Movie_Details/>}/>
    </Routes>
    <MovieCategory />
    </BrowserRouter>
  </div>

}

export default App
