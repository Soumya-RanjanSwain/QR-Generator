import Skeleton from 'react-loading-skeleton'
import { Link } from 'react-router-dom'

export default function Hero({ popular }) {
  const randomkey = Math.floor(Math.random() * 10)
  return (
      <div className=" h-[70vh] bg-[#072755] shadow-xl relative">


        {popular ? <Link to={`/movie/${popular[randomkey]?.id}`}>
          <div className="relative h-full">
            <img src={`https://image.tmdb.org/t/p/w1280/${popular[randomkey]?.backdrop_path}`} className="w-full hover:border-white  hover:border-2 h-full object-cover "></img>
            <div className="overlay bg-gradient-to-r from-black via-60% to-transparent absolute bottom-0 h-full w-full opacity-90 pointer-events-none"> </div>
          </div>
          <div className=" bottom-10 absolute left-10  text-white  ">
            <h1 className="text-3xl font-bold">{popular[randomkey]?.title}</h1>
            <p className=" line-clamp-3 max-w-[500px] text-gray-400 mt-2">{popular[randomkey]?.overview}</p>
          </div></Link> :
          <>
            <div>

            </div>
            <div className=" bottom-10 absolute left-10 w-max h-max  text-white  ">
              <h1 className="text-3xl font-bold w-[10ch] max-sm:w-[30%]"><Skeleton className='opacity-30' /></h1>
              <p className=" line-clamp-3 max-w-[500px] w-[40ch] max-sm:w-[70%]   text-gray-400 mt-2"><Skeleton count={4} className=' mt-1 opacity-20' /></p>

            </div>
          </>

        }
      </div>
  )
}

