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
import Manga from "./pages/Manga";
import Kids from "./pages/Kids";
import Latest from "./pages/Latest";
import Recent from "./pages/Recent";
import Favorite from "./pages/Favorite";
import PrivateRoute from "./pages/PrivateRoute";
import SingleBook from "./pages/SingleBook";
import SubscriptionPlan from "./pages/SubscriptionPlan";
import AddBook from "./pages/AddBooks";

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
          <Route path="/bookUp" element={<AddBook/>} />
          <Route path="/dash" element={
          <PrivateRoute> 
            <Dashboard />
            </PrivateRoute>} />
          <Route path="/books" element={
            <PrivateRoute> 
          <Books />
          </PrivateRoute>
          } />
          <Route path="/reviews" element={
          <PrivateRoute>  <Reviews /></PrivateRoute>
        } />
          <Route path="/settings" element={
          <PrivateRoute> <Settings /></PrivateRoute>
         } />
          <Route path="/kids" element={
          <PrivateRoute><Kids /></PrivateRoute>} />
          <Route path="/latest" element={
          <PrivateRoute> <Latest /></PrivateRoute>
         } />
          <Route path="/manga" element={
          <PrivateRoute>  <Manga /></PrivateRoute>
        } />
          <Route path="/recent" element={
          <PrivateRoute><Recent /></PrivateRoute>} />
          <Route path="/fav" element={
          <PrivateRoute><Favorite/></PrivateRoute>} />
           <Route path="/singlebook" element={
          <PrivateRoute><SingleBook/></PrivateRoute>} />
          <Route path="/sub" element={
          <PrivateRoute><SubscriptionPlan/></PrivateRoute>} />
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
