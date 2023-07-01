import useFetchData from "../utils/api";
import "swiper/css";
import Hero from "../components/Hero";
import MovieCategory from "../components/MovieCategory";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";

const Home = () => {

    const { data: Trending, loading: TrendingLoading } = useFetchData(
        "/trending/movie/day?language=en-US"
    );

    return (
        <div className="container mx-auto px-11 mb-8 pt-[90px] ">
            <Hero popular={Trending?.results} />
            <MovieCategory />

            <h2 className="text-white my-10 text-3xl ">Trending Movies</h2>
            {TrendingLoading ? (
                <div className=" text-white">
                    <Loader />
                </div>
            ) : (
                <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-12 mb-9 ">
                    {console.log(Trending?.results)}
                    {Trending?.results.map((movie) => (
                        <Link
                            to={`/movie/${movie.id}`}
                            className=" hover:scale-110 transition-all cursor-pointer duration-300 "
                            key={movie.id}
                        >
                            <div className="relative">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    className=" hover:border-white  hover:border-[5px] transition-all duration-200"
                                ></img>
                                <div className=" w-[50px] h-[50px] bg-white absolute bottom-5 font-bold right-5 text-black flex justify-center items-center shadow-2xl rounded-full opacity-80">
                                    {movie.vote_average}{" "}
                                </div>
                            </div>
                            <div className="mt-3">
                                <p className="text-white">{movie.title}</p>

                                <p className="line-clamp-2 text-gray-500 mt-2">
                                    {movie.overview}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
