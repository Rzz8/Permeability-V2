import React from "react";
import { useDashboardContext } from "./DashboardLayout";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, redirect } from "react-router-dom";
import FormRow from "../components/FormRow";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { SubmitBtn } from "../components";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    await customFetch.patch("/users/update-user", data);
    toast.success("Profile update successfully!");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return null;
  }
};

const Profile = () => {
  const { user } = useDashboardContext();
  const { name, lastName, email, location } = user;

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">profile</h4>
        <div className="form-center">
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            name="lastName"
            labelText="last name"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
