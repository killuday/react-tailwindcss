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
        <SwiperSlide><img src="./Images/slider2.jpg" /></SwiperSlide>
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



<footer className="bg-white dark:bg-gray-800 pt-4 pb-8 xl:pt-8">
    <div className="max-w-screen-lg px-4 mx-auto text-gray-400 xl:max-w-screen-xl sm:px-6 md:px-8 dark:text-gray-300">
        <ul className="flex flex-wrap justify-center pb-8 text-lg font-light">
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Components
                    </h2>
                    <ul>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Elements
                            </a>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Forms
                            </a>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Commerces
                            </a>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Navigation
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Contacts
                    </h2>
                    <ul>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Github
                            </a>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Facebook
                            </a>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Twitter
                            </a>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="w-1/2 md:w-1/3 lg:w-1/3">
                <div className="text-center">
                    <h2 className="text-gray-500 dark:text-gray-200 text-md uppercase mb-4">
                        Customization
                    </h2>
                    <ul>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Settings
                            </a>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Themes
                            </a>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                Plugins
                            </a>
                        </li>
                        <li className="mb-4 transition-colors duration-200 hover:text-gray-800 dark:hover:text-white">
                            <a href="#">
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <div className="pt-8 flex border-t border-gray-200 max-w-xs mx-auto items-center justify-between">
            <a href="#">
                <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z">
                    </path>
                </svg>
            </a>
            <a href="#">
                <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z">
                    </path>
                </svg>
            </a>
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792">
                    <path d="M896 128q209 0 385.5 103t279.5 279.5 103 385.5q0 251-146.5 451.5t-378.5 277.5q-27 5-40-7t-13-30q0-3 .5-76.5t.5-134.5q0-97-52-142 57-6 102.5-18t94-39 81-66.5 53-105 20.5-150.5q0-119-79-206 37-91-8-204-28-9-81 11t-92 44l-38 24q-93-26-192-26t-192 26q-16-11-42.5-27t-83.5-38.5-85-13.5q-45 113-8 204-79 87-79 206 0 85 20.5 150t52.5 105 80.5 67 94 39 102.5 18q-39 36-49 103-21 10-45 15t-57 5-65.5-21.5-55.5-62.5q-19-32-48.5-52t-49.5-24l-20-3q-21 0-29 4.5t-5 11.5 9 14 13 12l7 5q22 10 43.5 38t31.5 51l10 23q13 38 44 61.5t67 30 69.5 7 55.5-3.5l23-4q0 38 .5 88.5t.5 54.5q0 18-13 30t-40 7q-232-77-378.5-277.5t-146.5-451.5q0-209 103-385.5t279.5-279.5 385.5-103zm-477 1103q3-7-7-12-10-3-13 2-3 7 7 12 9 6 13-2zm31 34q7-5-2-16-10-9-16-3-7 5 2 16 10 10 16 3zm30 45q9-7 0-19-8-13-17-6-9 5 0 18t17 7zm42 42q8-8-4-19-12-12-20-3-9 8 4 19 12 12 20 3zm57 25q3-11-13-16-15-4-19 7t13 15q15 6 19-6zm63 5q0-13-17-11-16 0-16 11 0 13 17 11 16 0 16-11zm58-10q-2-11-18-9-16 3-14 15t18 8 14-14z">
                    </path>
                </svg>
            </a>
            <a href="#">
                <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z">
                    </path>
                </svg>
            </a>
            <a href="#">
                <svg width="20" height="20" fill="currentColor" className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1551 1476q15-6 26-3t11 17.5-15 33.5q-13 16-44 43.5t-95.5 68-141 74-188 58-229.5 24.5q-119 0-238-31t-209-76.5-172.5-104-132.5-105-84-87.5q-8-9-10-16.5t1-12 8-7 11.5-2 11.5 4.5q192 117 300 166 389 176 799 90 190-40 391-135zm207-115q11 16 2.5 69.5t-28.5 102.5q-34 83-85 124-17 14-26 9t0-24q21-45 44.5-121.5t6.5-98.5q-5-7-15.5-11.5t-27-6-29.5-2.5-35 0-31.5 2-31 3-22.5 2q-6 1-13 1.5t-11 1-8.5 1-7 .5h-10l-3-.5-2-1.5-1.5-3q-6-16 47-40t103-30q46-7 108-1t76 24zm-394-443q0 31 13.5 64t32 58 37.5 46 33 32l13 11-227 224q-40-37-79-75.5t-58-58.5l-19-20q-11-11-25-33-38 59-97.5 102.5t-127.5 63.5-140 23-137.5-21-117.5-65.5-83-113-31-162.5q0-84 28-154t72-116.5 106.5-83 122.5-57 130-34.5 119.5-18.5 99.5-6.5v-127q0-65-21-97-34-53-121-53-6 0-16.5 1t-40.5 12-56 29.5-56 59.5-48 96l-294-27q0-60 22-119t67-113 108-95 151.5-65.5 190.5-24.5q100 0 181 25t129.5 61.5 81 83 45 86 12.5 73.5v589zm-672 21q0 86 70 133 66 44 139 22 84-25 114-123 14-45 14-101v-162q-59 2-111 12t-106.5 33.5-87 71-32.5 114.5z">
                    </path>
                </svg>
            </a>
        </div>
        <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
            <form className="flex flex-col justify-center w-3/4 max-w-sm space-y-3 md:flex-row md:w-full md:space-x-3 md:space-y-0">
                <div className=" relative ">
                    <input type="text" id="&quot;form-subscribe-Subscribe" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Email"/>
                    </div>
                    <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-pink-500 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                        Subscribe
                    </button>
                </form>
            </div>
            <div className="text-center pt-10 sm:pt-12 font-light flex items-center justify-center">
                Powered by Uday
            </div>
        </div>
    </footer>


    </>
  )
}

export default Annie