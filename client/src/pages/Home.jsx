import { useEffect, useState } from "react";
import API from "../services/api";
import EmployeeCard from "../components/EmployeeCard";
import Header from "../components/Header";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    API.get("/")
      .then((res) => setEmployees(res.data))
      .catch((err) => console.error("Error loading employees:", err));
  }, []);

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />

      <div className="px-4 py-10">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Employees</h1>
        <div className="flex flex-wrap gap-6 justify-center">
          {employees.map((emp) => (
            <EmployeeCard key={emp._id} employee={emp} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
