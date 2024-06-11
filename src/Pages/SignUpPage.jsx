import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const SignUpPage = () => {
  const {loading,logInWithGoogle,createUserAccout,logIn} = useAuth() 
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors } ,
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;
    createUserAccout(email,password)
    .then(result =>{
        if(result){
            toast.success('Account Created Successful')
            navigate('/sale')
        }
    })
    .catch(err=>{
        toast.error(err.message)
    })
  };
  const handleGoogleLogin = () =>{
    logInWithGoogle()
    .then(result=>{
        toast.success('Login Successful')
    })
    .catch(err=>{
        toast.error(err.message)
    })
  }
  return (
    <section className="flex justify-center min-h-[calc(100vh-150px)] items-center">
      <div className="max-w-screen-md min-h-fit px-20 py-10 border rounded-tl-[30px] rounded-br-[30px] shadow-slate-300 shadow-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-semibold text-center border-b-2 pb-3 border-">
            Sign Up
          </h1>
          <div className="mt-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="block h-10 w-96 rounded-xl rounded-tr-none rounded-bl-none px-4 outline-teal-100 shadow-teal-100 shadow-xl border-teal-200 border text-base font-normal"
              placeholder="Enter your fullname"
              {...register("name",{ required: true })}
            />
            {errors.name && <span className="text-red-400 font-normal text-sm">This field is required</span>}
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="block h-10 w-96 rounded-xl rounded-tr-none rounded-bl-none px-4 outline-teal-100 shadow-teal-100 shadow-xl border-teal-200 border text-base font-normal"
              placeholder="Enter your email"
              {...register("email",{ required: true })}
              />
              {errors.email && <span className="text-red-400 font-normal text-sm">This field is required</span>}
          </div>
          <div className="mt-4 relative">
            <label
              htmlFor="password"
              className="block text-lg font-medium mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type={showPass ? "text" : "password"}
              className="block h-10  w-96 rounded-xl rounded-tr-none rounded-bl-none px-4 outline-teal-100 shadow-teal-100 shadow-xl border-teal-200 border text-base font-normal"
              placeholder="Enter your password"
              {...register("password",{ required: true })}
            />
            {errors.password && <span className="text-red-400 font-normal text-sm">This field is required</span>}
            {showPass ? (
              <button
              type="button"
                onClick={handleShowPass}
                className="absolute right-3 text-gray-500 bottom-3"
              >
                <FaEye />
              </button>
            ) : (
              <button
              type="button"
                onClick={handleShowPass}
                className="absolute right-3 text-gray-500 bottom-3"
              >
                <FaEyeSlash />
              </button>
            )}
          </div>
          <div className="mx-auto ">
            <button

              type="submit"
              className="mt-6 py-2 hover:bg-teal-500 transition-all duration-300 text-xl text-white rounded-md font-medium px-6 bg-teal-400 w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-base font-medium mt-4 text-center">
          Already Have a Account?{" "}
          <Link to="/login">
            <span className="text-blue-400">Log in</span>
          </Link>
        </p>
        <div className="flex w-full items-center justify-center mt-6 gap-x-1">
          <hr className="border-2 w-1/2" />
          OR
          <hr className="border-2 w-1/2" />
        </div>
        <div className="mx-auto text-center">
          <button
            onClick={handleGoogleLogin}
           className="text-lg flex items-center font-medium bg-white border justify-center shadow-slate-200 shadow-xl hover:shadow-slate-300 transition-all duration-300 hover:shadow-xl w-full py-2 rounded-lg mt-3 text-center">
            Sign With <span className="ml-2 text-xl text-blue-400">G</span>
            <span className="text-red-500">o</span>
            <span className="text-blue-500">o</span>
            <span className="text-yellow-400">g</span>
            <span className="text-green-500">l</span>
            <span className="text-blue-400">e</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
