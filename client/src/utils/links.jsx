import React from "react";
import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const links = [
  { text: "add job", path: ".", icon: <FaWpforms /> },
  { text: "job history", path: "all-jobs", icon: <MdQueryStats /> },
  { text: "profile", path: "profile", icon: <ImProfile /> },
  // { text: "stats", path: "stats", icon: <IoBarChartSharp /> },
];

export default links