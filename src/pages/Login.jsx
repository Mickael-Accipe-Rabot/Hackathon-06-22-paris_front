import React from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../contexts/UserProvider";
import logowhite from "../assets/images/logowhite.svg";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { loginSchema } from "../schemas/login-schema";

const Login = () => {
  const [error, setError] = useState(null);
  const navigator = useNavigate();
  const { setUser } = useUser();

  // Création de la variable initialValues
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,

    // lors de la soumission du formulaire, on passe les values en paramètre
    onSubmit: (values) => {
      axios
        .post(`${process.env.REACT_APP_API_URL}/employees/login`, values)
        .then(({ data: { credentials } }) => {
          setUser({
            token: credentials,
          });
          navigator("/home");
        })
        .catch(
          ({
            response: {
              data: { message },
            },
          }) => {
            setError(message);
          }
        );
    },
  });

  // Toggle Showpassword
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div className="page-container-login">
      <div className="container-login">
        <img src={logowhite} className="logo" />
        <h4 className="baseline">Plongez dans l'univers de notre ESN</h4>
        <div className="container-logo">
          <div className="register">
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="form-register"
            >
              <label htmlFor="email">
                <input
                  required
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  style={{ width: "100%", marginTop: "0px" }}
                  className={errors.email && touched.email ? "input-error" : ""}
                  error={errors.email && touched.email ? "input-error" : ""}
                />
              </label>
              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}

              <div className="input-password">
                <label htmlFor="password">
                  <input
                    required
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={values.password}
                    onBlur={handleBlur}
                    type={passwordShown ? "text" : "password"}
                    style={{
                      width: "100%",
                      marginTop: "20px",
                      position: "relative",
                    }}
                    className={
                      errors.password && touched.password ? "input-error" : ""
                    }
                    error={
                      errors.password && touched.password ? "input-error" : ""
                    }
                  />
                </label>
                <i className="input-icons" onClick={togglePassword}>
                  {passwordShown ? <FaEyeSlash /> : <FaEye />}
                </i>
                {errors.password && touched.password && (
                  <p className="error">{errors.password}</p>
                )}
              </div>

              <button type="submit" className="button-register">
                SUBMIT
              </button>
              <p className="error">{error}</p>
              <Link
                to={{ pathname: `/#` }}
                style={{ textDecoration: "none" }}
              >
                <p className="forgot-password">Forgot password ?</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
