import React, { createContext, useContext } from "react";
import customFetch from "../utils/customFetch";
import { JobsContainer, SearchContainer } from "../components";
import { useLoaderData } from "react-router-dom";

const AllJobsContext = createContext();

export const loader = async ({ request }) => {
  console.log(request.url);
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  console.log(params);
  try {
    const { data } = await customFetch("/jobs", { params });
    console.log(data);
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
