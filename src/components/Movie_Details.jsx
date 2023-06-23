import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchData from "../utils/api";
import dayjs from "dayjs";
import { BsFillPlayFill } from 'react-icons/bs'
import { AiTwotoneStar } from 'react-icons/ai'
import Loader from "../components/Loader/Loader";


const minutesToTimeFormat = (totalMinutes) => {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return `${hours}hr ${minutes}min`;
};

const Movie_Details = () => {

  const { id } = useParams();

  const { data, loading, error } = useFetchData(
    `/movie/${id}?append_to_response=credits,videos,images,providers`
  );
  console.log(data);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data])

  const diretor = data?.credits.crew.filter((d) => d.job === "Director");
  const writers = data?.credits.crew.filter((d) => d.job === "Screenstory" || d.job === "Writer");
  const trailer = data?.videos.results.filter((d) => d.type === "Trailer")

  return (
    <section className=" min-h-screen text-white ">
      {loading ? (
        <div className=" w-screen h-screen flex justify-center items-center "><Loader /></div>
      ) : (
        <div className="relative py-10 w-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
            className="absolute w-full top-0  h-full opacity-10  pointer-events-none"
          ></img>
          <div className=" container md:px-11  mx-auto h-full grid sm:grid:cols-1 md:grid-cols-2  justify-items-center pt-9 ">
            <div className="flex justify-end sm:w-[300px] w-full max-[300px]:w-[200px] lg:w-[350px]   ">
              <img
                src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                className=" shadow-xl shadow-gray-900 max-md:mb-6 "
                alt=""
              />
            </div>


            <div className=" h-full px-2 max-xs:px-4 flex items-center sm:text-center md:text-left   ">
              <div className="">
                <h3 className="text-4xl max-xs:text-2xl mb-2 max-w-full max-xs:max-w-[95%] ">{data?.title} ({dayjs(data?.release_date).format("YYYY")})</h3>
                <p className=" text-gray-400 max-xs:text-xs max-xs:max-w-[95%] ">{data?.overview}</p>
                <div className="flex gap-2 mt-4 items-center max-xs:max-w-[95%]  sm:justify-center md:justify-start justify-start">
                  <span>{dayjs(data?.release_date).format("YYYY")}</span>{" "}
                  <div className=" w-2 h-2 rounded-full bg-slate-400 max-xs:max-w-[95%]"></div>
                  {data?.spoken_languages ? (
                    <span className="">
                      {data.spoken_languages.length} Languages

                    </span>
                  ) : (
                    ""
                  )}
                  <div className=" w-2 h-2 rounded-full bg-slate-400 flex "></div>
                  <span>{data?.vote_average.toFixed(1)}</span><AiTwotoneStar />
                </div>
                <div className="flex gap-3 mt-4 sm:justify-center md:justify-start justify-start ">
                  {data?.genres.map((genre, index) => (
                    <React.Fragment key={index}>
                      {genre.name}
                      {index !== data.genres.length - 1 && (
                        <span className=" text-slate-400">|</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
                <div className="flex gap-3 md:mt-8 mt-3  border-b-[1px] py-4 border-gray-700 ">
                  <div className="max-sm:flex-col flex max-sm:gap-3">
                    <span>Status: </span>
                    <span className="text-gray-500">{data?.status}</span>
                  </div>
                  <div className="max-sm:flex-col flex max-sm:gap-3">
                    <span>Release Date: </span>
                    <span className="text-gray-500">
                      {dayjs(data?.release_date).format("DD/MM/YYYY")}
                    </span>
                  </div>
                  <div className="max-sm:flex-col flex max-sm:gap-3">
                    <span>Runtime: </span>
                    <span className="text-gray-500">
                      {minutesToTimeFormat(data?.runtime)}
                    </span>
                  </div>
                </div>

                <div className="mt-4 ">
                  Director:{" "}
                  <span className="text-gray-500">
                    {diretor && diretor[0]?.name}
                  </span>
                </div>
                {trailer && <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/watch?v=${trailer[0]?.key}`} className="mt-8 border-2 w-max border-white px-4 hover:bg-white flex gap-2 hover:text-black rounded-lg py-3">
                  <BsFillPlayFill />
                  See the Trailer{" "}
                </a>}

              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-5 max-w-full mt-20 overflow-hidden">
        <h4 className="text-3xl mb-5">Top Cast</h4>
        <div className="overflow-scroll">
          <div className="flex gap-5 scroll-m-3 mb-8">
            {data?.credits?.cast.slice(0, 15).map((person) => {
              return (
                <div
                  key={person.id}
                  className="flex flex-col flex-shrink-0 justify-center items-center gap-3"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${person?.profile_path} `}
                    className=" object-cover object-top w-[150px] h-[150px] bg-gray-400 rounded-full"
                  ></img>
                  <p className="">{person.name}</p>
                  <p className="text-gray-400 text-sm text-center max-w-[20ch]">
                    {person.character && person.character}
                  </p>
                </div>
              );
            })}

            {/* <img className=' w-[150px] h-[150px] bg-gray- rounded-full'></img> */}
          </div>
        </div>

        <h4 className="text-3xl mb-5"> Details</h4>
        <div className="my-3">
          <div className=" border-b-[1px] border-gray-400 py-4">
            <span className="text-base">Tagline: </span>
            <span className="text-base text-gray-400">{data?.tagline}</span>
          </div>

          <div className=" border-b-[1px] border-gray-400 py-4">
            <span className="text-base">Genre: </span>
            <span className="text-base text-gray-400">{data?.genres.map((genre, index) => (
              <React.Fragment key={index}>
                {genre.name}
                {index !== data.genres.length - 1 && (
                  <span className=" text-slate-400">, </span>
                )}
              </React.Fragment>
            ))}</span>
          </div>

          <div className=" border-b-[1px] border-gray-400 py-4 flex gap-2">
            <span className="text-base">Ratings: </span>
            <span className="text-base text-gray-400 flex gap-2 items-center">{data?.vote_average.toFixed(1)}<AiTwotoneStar /></span>

          </div>

          <div className=" border-b-[1px] border-gray-400 py-4 flex gap-5">
            <div>
              <span className="text-base">Budget: </span>
              <span className="text-base text-gray-400">{data?.budget !== 0 ? `${(data?.budget / 1000000).toFixed(1)} million ` : '--'} </span>
            </div>
            <div>
              <span className="text-base">Earnings: </span>
              <span className="text-base text-gray-400">{data?.revenue !== 0 ? `${(data?.revenue / 1000000).toFixed(1)} million ` : '--'} </span>
            </div><div>
              <span className="text-base">Profit: </span>
              <span className="text-base text-gray-400">
                {data?.revenue !== 0 ? `${((data?.revenue - data?.budget) / 1000000).toFixed(1)} million` : '--'}
              </span>
            </div>

          </div>

          <div className=" border-b-[1px] border-gray-400 py-4">
            <span className="text-base">Release Date: </span>
            <span className="text-base text-gray-400">{data?.release_date}</span>
          </div>

          <div className=" border-b-[1px] border-gray-400 py-4">
            <span className="text-base">Website: </span>
            <a href={data?.homepage} target="_blank" rel="noreferrer" className="text-base hover:text-white text-gray-400">{data?.homepage}</a>
          </div>

          <div className=" border-b-[1px] border-gray-400 py-4">
            <span className="text-base">Languages: </span>
            <span className="text-base text-gray-400">{data?.spoken_languages.map((genre, index) => (
              <React.Fragment key={index}>
                {genre.name}
                {index !== data.genres.length - 1 && (
                  <span className=" text-slate-400">, </span>
                )}
              </React.Fragment>
            ))}</span>
          </div>

          <div className=" border-b-[1px] border-gray-400 py-4">
            <span className="text-base">Writers: </span>
            <span className="text-base text-gray-400">{writers?.map((writer, index) => (
              <React.Fragment key={index}>
                {writer.name}
                {index !== data.genres.length - 1 && (
                  <span className=" text-slate-400">, </span>
                )}
              </React.Fragment>
            ))}</span>
          </div>

          <div className=" border-b-[1px] border-gray-400 py-4 flex gap-3">
            <span className="text-base">Production Houses: </span>
            <span className="text-base text-gray-400 flex gap-5">{data?.production_companies.slice(0, 3).map((item) => {
              return (
                <div key={item.id} className="flex h-8 gap-2 items-center "><span>{item.name}</span></div>
              )
            })}</span>
          </div>


        </div>

        <h4 className="text-3xl my-7"> Videos</h4>
        <div className="flex flex-wrap gap-4">

          {data?.videos?.results.slice(0, 6).map((video) => {
            return (
              <a href={`https://www.youtube.com/watch?v=${video.key}`} target="_blank" rel="noreferrer" key={video.id}>
                <img src={`https://i.ytimg.com/vi/${video.key}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAz3UhhfHf04fRUw1A4kx1rGF4LqQ`} className=' w-[350px] h-[196px] hover:border-2 hover:border-gray-300 cursor-pointer' alt="" />
              </a>
            )
          })}
        </div>



      </div>
    </section>
  );
};

export default Movie_Details;
