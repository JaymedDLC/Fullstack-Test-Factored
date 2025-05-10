import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex h-screen bg-black">
      {/* Lado izquierdo */}
      <div className="w-1/2 flex flex-col justify-center items-center p-10">
        <div className="text-left max-w-xs">
          <h2 className="text-white text-2xl font-light"> Need webdesign for your business?</h2>
          <h2 className="text-blue-700 text-2xl font-bold mt-2">Design Spacee</h2>
          <p className="text-white text-sm mt-2">will help you.</p>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Octicons-mark-github.svg/512px-Octicons-mark-github.svg.png"
          alt="Logo"
          className="w-20 mt-10"
        />
        <p className="text-white text-sm mt-4">figma.com/@designspacee</p>
      </div>

      {/* Lado derecho */}
      <div className="w-1/2 flex items-center justify-center bg-white rounded-l-3xl shadow-xl">
        <div className="w-full max-w-md px-8 py-10">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign-up</h2>
          <form>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border-b mb-6 outline-none"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border-b mb-6 outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border-b mb-6 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
