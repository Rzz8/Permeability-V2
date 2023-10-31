import React, { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import { JobsContainer, SearchContainer } from "../components";
import { useLoaderData } from "react-router-dom";

const AllJobsContext = createContext();

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch("/jobs");
    return { data };
  } catch (error) {
    return error;
  }
};

const AllJobs = () => {
  const { data } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs;
