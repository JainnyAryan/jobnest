import React from "react";
import { useForm, Controller } from "react-hook-form";
import "./Form.css";


const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(data);
  };

  const password = watch("password");

  return (
    <div className="canvas">
      <div className="wrapper">
        <div className="images">
          <img src="/register-img.jpg" alt="" />
        </div>
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-wrapper">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                className="input-fields"
                {...register("name", { required: true })}
                id="name"
              />
              {errors.name && (
                <span className="error">This field is required</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="mobile">Mobile</label>
              <input
                className="input-fields"
                {...register("mobile", { pattern: /^[0-9+-]+$/i })}
                id="mobile"
              />
              {errors.mobile && (
                <span className="error">Invalid mobile number</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                className="input-fields"
                {...register("email", {
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
                id="email"
              />
              {errors.email && (
                <span className="error">Invalid email address</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                className="input-fields"
                {...register("password", {
                  pattern:
                    /^(?=.*[@#$])(?=.*\d.*\d.*\d.*\d)(?=.*[A-Z].*[A-Z])(?=.*[a-z].*[a-z]).{8,}$/,
                })}
                type="password"
                id="password"
              />
              {errors.password && (
                <span className="error">Invalid password</span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="reEnterPassword">Re-enter Password</label>
              <input
                className="input-fields"
                type="password"
                {...register("reEnterPassword", {
                  required: "Please re-enter your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                id="reEnterPassword"
              />
              {errors.reEnterPassword && (
                <span className="error">Passwords do not match</span>
              )}
            </div>
            <div className="form-field" id="checkbox-field">
              <input type="checkbox" {...register("checkboxField")} />
              <label className="labals"> I Agree to the Terms and Conditions </label>
            </div>
            <div id="submit-button">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
