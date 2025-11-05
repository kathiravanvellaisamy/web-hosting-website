import { Link, useLocation } from "react-router-dom"
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import { useState } from "react";


const Navbar = () => {
  const location = useLocation()
  const [showMenu,setShowMenu] = useState(false)

  return (
    <header className="w-full bg-white fixed z-50 shadow">
      <nav className="px-4 sm:px-4 md:px-12 py-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center ">
                <Link to="/"  className="text-3xl text-slate-800 font-bold">Host <span className="text-red-500"> Nexa</span></Link>
            </div>
            <div className="hidden md:flex items-center space-x-3 lg:space-x-5 font-semibold text-dark ml-6">
                <Link className={location.pathname === '/' ? "text-primary":""} to={'/'} >Home</Link>
                <Link className={location.pathname === '/hosting' ? "text-primary":""} to={'/hosting' }>Hosting</Link>
                <Link  className={location.pathname === '/domain' ? "text-primary":""} to={'/domain'} >Domain</Link>
                <Link  className={location.pathname === '/about' ? "text-primary":""} to={'/about'} >About </Link>
                <Link  className={location.pathname === '/contact' ? "text-primary":""} to={'/contact'} >Contact </Link>
            </div>
            

            {/* authlink */}
            <div className="hidden md:inline-flex gap-5 items-center">
              <Link to={'/auth'} className="bg-red-500 text-white py-2 px-5 border-2 border-red-500 hover:bg-white hover:text-red-500 transition-all duration-500 ">Login</Link>
              <Link to={'/auth'} className="border-2 border-red-500 text-red-500 py-2 px-5 hover:bg-red-500 hover:text-white">Sign Up</Link>        
            </div>

            {/* mobile menu */}
            <div className="md:hidden z-20">
              {showMenu ? <IoClose size={26} onClick={()=>setShowMenu(!showMenu)}  className=" cursor-pointer text-white" /> : <RiMenu3Fill className=" cursor-pointer text-dark"   size={26}  onClick={()=>setShowMenu(!showMenu)}  />}  
            </div>
        </div>

        {
          showMenu && (
            <div className="md:hidden flex flex-col items-center justify-center space-y-6 fixed top-0 right-0 w-64 h-screen bg-primary text-white font-semibold transition-all duration-500">
                <Link onClick={()=>setShowMenu(!showMenu)}   to={'/'} >Home</Link>
                <Link onClick={()=>setShowMenu(!showMenu)}     to={'/hosting' }>Hosting</Link>
                <Link onClick={()=>setShowMenu(!showMenu)}     to={'/domain'} >Domain</Link>
                <Link  onClick={()=>setShowMenu(!showMenu)}     to={'/about'} >About Us</Link>
                <Link  onClick={()=>setShowMenu(!showMenu)}     to={'/contact'} >Contact Us</Link>

                   {/* authlink */}
                <div className="flex gap-5 items-center mt-5">
                  <Link  onClick={()=>setShowMenu(!showMenu)}    to={'/auth'} className="bg-white text-red-500 py-2 px-5 border-2 border-white ">Login</Link>
                  <Link  onClick={()=>setShowMenu(!showMenu)}    to={'/auth'} className="border-2 border-white text-white py-2 px-5 ">Sign Up</Link>        
                </div>
            </div>
          )
        }
      </nav>
    </header>
  )
}

export default Navbar