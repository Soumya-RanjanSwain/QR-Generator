import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import romimage from '../assets/Romance.jpg'


export default function MovieCategory() {
    return (
        <div className="container mx-auto px-11 mb-3">
            <Swiper
                className=" mt-14"
                spaceBetween={50}
                slidesOffsetAfter={30}

                modules={[Keyboard, Mousewheel]}
                mousewheel={{
                    sensitivity: 1,
                    noMousewheelClass: true,
                }}
                grabCursor={true}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    858: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}

                onSlideChange={() => console.log("slide change")}
                keyboard={{
                    enabled: true,
                }}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <Link to={'/category/28'}
                        className=" bg-red-500 text-white flex relative hover:border-white  cursor-pointer  hover:border-[5px] transition-all duration-200 items-end px-4 py-4  backdrop-blur-lg  aspect-video "
                        style={{
                            background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR74vxucbMtZfR6CbNVvmNRYzCc9qhWQwxnSg&usqp=CAU')`,
                        }}
                    >
                        <div className="overlay bg-gradient-to-r -z-10 from-black via-60% to-transparent left-0 absolute bottom-0 h-full w-full opacity-90 pointer-events-none">
                            {" "}
                        </div>
                        <h5 className="text-3xl pointer-events-none">Action</h5>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={'/category/9648'}
                        className=" bg-red-500 text-white hover:border-white  cursor-pointer  hover:border-[5px] transition-all duration-200  flex  items-end px-4 py-4 backdrop-blur-lg   aspect-video "
                        style={{
                            background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH50ualqXuUv32wt3P8tl2vKkoFAzz9ev1ZQ&usqp=CAU')`,
                        }}

                    >
                        <div className="overlay bg-gradient-to-r -z-10 from-black via-60% to-transparent left-0 absolute bottom-0 h-full w-full opacity-90 pointer-events-none">
                            {" "}
                        </div>
                        <h5 className="text-3xl pointer-events-none">Mystery</h5>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={'/category/27'}
                        className=" bg-red-500 text-white hover:border-white  cursor-pointer  hover:border-[5px] transition-all duration-200 flex  items-end px-4 py-4 backdrop-blur-lg   aspect-video "
                        style={{
                            background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIuRo45GTGEoaPwIWjk2MAxIoGjyxxXrJICg&usqp=CAU')`,
                        }}
                    >
                        <div className="overlay bg-gradient-to-r -z-10 from-black via-60% to-transparent left-0 absolute bottom-0 h-full w-full opacity-90 pointer-events-none">
                            {" "}
                        </div>

                        <h5 className="text-3xl pointer-events-none">Horror</h5>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={'/category/10749'}
                        className=" bg-red-500 text-white hover:border-white  cursor-pointer hover:border-[5px] transition-all duration-200 flex  items-end px-4 py-4 backdrop-blur-lg   aspect-video "
                        style={{
                            background: `url('${romimage}')`,
                            backgroundSize: '100%'
                        }}
                    >
                        <div className="overlay bg-gradient-to-r -z-10 from-black via-60% to-transparent left-0 absolute bottom-0 h-full w-full opacity-90 pointer-events-none">
                            {" "}
                        </div>
                        <h5 className="text-3xl pointer-events-none">Romance</h5>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={'/category/35'}
                        className=" bg-red-500 text-white hover:border-white  cursor-pointer hover:border-[5px] transition-all duration-200 flex  items-end px-4 py-4 backdrop-blur-lg   aspect-video "
                        style={{
                            background: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxrP15C8YWepfti9P3kdpgC44N6kB2U4eHQ&usqp=CAU')`,
                            backgroundSize: '100%'

                        }}
                    >
                        <div className="overlay bg-gradient-to-r -z-10 from-black via-60% to-transparent left-0 absolute bottom-0 h-full w-full opacity-90 pointer-events-none">
                            {" "}
                        </div>

                        <h5 className="text-3xl pointer-events-none">Comedy</h5>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/878'}
                        className=" bg-red-500 text-white hover:border-white   cursor-pointer hover:border-[5px] transition-all duration-200 flex  items-end px-4 py-4 backdrop-blur-lg   aspect-video "
                        style={{
                            background: `url('https://i0.wp.com/flickside.com/wp-content/uploads/2022/08/Blade-Runner-2049-explained-3.jpg?fit=1200%2C900&ssl=1')`,
                            backgroundSize: '100%'

                        }}
                    >
                        <div className="overlay bg-gradient-to-r -z-10 from-black via-60% to-transparent left-0 absolute bottom-0 h-full w-full opacity-90 pointer-events-none">
                            {" "}
                        </div>

                        <h5 className="text-3xl pointer-events-none">Sci-fi</h5>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to={'/category/14'}
                        className=" bg-red-500 text-white hover:border-white  cursor-pointer hover:border-[5px] transition-all duration-200 flex  items-end px-4 py-4 backdrop-blur-lg   aspect-video "
                        style={{
                            background: `url('https://static01.nyt.com/images/2022/09/05/arts/01lotr/01lotr-videoSixteenByNine3000.jpg')`,
                            backgroundSize: '100%'

                        }}
                    >
                        <div className="overlay bg-gradient-to-r -z-10 from-black via-60% to-transparent left-0 absolute bottom-0 h-full w-full opacity-90 pointer-events-none">
                            {" "}
                        </div>
                        <h5 className="text-3xl pointer-events-none">Fantasy</h5>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={'/category/18'}
                        className=" bg-red-500 text-white hover:border-white  cursor-pointer hover:border-[5px] transition-all duration-200 flex  items-end px-4 py-4 backdrop-blur-lg   aspect-video "
                        style={{
                            background: `url('https://www.looper.com/img/gallery/best-drama-movies-of-all-time-ranked/the-green-mile-1660930801.jpg')`,
                            backgroundSize: '100%'

                        }}
                    >
                        <div className="overlay bg-gradient-to-r -z-10 from-black via-60% to-transparent left-0 absolute bottom-0 h-full w-full opacity-90 pointer-events-none">
                            {" "}
                        </div>
                        <h5 className="text-3xl pointer-events-none">Drama</h5>
                    </Link>
                </SwiperSlide>

                <SwiperSlide>
                    <Link to={'/category/80'}
                        className=" bg-red-500 text-white hover:border-white  cursor-pointer hover:border-[5px] transition-all duration-200 flex  items-end px-4 py-4 backdrop-blur-lg   aspect-video "
                        style={{
                            background: `url('https://m.media-amazon.com/images/M/MV5BOGU1YjI0NmEtN2JiZi00YWRjLWJkMjctODFlMjgyYTA1MmJiXkEyXkFqcGdeQXVyMDc2NTEzMw@@._V1_.jpg')`,
                            backgroundSize: '100%'

                        }}
                    >
                        <div className="overlay bg-gradient-to-r -z-10 from-black via-60% to-transparent left-0 absolute bottom-0 h-full w-full opacity-90 pointer-events-none">
                            {" "}
                        </div>
                        <h5 className="text-3xl pointer-events-none">Crime</h5>
                    </Link>
                </SwiperSlide>


            </Swiper></div>
    )
}
