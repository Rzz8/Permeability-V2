import React from "react";
import { FORMATION_GROUP } from "./constants";

const getFormationGroupName = (value) => {
  const formation = FORMATION_GROUP.find((f) => f.VALUE === value);

  return formation.GROUP;
};

export default getFormationGroupName;
