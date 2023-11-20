import React, { useState } from "react";
import loginAnim from "../assets/anims/loginAnim.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./styles/SignupPage.module.css";
import { ArrowBack } from "@mui/icons-material";
import { useUser } from "../context/userContext";
import secureLocalStorage from "react-secure-storage";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupPage = () => {
  const navigate = useNavigate();
  const userProvider = useUser();
  const [isEmployer, setIsEmployer] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().min(3, "Name must be at least 3 characters").required("Name is required"),
    username: Yup.string().min(3, "Username must be at least 3 characters").required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      isEmployer: false,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const isUsernameAvailable = await checkAvailability("username", values.username);
      const isEmailAvailable = await checkAvailability("email", values.email);

      if (isUsernameAvailable && isEmailAvailable && values.password === values.confirmPassword) {
        // Proceed with registration logic
        axios
          .post("https://jobnest-backend.vercel.app/register", {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
            isEmployer: values.isEmployer,
          })
          .then((result) => {
            delete result.data.password;
            secureLocalStorage.setItem("userData", JSON.stringify(result.data));
            userProvider.setUserData(result.data);
            navigate(values.isEmployer ? "/fill-employer-details" : "/fill-employee-details", {
              state: { isUserDetails: true },
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("Username or Email already taken, or Passwords mismatched");
      }
    },
  });

  const checkAvailability = async (type, value) => {
    try {
      const response = await axios.post(`https://jobnest-backend.vercel.app/check-${type}`, {
        [type]: value,
      });
      return response.data.available;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  return (
    <div
      style={{
        backgroundImage: 'url("/background1.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        height: "100vh",
      }}
    >
      <div className={styles.box}>
        <ArrowBack
          className={styles.backIcon}
          onClick={() => navigate("/")}
          fontSize="large"
        />

        <div className={styles.registerBox}>
          <div className={styles.lottieDiv}>
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: loginAnim,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              isClickToPauseDisabled={true}
              style={{
                padding: "0px",
                margin: "0px",
                height: "40vw",
                width: "40vw",
                cursor: "default",
              }}
            />
          </div>
          <div className={styles.formBox}>
            <img
              src="/LOGO_transparent.png"
              alt="LOGO-transparent"
              border="0"
              width={"100%"}
              style={{
                borderTopRightRadius: "20px",
                marginTop: "30px",
                padding: "0 10%",
              }}
            ></img>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0 10%",
                overflow: "auto",
              }}
            >
              <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" style={{ color: "#6CE4F3" }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter the name"
                    className="form-control"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #ccdce1",
                    }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                  />
                  {formik.touched.name && formik.errors.name ? (
                    <div style={{ color: "red" }}>{formik.errors.name}</div>
                  ) : null}
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="username" style={{ color: "#6CE4F3" }}>
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    placeholder="Enter the Username"
                    className="form-control"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #ccdce1",
                      textAlign: "left",
                    }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div style={{ color: "red" }}>{formik.errors.username}</div>
                  ) : null}
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="email" style={{ color: "#6CE4F3" }}>
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter the email"
                    className="form-control"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #ccdce1",
                      textAlign: "left",
                    }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div style={{ color: "red" }}>{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="password" style={{ color: "#6CE4F3" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter the Password"
                    className="form-control"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #ccdce1",
                      textAlign: "left",
                    }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div style={{ color: "red" }}>{formik.errors.password}</div>
                  ) : null}
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="confirmpassword" style={{ color: "#6CE4F3" }}>
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter the Password again"
                    className="form-control"
                    style={{
                      borderRadius: "8px",
                      border: "1px solid #ccdce1",
                      textAlign: "left",
                    }}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.confirmPassword}
                  />
                  {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                    <div style={{ color: "red" }}>{formik.errors.confirmPassword}</div>
                  ) : null}
                </div>
                {/* Hello people */}
                <div className="form-group mt-3">
                  <input
                    type="checkbox"
                    name="isEmployer"
                    checked={formik.values.isEmployer}
                    onChange={formik.handleChange}
                    className={styles.checkbox}
                  />
                  <label
                    htmlFor="isEmployer"
                    style={{ color: "#6CE4F3", marginLeft: "10px" }}
                  >
                    I am an Employer
                  </label>
                </div>

                <button
                  className="btn mt-4"
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#6CE4F3",
                    color: "#232423",
                  }}
                  type="submit"
                >
                  Register
                </button>

                <p style={{ color: "#6CE4F3", marginTop: "2vh" }}>
                  Already have an account?
                  <a
                    href=""
                    style={{ marginLeft: "5px", color: "#6CE4F3" }}
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </a>
                </p>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
