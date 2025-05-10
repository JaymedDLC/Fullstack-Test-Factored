import { useParams } from "react-router-dom";
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

// Registro necesario para radar chart
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
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    API.get(`/${id}`)
      .then((res) => setEmployee(res.data))
      .catch((err) => console.error("Error fetching employee:", err));
  }, [id]);

  if (!employee) {
    return (
      <div className="text-center mt-20 text-white">
        Loading employee data...
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
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center">
      <img
        src={employee.avatarUrl}
        alt={employee.name}
        className="w-32 h-32 rounded-full border mb-4"
      />
      <h1 className="text-2xl font-bold">{employee.name}</h1>
      <p className="text-gray-400 mb-6">{employee.position}</p>

      <div className="bg-white p-6 rounded-xl w-full max-w-xl shadow">
        <h2 className="text-black font-semibold text-center mb-4">Skills Radar</h2>
        <Radar data={chartData} />
      </div>
    </div>
  );
};

export default EmployeeProfile;
