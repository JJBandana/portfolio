import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/logo.png';
import {Link} from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width:'150px', padding: '20px'}}/>
        </div>

        {/* MENU */}
        <div>
            <ul className='hidden md:flex'>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* HAMBURGER */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* MOBILE MENU */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* SOCIAL ICONS */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
                    <a className='flex justify-between intems-center w-full text-gray-300 font-semibold' href="https://linkedin.com/in/jjbriasco" target="_blank"> LinkedIn <FaLinkedin size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
                    <a className='flex justify-between intems-center w-full text-gray-300 font-semibold' href="https://github.com/JJBandana" target="_blank"> Github <FaGithub size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#25d366]'>
                    <a className='flex justify-between intems-center w-full text-gray-300 font-semibold' href="jj.briasco@gmail.com"> Email <HiOutlineMail size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#c32aa3]'>
                    <a className='flex justify-between intems-center w-full text-gray- font-semibold' href="https://drive.google.com/file/d/19qiAY8fzaSQ1lVDU12WNPkeHnSKLDbR4/view?usp=sharing" target="_blank"> Resume <BsFillPersonLinesFill size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar;