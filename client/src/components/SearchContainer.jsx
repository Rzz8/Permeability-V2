import React from "react";
import { FormRowSelect} from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FORMATION_GROUP, JOB_SORT_BY } from "../utils/constants";
import { Form, useSubmit, Link } from "react-router-dom";

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form>
        <h5 className="form-title">Search form</h5>
        <div className="form-center">
          <FormRowSelect
            labelText="Formation group"
            name="FG"
            list={FORMATION_GROUP}
          />

          <FormRowSelect
            labelText="sort"
            name="F"
            list={[...Object.values(JOB_SORT_BY)]}
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
