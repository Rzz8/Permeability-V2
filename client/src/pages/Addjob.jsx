import React, { useState } from "react";
import Axios from "axios";
import { Form, redirect, useActionData } from "react-router-dom";
import { FormRow, FormRowSelect, AddJobSubmitBtn } from "../components";
import { extractNumbers } from "../utils/extractNumbers";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import SubmitBtn from "../components/SubmitBtn";
import { FORMATION_GROUP } from "../utils/constants";

// Exclude "all" in the formation group
const filteredFormationGroup = FORMATION_GROUP.filter(
  (item) => item.GROUP !== "All"
);

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await Axios.post(
      "https://perm-backend.herokuapp.com/predict",
      data
    );
    const perm = response.data.prediction;
    const permvalue = extractNumbers(perm);
    const PERMNUMBER = String(permvalue);
    data.PERM = PERMNUMBER;
    await customFetch.post("/jobs", data);
    return PERMNUMBER;
  } catch (error) {
    return error;
  }
};

const AddJob = () => {
  const PERMNUMBER = useActionData();

  //default values are from an example
  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow
            type="number"
            name="BD"
            labelText="Bit depth (m): "
            defaultValue="404.97"
          />

          <FormRow
            type="number"
            name="HL"
            labelText="Hook load (klbs): "
            defaultValue="10.8"
          />

          <FormRow
            type="number"
            name="ROP"
            labelText="Rate of penetration (ROP) (m/h): "
            defaultValue="82.78"
          />

          <FormRow
            type="number"
            name="IMV"
            labelText="Incremental mud volume (bbl): "
            defaultValue="0.54"
          />

          <FormRow
            type="number"
            name="DP"
            labelText="Differential pressure (psi): "
            defaultValue="355.7"
          />

          <FormRow
            type="number"
            name="DS"
            labelText="Density (g/cc): "
            defaultValue="1.249"
          />

          <FormRow
            type="number"
            name="GR"
            labelText="Gamma ray (API): "
            defaultValue="18.45"
          />

          <FormRow
            type="number"
            name="RSS"
            labelText="Resistivity (shallow) (OHMM): "
            defaultValue="191.36"
          />

          <FormRow
            type="number"
            name="RSD"
            labelText="Resistivity (deep) (OHMM): "
            defaultValue="311.59"
          />

          <FormRow
            type="number"
            name="RSM"
            labelText="Resistivity (micro) (OHMM): "
            defaultValue="124.42"
          />

          <FormRow
            type="number"
            name="PG"
            labelText="Pason gas depth-corrected (%): "
            defaultValue="34.98"
          />

          <FormRow
            type="number"
            name="FL"
            labelText="Fluid loss (bbl): "
            defaultValue="0.48"
          />

          <FormRow
            type="number"
            name="FLR"
            labelText="Fluid loss rate (bbl/min): "
            defaultValue="0.048"
          />

          <FormRowSelect
            labelText="Formation group"
            name="FG"
            list={filteredFormationGroup}
          />

          <AddJobSubmitBtn formBtn />
        </div>

        <div className="result">
          Result: {PERMNUMBER && `The permeability is ${PERMNUMBER} md`}
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
