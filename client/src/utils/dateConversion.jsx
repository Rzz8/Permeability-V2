import React from "react";

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  timeZoneName: "short",
  hour12: false,
};

const dateConversion = (date) => {
  const originalDate = new Date(date);

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    originalDate
  );

  return formattedDate;
};

export default dateConversion;
