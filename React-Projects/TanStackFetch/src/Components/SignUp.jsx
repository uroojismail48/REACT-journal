import { useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode : "onChange"
  });

 async function onSubmit(data) {
await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(data);
  }
  return (
    <div className="w-full h-screen flex  border justify-center items-center  font-bold gap-20">
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="h-100 w-100 border-2 border-white rounded-2xl flex flex-col gap-5 justify-center items-center  bg-gray-300 ">
          <h1 className="text-2xl">SignUp Page</h1>
      <input
  {...register("username", { required: "zarori" })}
  className="border-2 border-black p-2 text-center rounded-2xl"
  type="text"
  id="username"
  placeholder="enter your Username"
/>
<p>{errors.username && errors.username.message}</p>

<input
  {...register("email", { required: "zarori hai " })}
  className="border-2 border-black p-2 text-center rounded-2xl"
  type="text"
  id="email"
  placeholder="enter Your email"
/>
<p>{errors.email && errors.email.message}</p>
          <button
            className=" bg-red-500 p-2 text-sm rounded-2xl text-white"
            type="submit"
            disabled={isSubmitting}
          >
{isSubmitting ? "wait" : "Submit" }
            
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
