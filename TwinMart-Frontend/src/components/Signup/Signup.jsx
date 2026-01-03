import React from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";


import api from "../../api/axios";
import { signupSchema } from "../../validations/validation";



/* ---------------- API ---------------- */
const signupApi = (data) => api.post("/auth/register", data);

function Signup() {
    const navigate = useNavigate();

    const { mutate, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: () => {
            toast.success("Signup successful! Please login");
            navigate("/login");
        },
        onError: (err) => {
            toast.error(err.response?.data?.message || "Signup failed");
        },
    });

    return (
        <div>
            <div className="signup-body">
                <div className="symbol inset-shadow-sm inset-shadow-black">
                    <Link to="/">
                        <i className="fa-solid fa-circle-xmark"></i>
                    </Link>
                </div>

                <div className="logo font-semibold mb-5">
                    <h1 id="txt1">Twin</h1>
                    <h1 id="txt2">Mart</h1>
                </div>

                <div className="flex justify-between items-center ml-10 mb-2">
                    <Link to="/login">
                        <button className="h-10 bg-orange-400 rounded-3xl text-white w-[120px] font-semibold text-left px-5 cursor-pointer inset-shadow-sm inset-shadow-black">
                            Login
                        </button>
                    </Link>

                    <button className="h-10 bg-orange-600 rounded-3xl text-white w-[100px] font-semibold relative right-10 shadow shadow-black/40">
                        Signup
                    </button>
                </div>

                {/* ---------------- FORM ---------------- */}
                <Formik
                    initialValues={{
                        name: "",
                        phone: "",
                        email: "",
                        dob: "",
                        location: "",
                        password: "",
                        confirm: "",
                    }}
                    validationSchema={signupSchema}
                    onSubmit={(values) => {
                        const { confirm, ...payload } = values;
                        mutate(payload);
                    }}

                >
                    <Form>
                        <table className="details">
                            <tr>
                                <td><label>Enter your Name: </label></td>
                                <td>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        className="ml-2 p-2 rounded-md w-full bg-blue-100/60 mb-3 inset-shadow-sm inset-shadow-black/30"
                                    />
                                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                                </td>
                            </tr>

                            <tr>
                                <td><label>Enter your Phone number: </label></td>
                                <td>
                                    <Field
                                        type="tel"
                                        name="phone"
                                        placeholder="Enter your phone number"
                                        className="ml-2 p-2 rounded-md w-full bg-blue-100/60 mb-3 inset-shadow-sm inset-shadow-black/30"
                                    />
                                    <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                </td>
                            </tr>

                            <tr>
                                <td><label>Enter your Mail ID: </label></td>
                                <td>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter your mail id"
                                        className="ml-2 p-2 rounded-md w-full bg-blue-100/60 mb-3 inset-shadow-sm inset-shadow-black/30"
                                    />
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                </td>
                            </tr>

                            <tr>
                                <td><label>Enter your Date Of Birth:</label></td>
                                <td>
                                    <Field
                                        type="date"
                                        name="dob"
                                        className="ml-2 p-2 rounded-md w-full bg-blue-100/60 mb-3 text-gray-500 inset-shadow-sm inset-shadow-black/30"
                                    />
                                    <ErrorMessage name="dob" component="div" className="text-red-500 text-sm" />
                                </td>
                            </tr>

                            <tr>
                                <td><label>Enter your Location:</label></td>
                                <td>
                                    <Field
                                        type="text"
                                        name="location"
                                        placeholder="Enter your location"
                                        className="ml-2 p-2 rounded-md w-full bg-blue-100/60 mb-3 inset-shadow-sm inset-shadow-black/30"
                                    />
                                    <ErrorMessage name="location" component="div" className="text-red-500 text-sm" />
                                </td>
                            </tr>

                            <tr>
                                <td><label>Enter the Password: </label></td>
                                <td>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        className="ml-2 p-2 rounded-md w-full bg-blue-100/60 mb-3 inset-shadow-sm inset-shadow-black/30"
                                    />
                                    <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                                </td>
                            </tr>

                            <tr>
                                <td><label>Confirm your Password: </label></td>
                                <td>
                                    <Field
                                        type="password"
                                        name="confirm"
                                        placeholder="Confirm your password"
                                        className="ml-2 p-2 rounded-md w-full bg-blue-100/60 mb-3 inset-shadow-sm inset-shadow-black/30"
                                    />
                                    <ErrorMessage name="confirm" component="div" className="text-red-500 text-sm" />
                                </td>
                            </tr>
                        </table>

                        <div className="txt">
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="bg-orange-400 p-3 rounded-3xl text-xl text-white font-bold hover:bg-orange-600 cursor-pointer shadow-md"
                            >
                                {isLoading ? "Signing Up..." : "Sign Up"}
                            </button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Signup;
