import React, { createContext, useContext } from "react";
import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import { Sidebar, Navbar } from "../components";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/Dashboard";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const response = await customFetch("/users/current-user");
    return response.data;
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { user } = useLoaderData();

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("You are now logged out.")
  };

  return (
    <DashboardContext.Provider value={{ user, logoutUser }}>
      <Wrapper>
        <main className="dashboard">
          <div>
            <Navbar />
            <Sidebar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);

export default DashboardLayout;
