import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";


import api from "../../api/axios";
import { useAuth } from "../../context/AuthContext";
import { loginSchema } from "../../validations/validation";



const loginApi = (data) => api.post("/auth/login", data);


function Login() {
  const navigate = useNavigate();
  const { loginUser } = useAuth();

  const { mutate, isLoading } = useMutation({
    mutationFn: loginApi,
    onSuccess: (res) => {
      loginUser(res.data.data);
      toast.success("Login successful");
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Invalid credentials");
    },
  });

  return (
    <div>
      <div className="login-body">
        <div className="symbol inset-shadow-sm inset-shadow-black">
          <Link to="/">
            <i className="fa-solid fa-circle-xmark"></i>
          </Link>
        </div>

        <div className="logo font-semibold">
          <h1>Twin</h1>
          <h1>Mart</h1>
        </div>

        <div className="mr-7">
          <button className="h-10 bg-orange-600 rounded-3xl text-white w-[100px] font-semibold relative left-8 shadow shadow-black/40">
            Login
          </button>

          <Link to="/signup">
            <button className="h-10 bg-orange-400 rounded-3xl text-white w-[120px] font-semibold text-right px-3 cursor-pointer inset-shadow-sm inset-shadow-black">
              Signup
            </button>
          </Link>
        </div>

        {/* ---------------- FORM ---------------- */}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values) => mutate(values)}
        >
          <Form>
            <table className="details flex flex-col items-center justify-center gap-6">
              <tr>
                <td>
                  <label>Enter your Mail ID: </label>
                </td>
                <td>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter your mail id"
                    className="ml-2 p-2 rounded-md w-full bg-blue-100/60 inset-shadow-sm inset-shadow-black/30"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Enter the Password: </label>
                </td>
                <td>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="ml-2 p-2 rounded-md w-full bg-blue-100/60 inset-shadow-sm inset-shadow-black/30"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </td>
              </tr>
            </table>

            <div className="flex flex-col justify-center items-center gap-3">
              <button
                type="submit"
                disabled={isLoading}
                className="bg-orange-400 p-3 rounded-3xl text-xl w-[100px] text-white font-bold hover:bg-orange-600 cursor-pointer shadow-md"
              >
                {isLoading ? "Logging..." : "Login"}
              </button>
              <p>
                <a href="password.html">Forgot password?</a>
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
