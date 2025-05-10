import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        try {
            await API.post("/auth/register", {
                email,
                password,
                fullName: fullName
            });
            navigate("/login");
        } catch (err) {
            console.error("Register failed:", err);
            setErrorMsg(err.response?.data?.error || "Registration error");
        }
    };

    return (
        <div className="flex h-screen bg-black">
            {/* Lado izquierdo */}
            <div className="w-1/2 flex flex-col justify-center items-center text-white p-10">
                <div className="text-left max-w-xs">
                    <h2 className="text-2xl font-light">Need webdesign for your business?</h2>
                    <h2 className="text-blue-600 text-2xl font-bold mt-2">Design Spacee</h2>
                    <p className="text-sm mt-2">will help you.</p>
                </div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Octicons-mark-github.svg/512px-Octicons-mark-github.svg.png"
                    alt="Logo"
                    className="w-20 mt-10"
                />
                <p className="text-sm mt-4">figma.com/@designspacee</p>
            </div>

            {/* Lado derecho */}
            <div className="w-1/2 flex items-center justify-center bg-white rounded-l-3xl shadow-xl">
                <div className="w-full max-w-md px-8 py-10">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign-up</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full p-3 border-b mb-6 outline-none"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 border-b mb-6 outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border-b mb-6 outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}
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
