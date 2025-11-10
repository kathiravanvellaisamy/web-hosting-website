import { useState } from "react"
import { useNavigate } from "react-router-dom"


const Auth = () => {

  const navigate = useNavigate()
  const [isLogin,setIsLogin] = useState(true)

  return (
    <div  className="flex items-center justify-center h-screen p-4 md:p-0">
      <div className="w-full max-w-xl mx-auto p-4 md:p-12 shadow  rounded-xl">
        <div onClick={()=>navigate("/")} className="flex items-center justify-center gap-2 mb-8 mx-auto cursor-pointer">
          <span className="text-dark text-4xl font-bold">Host</span>
          <span className="text-primary text-4xl font-bold">Nexa</span>
        </div>

        <h1 className="text-2xl text-center font-extralight text-dark">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>


        {/* Name */}
       {isLogin ? (
         ""
       ):(
        <div className="mb-4 flex flex-col ">
          <label className="text-dark/80 mb-2">Name</label>
          <input type="text" placeholder="Name" className="border border-primary/40 outline-none p-2 rounded-md" />
        </div>
       )}


        {/* Email Address */}
        <div className="mb-4 flex flex-col ">
          <label className="text-dark/80 mb-2">Email</label>
          <input type="email" placeholder="Email" className="border border-primary/40 outline-none p-2 rounded-md" />
        </div>

        {/* Password */}
        <div className="mb-4 flex flex-col">
          <label className="text-dark/80 mb-2">Password</label>
          <input type="password" placeholder="Password" className="border border-primary/40 outline-none p-2 rounded-md" />
        </div>

        {isLogin ? (
          <div className="flex justify-end items-end mb-3">
            <a href="#" className="text-primary font-bold text-sm">Forgot Password</a>
          </div>
        ):("")}

        <div className="flex justify-center items-center rounded-md py-3 px-5 bg-primary text-white">
           <button className="cursor-pointer">
            {isLogin ? "Sign In":"Sign Up"}
           </button>
        </div>
        <p className="text-sm mt-2 text-center">
          {isLogin ? "Have no account yet?  " : "You already have an Account?"}
          
           <a   onClick={()=>setIsLogin(!isLogin)}  className="text-primary cursor-pointer ml-1">
          {isLogin ? "Sign Up " : "Sign In"}
          </a>
        </p>
      </div>
    </div>
  )
}

export default Auth