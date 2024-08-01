import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
      <h1 className="text-3xl text-center mb-4 ">Login</h1>
      <form action="#" className="max-w-md mx-auto">
        <input type="email" name="email" placeholder="your@email.com" />
        <input type="password" name="password" placeholder="password" />
        <button className="primary py-4 my-4">Login</button>
        <div className=" text-center text-gray-500">Dont have an account yet? <Link className="text-black underline" to={"/register"}> Register now</Link></div>
      </form>
      </div>
    </div>
  );
}
