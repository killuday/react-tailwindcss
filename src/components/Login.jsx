import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCannabis, faWallet } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar'


const Login = () => {
  return (
    <>
    <Navbar />
          <div className="flex justify-center">
                                            <div
                                                className="flex mt-32 flex-col justify-center items-center md:flex-row shadow rounded-xl max-w-7xl w-[90%] h-[670px] md:h-[460px] m-2">
                                                <div className="h-[100%] w-full md:w-3/4  bg-center  bg-cover rounded-lg"
                                                    style={{backgroundImage: `url(/images/slider5.jpg)`}}>
                                                    <div className="text-lg lg:text-xl text-center mt-16 space-x-5">
                                                       
                                                        <FontAwesomeIcon icon={faBagShopping} className=" text-cyan-400 bg-white rounded-full px-[10px] py-[10px]" >
                                                           
                                                        </FontAwesomeIcon>
                                                        <FontAwesomeIcon icon={faWallet} className=" text-cyan-400 bg-white rounded-full px-[10px] py-[10px]" >
                                                           
                                                        </FontAwesomeIcon>
                                                        <FontAwesomeIcon icon={faCannabis} className=" text-cyan-400 bg-white rounded-full px-[10px] py-[10px]" >
                                                           
                                                        </FontAwesomeIcon>
                                                     
                                                    </div>
                                                    <div className="text-white text-base font-semibold text-center my-10 space-y-2">
                                                        <h1 className="">Don't have an account ?</h1>
                                                        <h3> <a href="#" className="underline underline-offset-4 tracking-wide hover:text-blue-400">Signup</a> </h3>
                                                    </div>
                                    
                                                </div>
                                                <div className="h-[90%] w-full md:w-3/4">
                                                    <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
                                                        <img className="h-10 md:h-14 w-[13%] md:w-[17%] "
                                                            src="https://cdn-icons-png.flaticon.com/512/1076/1076928.png"
                                                            alt="" srcset="" />
                                                        <h1 className="font-semibold text-gray-600">Annie</h1>
                                                    </div>
                                                    <div className="flex flex-col justify-center items-center mt-10 md:mt-14 space-y-6 md:space-y-8">
                                                        <div className="">
                                                            <input type="text" placeholder="User Name"
                                                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:h-20 md:w-72 lg:w-[340px]" />
                                                        </div>
                                                        <div className="">
                                                            <input type="password" placeholder="Password"
                                                                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-blue-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:h-20 md:w-72 lg:w-[340px]" />
                                                        </div>
                                                        <div className="flex space-x-2 -ml-28 md:-ml-40  lg:-ml-52">
                                                            <input className="" type="checkbox" id="checkbox" name="checkbox" />
                                                            <h3 className="text-sm  font-semibold text-gray-400 mt-2 cursor-pointer">Remember Me</h3>
                                                        </div>
                                                    </div>
                                                    <div className="text-center mt-7">
                                                        <button
                                                            className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600  font-medium ">login</button>
                                                    </div>
                                                    <div className="text-center my-6">
                                                        <a href="#" className="text-sm font-medium text-gray-400 hover:text-blue-500 hover:underline">Forgot
                                                            Password ?</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                       </>              
  )
}

export default Login