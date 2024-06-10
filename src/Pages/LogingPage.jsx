import { useForm } from "react-hook-form";

const LogingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <section className="flex justify-center min-h-[calc(100vh-150px)] items-center">
      <div className="max-w-screen-md min-h-fit px-20 py-10 border rounded-tl-2xl rounded-br-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-semibold text-center border-b-2 pb-3 border-">
            Log In
          </h1>
          <div className="mt-4">
            <label className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              className="block h-10 w-96 rounded-xl rounded-tr-none rounded-bl-none px-4 outline-teal-100 shadow-teal-100 shadow-xl border-teal-200 border text-base font-normal"
              placeholder="Enter your email"
              {...register("Email")}
            />
          </div>
          <div className="mt-4">
            <label className="block text-lg font-medium mb-2">Password</label>
            <input
              type="password"
              className="block h-10 w-96 rounded-xl rounded-tr-none rounded-bl-none px-4 outline-teal-100 shadow-teal-100 shadow-xl border-teal-200 border text-base font-normal"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          <div className="mx-auto ">
            <button className="mt-6 py-2 text-xl text-white rounded-md font-medium px-6 bg-teal-400 w-full">Log in</button>
          </div>
        </form>
        <div className="flex w-full items-center justify-center mt-6 gap-x-1">
        <hr className="border-2 w-1/2"/>
        OR 
        <hr className="border-2 w-1/2"/>
        </div>
        <div>
            
        </div>
      </div>
    </section>
  );
};

export default LogingPage;
