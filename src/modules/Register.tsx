import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../api";
import { useState } from "react";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
};

const Register = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<RegisterFormData>();

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const handleRegister = async (data: RegisterFormData) => {
    try {
      setLoading(true);
      const res = await registerApi(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  //REACT HOOK FORM

  // TAK GUNA DAH form ni ganti dengan REACT HOOK FORM
  // const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(formData);

  //   if (data.username.length < 5) {
  //     alert("Username must be at least 5 characters");
  //     return;
  //   }

  //   console.log(data);
  //   //reset form
  //   e.currentTarget.reset();
  // };

  return (
    <div className="max-w-[600px] mx-auto mt-[200px] border  p-4 rounded">
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(handleRegister)}
      >
        <h1 className="text-xl font-bold"> Register </h1>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            // name="email"
            placeholder="Email Address"
            className="border p-2 rounded"
            {...register("email")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            // name="username"
            placeholder="Username"
            className="border p-2 rounded"
            {...register("username")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            // name="password"
            placeholder="Password"
            className="border p-2 rounded"
            {...register("password")}
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-blue-600 text-white p-2 rounded mt-4"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
          <button
            type="button"
            className=" border-blue-600 border p-2 rounded"
            onClick={handleNavigateLogin}
          >
            Login as existing user
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
