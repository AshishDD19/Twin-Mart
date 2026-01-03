import * as Yup from "yup";

/* ---------------- VALIDATION ---------------- */
export const signupSchema = Yup.object({
  name: Yup.string().min(3, "Min 3 characters").required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  dob: Yup.date().required("Date of birth is required"),
  location: Yup.string().required("Location is required"),
  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Password is required"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Confirm your password"),
});

export const loginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const updateProfileSchema = Yup.object({
  name: Yup.string().min(3, "Min 3 characters").required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone number is required"),
  location: Yup.string().required("Location is required"),

});