import React from 'react'

const Annie = () => {
  return (
    <>

        <nav className="flex items-center justify-between flex-wrap bg-pink-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                </svg>
                <span className="font-semibold text-xl tracking-tight">Annie</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-pink-200 border-pink-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">
                        Docs
                    </a>
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white mr-4">
                        Examples
                    </a>
                    <a href="#responsive-header"
                       className="block mt-4 lg:inline-block lg:mt-0 text-pink-200 hover:text-white">
                        Blog
                    </a>
                </div>
                <div>
                    <a href="#"
                       className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-pink-500 hover:bg-white mt-4 lg:mt-0">Download</a>
                </div>
            </div>
        </nav>
        <div>
            <img  src="https://media-be.chewy.com/wp-content/uploads/2021/05/27134335/Dalmatian_FeaturedImage.jpg" alt="" />
        </div>

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


    </>
  )
}

export default Annie