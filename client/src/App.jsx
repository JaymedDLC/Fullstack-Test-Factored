import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import EmployeeProfile from './pages/EmployeeProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/employee/:id" element={<EmployeeProfile />} />
        {/* Catch-all route for 404 */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;
