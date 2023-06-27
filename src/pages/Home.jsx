import useFetchData from "../utils/api";
import "swiper/css";
import Hero from "../components/Hero";
import MovieCategory from "../components/MovieCategory";


const Home = () => {

    const { data: Trending, loading: TrendingLoading } = useFetchData(
        "/trending/movie/day?language=en-US"
    );

    return (
        <div className="container mx-auto px-11 mb-8 pt-[90px] ">
            <Hero popular={Trending?.results} />
            <MovieCategory/>

        </div>
    );
};

export default Home;
