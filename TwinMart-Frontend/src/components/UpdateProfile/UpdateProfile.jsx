import React from "react";
import { Formik, Form, Field } from "formik";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../../api/axios";
import { updateProfileSchema } from "../../validations/validation";

const updateProfileApi = (data) =>
  api.put("/user/profile", data);

const UpdateProfile = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: updateProfileApi,
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries(["userProfile"]);
      navigate("/profile");
    },
    onError: () => {
      toast.error("Failed to update profile");
    },
  });

  return (
    <div className="w-full min-h-screen flex justify-center py-10 px-4">
      <div className="bg-white w-full max-w-2xl shadow-xl rounded-2xl p-8 border">

        <h2 className="text-2xl font-bold text-center mb-6">
          Update Profile
        </h2>

        <Formik
           
          initialValues={{
            name: "",
            phone: "",
            location: "",
          }}
           validationSchema={updateProfileSchema}
          onSubmit={(values) => mutate(values)}
        >
          <Form className="space-y-5">

            <Field
              name="name"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg"
            />

            <Field
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 border rounded-lg"
            />

            <Field
              name="location"
              placeholder="Location"
              className="w-full p-3 border rounded-lg"
            />

            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isLoading}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600"
              >
                {isLoading ? "Updating..." : "Update"}
              </button>
            </div>

          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default UpdateProfile;
