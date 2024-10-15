import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ClientLogin from "./pages/ClientLogin";
import ClientSubmissions from "./pages/ClientSubmissions";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/client/login" element={<ClientLogin />} />
                <Route
                    path="/client/submissions"
                    element={<ClientSubmissions />}
                />
            </Routes>
        </Router>
    );
};

export default App;
