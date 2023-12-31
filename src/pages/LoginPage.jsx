import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import loginAnim from "../assets/anims/loginAnim.json";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./styles/LoginPage.module.css";
import { ArrowBack } from "@mui/icons-material";
import { useUser } from "../context/userContext";
import secureLocalStorage from "react-secure-storage";

const LoginPage = () => {
  const navigate = useNavigate();
  const userProvider = useUser();

  const validationSchema = Yup.object().shape({
    userInput: Yup.string().required("Username or email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      userInput: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {
    axios
      .post("https://jobnest-backend.vercel.app/login", values)
      .then((result) => {
        const loginData = result.data;
        if (loginData.status === true) {
          delete loginData.data.password;
          secureLocalStorage.setItem(
            "userData",
            JSON.stringify(loginData.data)
          );
          userProvider.setUserData(loginData.data);
          navigate("/");
        } else {
          alert(loginData.message);
        }
      })
      .catch((err) => {
        alert(err);
      });
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
      <div>
        <div className={styles.box}>
          <ArrowBack
            className={styles.backIcon}
            onClick={() => navigate("/")}
            fontSize="large"
          />

          <div className={styles.loginBox}>
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
                  padding: "10% 5%",
                }}
              ></img>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "15% 10%",
                }}
              >
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="userInput" style={{ color: "#6CE4F3" }}>
                      Email / Username
                    </label>
                    <input
                      type="text"
                      id="userInput"
                      placeholder="Enter username or email"
                      className="form-control"
                      style={{
                        borderRadius: "8px",
                        border: "1px solid #ccdce1",
                      }}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.userInput}
                    />
                    {formik.touched.userInput && formik.errors.userInput && (
                      <div style={{ color: "red" }}>
                        {formik.errors.userInput}
                      </div>
                    )}
                  </div>

                  <div className="form-group mt-3">
                    <label htmlFor="password" style={{ color: "#6CE4F3" }}>
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
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
                    {formik.touched.password && formik.errors.password && (
                      <div style={{ color: "red" }}>
                        {formik.errors.password}
                      </div>
                    )}
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
                    Login
                  </button>
                </form>

                <p style={{ color: "#6CE4F3", marginTop: "2vh" }}>
                  New to JobNest?
                  <a
                    href=""
                    style={{ marginLeft: "5px", color: "#6CE4F3" }}
                    onClick={() => navigate("/register")}
                  >
                    Register Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
