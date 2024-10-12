import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import sicon from "./sicon.png"
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logged Out Successfully ");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">News Daily</NavLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <div className="collapse navbar-collapse df" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto df mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/technology">Technology</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/business">Business</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/health">Health</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/science">Science</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sports">Sports</NavLink>
          </li>
        </ul>
        
        <div className="df">
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search News" aria-label="Search" />
          <button onClick={(e) => {
            e.preventDefault();
          }} className="btn btn-outline-light" type="submit">
            <img src={sicon} alt="Search" className="search-icon" />
          </button>
        </form>
        <div>
{loggedIn?<>        
        <NavLink style={{border:"solid white 1px",color:"white"}} onClick={handleLogout}  to="/" className="btn btn-outline-ligth ms-2 hover0 login-btn">
          Log Out
        </NavLink></>
        :
        <>
          <NavLink style={{
          border:"solid white 1px",
          color:"white"
        }}  to="/" className="btn ms-2 hover0 login-btn">
          Log In
        </NavLink></>}


        </div>
        </div>



      </div>
    </div>
  </nav>

  </>
  );
};

export default Navbar;