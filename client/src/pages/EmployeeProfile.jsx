import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import API from "../services/api";
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import Header from "../components/Header";

// Registrar elementos de Chart.js
ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);

const EmployeeProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        const fetchEmployee = async () => {
            try {
                const res = await API.get(`/${id}`);
                setEmployee(res.data);
            } catch (err) {
                console.error("Error fetching employee:", err);
                setError("Error fetching employee data.");
            } finally {
                setLoading(false);
            }
        };
        fetchEmployee();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-neutral-900 text-white flex items-center justify-center">
                Loading employee data...
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-neutral-900 text-red-500 flex items-center justify-center">
                {error}
            </div>
        );
    }

    if (!employee || !employee.skills?.length) {
        return (
            <div className="min-h-screen bg-neutral-900 text-gray-400 flex items-center justify-center">
                Employee data not available.
            </div>
        );
    }

    const chartData = {
        labels: employee.skills.map((skill) => skill.name),
        datasets: [
            {
                label: "Skill Level",
                data: employee.skills.map((skill) => skill.value),
                backgroundColor: "rgba(59, 130, 246, 0.3)",
                borderColor: "rgba(59, 130, 246, 1)",
                borderWidth: 2,
                pointBackgroundColor: "rgba(59, 130, 246, 1)",
            },
        ],
    };

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <Header />

            <div className="relative">
                {/* Flecha de regreso */}
                <button
                    onClick={() => navigate("/home")}
                    className="absolute top-4 left-4 text-white text-2xl hover:text-blue-400 transition-colors"
                    aria-label="Go back"
                >
                    ←
                </button>
            </div>

            <div className="flex flex-col items-center justify-center mt-10 px-4">
                <h1 className="text-3xl font-bold mb-6">Employee Profile</h1>

                <img
                    src={employee.avatarUrl}
                    alt={employee.name}
                    className="w-32 h-32 rounded-full border mb-4 object-cover"
                />

                <h2 className="text-2xl font-semibold">{employee.name}</h2>
                <p className="text-gray-400 mb-6">{employee.position}</p>

                <div className="bg-white p-6 rounded-xl w-full max-w-xl shadow">
                    <h3 className="text-black font-semibold text-center mb-4">
                        Skills Radar
                    </h3>
                    <Radar data={chartData} />
                </div>
            </div>
        </div>
    );
};

export default EmployeeProfile;
