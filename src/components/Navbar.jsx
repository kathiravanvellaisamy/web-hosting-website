import { Link, useLocation } from "react-router-dom"


const Navbar = () => {
  const location = useLocation()
  
  return (
    <header className="w-full bg-white fixed z-50 shadow">
      <nav className="px-6 sm:px-12 md:px-24 py-5">
        <div className="flex items-center justify-between">
            <div className="flex items-center ">
                <Link to="/"  className="text-3xl text-slate-800 font-bold">Host <span className="text-red-500"> Nexa</span></Link>
            </div>
            <div className="hidden md:flex items-center space-x-6 font-semibold text-dark ml-6">
                <Link className={location.pathname === '/' ? "text-primary":""} to={'/'} >Home</Link>
                <Link className={location.pathname === '/hosting' ? "text-primary":""} to={'/hosting' }>Hosting</Link>
                <Link  className={location.pathname === '/domain' ? "text-primary":""} to={'/domain'} >Domain</Link>
                <Link  className={location.pathname === '/about' ? "text-primary":""} to={'/about'} >About Us</Link>
                <Link  className={location.pathname === '/contact' ? "text-primary":""} to={'/contact'} >Contact Us</Link>
            </div>
            <div className="hidden md:flex gap-5 items-center">
            <Link to={'/auth'} className="bg-red-500 text-white py-2 px-5 border-2 border-red-500 hover:bg-white hover:text-red-500 transition-all duration-500 ">Login</Link>
            <Link to={'/auth'} className="border-2 border-red-500 text-red-500 py-2 px-5 hover:bg-red-500 hover:text-white">Sign Up</Link>        
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar