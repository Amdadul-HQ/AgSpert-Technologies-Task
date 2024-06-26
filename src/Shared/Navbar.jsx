import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate()
  const {user,logOut} = useAuth()
  const handleLogOut = () =>{
    logOut()
    .then(result =>{
      toast.success('Log Out Successful')
      navigate('/')
    })
    .catch(err =>{
      toast.error(err.message)
    })
  }
  return (
    <header className="container mx-auto">
      <nav className="py-5 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-teal-500">AgSpeak</h1>
        <ul className="text-lg font-semibold space-x-12 shadow-2xl ">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/sale' className='bg-white shadow-xl hover:bg-slate-200 transition-all duration-300 shadow-slate-400 px-6 py-1 rounded-tr-none rounded-bl-none rounded-2xl'>Sales</NavLink>
            {user ? <NavLink onClick={handleLogOut} className='bg-black text-white px-6 py-1 shadow-xl hover:shadow-xl hover:shadow-slate-500 hover:bg-slate-800 shadow-slate-500 rounded-tr-none rounded-bl-none rounded-2xl text-center' >Log out</NavLink> : <NavLink className='bg-black text-white px-6 py-1 shadow-xl hover:shadow-xl hover:shadow-slate-500 hover:bg-slate-800 shadow-slate-500 rounded-tr-none rounded-bl-none rounded-2xl text-center' to='/login'>Login</NavLink>}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
