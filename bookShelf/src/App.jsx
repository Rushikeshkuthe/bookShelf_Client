// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import './App.css'
// import LandingPage from "./pages/LandingPage";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import Sidebar from "./component/Sidebar";
// import Settings from "./pages/Settings";
// import Books from "./pages/Books";
// import Reviews from "./pages/Reviews";

// function App() {

//   return (
//     <Router>
//     <div className="flex h-screen">
//       <Sidebar />
//       <div className="flex-1  overflow-auto">
//   <Routes>
//     <Route path="/" element={<LandingPage />} />
//     <Route path="/login" element={<Login/>} />
//     <Route path="/signup" element={<Signup/>} />
//     <Route path="/dash" element={<Dashboard/>} />
//     <Route path="/books" element={<Books/>} />
//     <Route path="/reviews" element={<Reviews/>} />
//     <Route path="/settings" element={<Settings/>} />
//   </Routes>
//   </div>
//   </div>
//  </Router>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./component/Sidebar";
import Settings from "./pages/Settings";
import Books from "./pages/Books";
import Reviews from "./pages/Reviews";

function App() {
  const location = useLocation();
  const noSidebarRoutes = ["/", "/login", "/signup"];

  return (
    <div className="flex h-screen">
      {!noSidebarRoutes.includes(location.pathname) && <Sidebar />}
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dash" element={<Dashboard />} />
          <Route path="/books" element={<Books />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
