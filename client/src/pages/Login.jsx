import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");

        try {
            const res = await API.post("/auth/login", { email, password });
            const { token } = res.data;
            localStorage.setItem("token", token);
            navigate("/home");
        } catch (err) {
            console.error("Login failed:", err);
            setErrorMsg(err.response?.data?.error || "Login error");
        }
    };

    return (
        <div className="flex h-screen bg-black">
            {/* Lado izquierdo */}
            <div className="w-1/2 flex flex-col justify-center items-center text-white p-10">
                <div className="text-left max-w-xs leading-snug tracking-tight">
                    <h2 className="text-2xl font-light">Welcome to FactoredAI</h2>
                    <h2 className="text-blue-600 text-2xl font-bold mt-1">
                        The industry's most effective
                    </h2>
                    <h2 className="text-2xl font-light">community of engineers</h2>
                </div>
                <img
                    src="/factored logo white.svg"
                    alt="Factored Logo"
                    className="w-48 mt-10"
                />
                <p className="text-sm mt-4">figma.com/@designspacee</p>
            </div>

            {/* Lado derecho */}
            <div className="w-1/2 flex items-center justify-center bg-white rounded-l-3xl shadow-xl">
                <div className="w-full max-w-md px-8 py-10">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign-in</h2>
                    <form onSubmit={handleSubmit}>
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
                            Login
                        </button>
                    </form>
                    <p className="text-center mt-4 text-sm">
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Signup Here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
