import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/HomePage";
import MemberDashboard from "./pages/MemberDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import CreatePost from "./pages/Create_post";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter >

    <Header />
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/" element={<HomePage />} />
        {/* need to implement private routes */}
        <Route path="/:username" element={<MemberDashboard />} />
        <Route path="/create/post" element={<CreatePost />} />

        <Route path="/admindashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
