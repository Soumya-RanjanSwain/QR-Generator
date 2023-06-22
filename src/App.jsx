import { Route, Routes, BrowserRouter } from "react-router-dom"
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import useFetchData from './utils/api';

function App() {
  const { data: Trending, loading: TrendingLoading } = useFetchData(
    "/trending/movie/day?language=en-US"
  );
  return <div>
  <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<Hero popular={Trending?.results} />}/>
    </Routes>
    </BrowserRouter>
  </div>

}

export default App
