import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoggedIn(!!localStorage.getItem("token"));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (
        <header className="bg-black text-white p-4 flex justify-between items-center shadow-md">
            {/* Logo */}
            <Link to={isLoggedIn ? "/home" : "/"}>
                <img
                    src="/factored logo white.svg"
                    alt="Factored Logo"
                    className="h-10"
                />
            </Link>

            {/* Iniciar o Cerrar Sesión */}
            <div className="space-x-4">
                {isLoggedIn ? (
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold text-sm"
                    >
                        Logout
                    </button>
                ) : (
                    <>
                        <Link
                            to="/login"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold text-sm"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold text-sm"
                        >
                            Register
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
