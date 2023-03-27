import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Annie = () => {
  return (
    <>

        <Navbar />
    
        <div>
            <img  src=".\Images\cover.jpg" className='object-cover' alt="" />
        </div>
        <div className="flex justify-center bg-blue-500 p-4">
                                            <div className="flex flex-col justify-center items-center ">
                                                <div className="text-white text-3xl font-medium">Our Trusted Clients</div>
                                                <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
                                    
                                                    <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">
                                    
                                                        <div className="flex flex-col md:flex-row items-center justify-center  ">
                                                            <div className="  items-center justify-center flex py-2">
                                                                <div className="flex flex-col  items-center justify-center text-center">
                                                                    <img src="https://source.unsplash.com/150x150/?man,boy" alt="" className="rounded-full" />
                                                                    <div className="text-stone-600 font-medium m-2"> Tailblocks provides best Tailwind CSS
                                                                        Components and Blocks to create an unique websites within minutes.</div>
                                                                    <div className="font-bold">John Doe</div>
                                                                    <div className="text-cyan-600 italic"><a href="#">Board Director of Tailblocks</a></div>
                                                                </div>
                                                            </div>
                                    
                                                        </div>
                                                    </div>
                                                    <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">
                                    
                                                        <div className="flex flex-col md:flex-row items-center justify-center  ">
                                                            <div className="  items-center justify-center flex py-2">
                                                                <div className="flex flex-col  items-center justify-center text-center">
                                                                    <img src="https://source.unsplash.com/150x150/?girl" alt="" className="rounded-full" />
                                                                    <div className="text-stone-600 font-medium m-2"> Tailblocks provides best Tailwind CSS
                                                                        Components and Blocks to create an unique websites within minutes.</div>
                                                                    <div className="font-bold">Jessie</div>
                                                                    <div className="text-cyan-600 italic"><a href="#">MD of Tailblocks</a></div>
                                                                </div>
                                                            </div>
                                    
                                                        </div>
                                                    </div>
                                                    <div className="overflow-hidden w-full m-4 flex justify-center bg-white rounded-lg  md:w-[33%] px-8">
                                    
                                                        <div className="flex flex-col md:flex-row items-center justify-center  ">
                                                            <div className="  items-center justify-center flex py-2">
                                                                <div className="flex flex-col  items-center justify-center text-center">
                                                                    <img src="https://source.unsplash.com/150x150/?girl,woman" alt=""
                                                                        className="rounded-full" />
                                                                    <div className="text-stone-600 font-medium m-2"> Tailblocks provides best Tailwind CSS
                                                                        Components and Blocks to create an unique websites within minutes.</div>
                                                                    <div className="font-bold">Davina Claire</div>
                                                                    <div className="text-cyan-600 italic"><a href="#">Board Director of Tailblocks</a></div>
                                                                </div>
                                                            </div>
                                    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> 
    <Swiper className='mt-16'
        
        fadeEffect={{crossFade:true}}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
        >
        <SwiperSlide><img src=".\Images\slider1.jpg" /></SwiperSlide>
        <SwiperSlide><img src=".\Images\3.jpg" /></SwiperSlide>
        <SwiperSlide><img src=".\Images\slider3.jpg" /></SwiperSlide>
        <SwiperSlide><img src=".\Images\slider5.jpg" /></SwiperSlide>
        ...
    </Swiper>

        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-xs text-pink-500 tracking-widest font-medium title-font mb-1">ROOF PARTY
                        POLAROID</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac
                        Heirloom</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon
                        brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't
                        heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac
                        humblebrag.</p>
                </div>
                <div className="flex flex-wrap">
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit
                            waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        <a className="text-pink-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit
                            waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        <a className="text-pink-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit
                            waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        <a className="text-pink-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit
                            waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        <a className="text-pink-500 inline-flex items-center">Learn More
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                 stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <button
                    className="flex mx-auto mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Button
                </button>
            </div>
        </section>
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master
                        Cleanse Reliac Heirloom</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr
                        hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably
                        haven't heard of them man bun deep jianbing selfies heirloom.</p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img src="https://bestforpets.in/wp-content/uploads/2023/02/dalmatian-1.jpg" alt="gallery" className="w-full object-cover h-full object-center block" />

                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img   src="https://www.thesprucepets.com/thmb/UzXcD_jVFtbod8lsk525YDtBqyk=/3300x0/filters:no_upscale():strip_icc()/black-and-white-dog-names-4802651-hero-07314f6dfebf4af7b1a55b61d7183dd8.jpg" alt="gallery" className="w-full object-cover h-full object-center block" />

                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img   src="https://a-z-animals.com/media/2022/01/Types-of-water-dogs-Portuguese-Water-Dog-1024x535.jpg" alt="gallery" className="w-full h-full object-cover object-center block" />

                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img  src="https://www.k9ofmine.com/wp-content/uploads/2018/05/black-and-white-dog-names-1150x700.jpg" alt="gallery" className="w-full h-full object-cover object-center block" />

                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img src="https://i.natgeofe.com/n/a369fc34-ca7b-4309-a252-e1bdac892f96/7091983.jpg?w=636&h=424" alt="gallery" className="w-full object-cover h-full object-center block" />

                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img src="https://www.hepper.com/wp-content/uploads/2021/11/shutterstock_1332311522.jpg" alt="gallery" className="w-full object-cover h-full object-center block" />

                        </div>
                    </div>
                </div>
            </div>
        </section>


<div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
    <div className="relative">
        <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
                <p className="text-base font-semibold leading-6 text-indigo-500 uppercase">
                    Interactive
                </p>
                <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                    Interactivity between team members is the key of the success.
                </h4>
                <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                    Build a simply and powered collaborative space for all your team. Track, share, measure, you have a fully control, it&#x27;s never be simply and efficient.
                </p>
                <ul className="gap-6 mt-8 md:grid md:grid-cols-2">
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Live modifications
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Data tracker
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                24/24 support
                            </span>
                        </div>
                    </li>
                    <li className="mt-6 lg:mt-0">
                        <div className="flex">
                            <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full dark:text-green-500 drark:bg-transparent">
                                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                                    </path>
                                </svg>
                            </span>
                            <span className="ml-4 text-base font-medium leading-6 text-gray-500 dark:text-gray-200">
                                Free tips to improve work time
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
                <div className="relative space-y-4">
                    <div className="flex items-end justify-center space-x-4 lg:justify-start">
                        <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src=".\Images\1.jpg"alt="1"/>
                        <img className="w-40 rounded-lg shadow-lg md:w-64" width="260" src=".\Images\2.jpg" alt="2"/>
                    </div>
                    <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                        <img className="w-24 rounded-lg shadow-lg md:w-40" width="170" src=".\Images\3.jpg" alt="3"/>
                        <img className="w-32 rounded-lg shadow-lg md:w-56" width="200" src=".\Images\slider1.jpg" alt="4"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



<Footer />


    </>
  )
}

export default Annie