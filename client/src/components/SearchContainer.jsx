import React from "react";
import { FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FORMATION_GROUP, JOB_SORT_BY } from "../utils/constants";
import { Form, useSubmit, Link } from "react-router-dom";

const SearchContainer = () => {
  const submit = useSubmit();

  return (
    <Wrapper>
      <Form>
        <h5 className="form-title">Search Jobs</h5>
        <div className="form-center">
          <FormRowSelect
            labelText="Formation group"
            name="FG"
            list={[...Object.values(FORMATION_GROUP)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <FormRowSelect
            labelText="sort"
            name="sort"
            defaultValue="newest"
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />

          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
