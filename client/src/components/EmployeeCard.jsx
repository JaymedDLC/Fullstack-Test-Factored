import { useNavigate } from "react-router-dom";

const EmployeeCard = ({ employee }) => {
    const navigate = useNavigate();

    const handleViewProfile = () => {
        navigate(`/employee/${employee._id}`);
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-5 w-64 text-center flex flex-col items-center">
            <img
                src={employee.avatarUrl}
                alt={employee.name}
                className="w-24 h-24 rounded-full mb-4 object-cover border"
            />
            <h3 className="text-lg font-semibold text-gray-800">{employee.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{employee.position}</p>
            <button
                onClick={handleViewProfile}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold transition"
            >
                View Profile
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

export default EmployeeCard;
