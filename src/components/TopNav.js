import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineSearch,AiOutlineClose} from 'react-icons/ai'
import {BsFillCartFill, BsPerson} from 'react-icons/bs'
import{TbTruckReturn} from 'react-icons/tb'
import{FaGoogleWallet} from 'react-icons/fa'
import {  MdOutlineFavorite } from 'react-icons/md'; 
import { Link } from 'react-router-dom'

import { MdHelp } from 'react-icons/md'; // Ensure you have imported the icon
const TopNav = () => {
    const [sideNav,setSideNav] = useState(false)
    console.log(sideNav)
    return (
        <div className='max-w-[1520] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
            <div onClick = {()=> setSideNav(!sideNav)}className='cursor-pointer'>
            <AiOutlineMenu size={25}/>
            </div>
            <Link to='/'>
      
            <h1 className="text-2xl sm:text-3xl lg:text-4xl px-5"> yum
            <span className='font-bold'>Eats</span>
                </h1>
        
                </Link>
         
            <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
                <p className='bg-orange-700 text-white rounded-full p-3 text-bold'>Free</p>
                <p className='p-2 text-bold'>Delivery</p>
                </div>
            </div>
            <div className='bg-gray-200 rounded-full flex items-center px-3 w-[200px] sm:w-[400px] lg:w-[500px]'>
            <AiOutlineSearch size={25}/>
                
            <input className='bg-transparent p-3 w-full focus:outline-none' type='text' placeholder='Search Meals'></input>
            </div>
            <Link to='/cart'>

            <button className='bg-orange-700 text-white hidden md:flex items-center px-5 py-3  rounded-full hover:bg-white hover:text-orange-700 transition-all border-orange-700'>
            <BsFillCartFill size={20} className='mx-1'/>Cart
            </button>
            </Link>
       
            {
                sideNav ? ( 
                    <div className='bg-black/60 fixed w-full h-screen z-10 top-0 left-0'
                    onClick={() => setSideNav(!sideNav)}>
                    </div>
                ):(""
           ) }
        <div className={sideNav ?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
        : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }>
    <AiOutlineClose 
    onClick={()=> setSideNav(!sideNav)}
    size={25}
    className='absolute top-4 right-4 cursor-pointer'/>
    <h2 className='text-2xl p-4'>Yum <span className='text-orange-700 font-bold'>Eats
        </span></h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-900'>
            <li className='text-xl py-4 flex'>
            <BsPerson size={25}
            className='mr-4 text-white bg-black rounded-full '/>
            My Account
            </li>
            <li className='text-xl py-4 flex'>
            <TbTruckReturn size={25}
            className='mr-4 text-white bg-black rounded-full '/>
            Delivery
            </li>
            <li className='text-xl py-4 flex'>
            <MdOutlineFavorite size={25}
            className='mr-4 text-white bg-black rounded-full '/>
            My Favourite
            </li>
            <li className='text-xl py-4 flex'>
            < FaGoogleWallet size={25}
            className='mr-4 text-white bg-black rounded-full '/>
            My Wallet
            </li>
            <li className='text-xl py-4 flex'>
            <MdHelp size={25}
            className='mr-4 text-white bg-black rounded-full '/>
            Help
            </li>
            </ul>
        </nav>
        </div>
        </div>
        )
}
export default TopNav