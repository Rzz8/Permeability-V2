import React from "react";
import { Form } from "react-router-dom";

const Job = ({
  _id,
  BD,
  HL,
  ROP,
  IMV,
  DP,
  DS,
  GR,
  RSS,
  RSD,
  RSM,
  PG,
  FL,
  FLR,
  FG,
  PERM,
}) => {
  return (
    <div>
      Bit depth: {BD} <br></br>
      Hook load: {HL} <br></br>
      Rate of penetration (ROP) (m/h): {ROP} <br></br>
      Incremental mud volume: {IMV} <br></br>
      Differential pressure: {DP} <br></br>
      Density: {DS}
      <br></br>
      Gamma ray: {GR} <br></br>
      Resistivity (shallow) (OHMM): {RSS} <br></br>
      Resistivity (deep) (OHMM): {RSD} <br></br>
      Resistivity (micro) (OHMM): {RSM} <br></br>
      Pason gas depth-corrected (%): {PG} <br></br>
      Fluid loss (bbl): {FL} <br></br>
      Fluid loss rate (bbl/min):{FLR} <br></br>
      Formation group: {FG} <br></br>
      Permeability (mD): {PERM} <br></br>
      <Form method="post" action={`../delete-job/${_id}`}>
        <button type="submit" className="btn delete-btn">
          Delete
        </button>
      </Form>
    </div>
  );
};

export default Job;
