
import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import loginImg from "../Assets/login.jpg"
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import CustmerNavbar from "../Component/CustmerNavbar";
import InnerCover from "../Component/InnerCover";




const Register = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((users) => {
        // Find the user based on email and password
        const user = users.find(
          (user) => user.email === formData.email
        );

        if (user) {
          alert("this email is arleady exist please try another email");
          return;

        }
        else {
          fetch("http://localhost:5000/users", {
            method: "POST", // Using the POST method to push data
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstname: formData.firstname,
              lastname: formData.lastname,
              email: formData.email,
              password: formData.password,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              alert("Registration successful!");
              navigate("/login"); // Redirect to login page

            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;

    }

    // Push user data (email and password) to the server

  };


  return (
    <div style={{backgroundColor:"rgb(119 150 162)"}}>
      <CustmerNavbar />

      <Container fluid style={{ height: "100vh" }}>
        <Row>
          <Col>
            <img
              src={loginImg}
              alt="login"
              style={{ width: "100vh", height: "100vh" }}
            />
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <StyledWrapper>
              <form className="form" onSubmit={handleSubmit}>
                <p className="title">Register </p>
                <p className="message">Signup now and get full access to our app.</p>
                <div className="flex">
                  <label>
                    <input
                      required
                      placeholder=""
                      type="text"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleInputChange}
                      className="input"
                    />
                    <span>Firstname</span>
                  </label>

                  <label>
                    <input
                      required
                      placeholder=""
                      type="text"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleInputChange}
                      className="input"
                    />
                    <span>Lastname</span>
                  </label>
                </div>

                <label>
                  <input
                    required
                    placeholder=""
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input"
                  />
                  <span>Email</span>
                </label>

                <label>
                  <input
                    required
                    placeholder=""
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="input"
                  />
                  <span>Password</span>
                </label>

                <label>
                  <input
                    required
                    placeholder=""
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="input"
                  />
                  <span>Confirm password</span>
                </label>

                <button className="submit" type="submit">
                  Submit
                </button>

                <Button variant="link" type="button" as={Link} to="/login">
                  Already have an account?{" "}
                </Button>
              </form>
            </StyledWrapper>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const StyledWrapper = styled.div`
  .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-width: 350px;
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    position: relative;
  }

  .title {
    font-size: 28px;
    color: royalblue;
    font-weight: 600;
    letter-spacing: -1px;
    position: relative;
    display: flex;
    align-items: center;
    padding-left: 30px;
  }

  .title::before,
  .title::after {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    border-radius: 50%;
    left: 0px;
    background-color: royalblue;
  }

  .title::before {
    width: 18px;
    height: 18px;
    background-color: royalblue;
  }

  .title::after {
    width: 18px;
    height: 18px;
    animation: pulse 1s linear infinite;
  }

  .message,
  .signin {
    color: rgba(88, 87, 87, 0.822);
    font-size: 14px;
  }

  .signin {
    text-align: center;
  }

  .signin a {
    color: royalblue;
  }

  .signin a:hover {
    text-decoration: underline royalblue;
  }

  .flex {
    display: flex;
    width: 100%;
    gap: 6px;
  }

  .form label {
    position: relative;
  }

  .form label .input {
    width: 100%;
    padding: 10px 10px 20px 10px;
    outline: 0;
    border: 1px solid rgba(105, 105, 105, 0.397);
    border-radius: 10px;
  }

  .form label .input + span {
    position: absolute;
    left: 10px;
    top: 15px;
    color: grey;
    font-size: 0.9em;
    cursor: text;
    transition: 0.3s ease;
  }

  .form label .input:placeholder-shown + span {
    top: 15px;
    font-size: 0.9em;
  }

  .form label .input:focus + span,
  .form label .input:valid + span {
    top: 30px;
    font-size: 0.7em;
    font-weight: 600;
  }

  .form label .input:valid + span {
    color: green;
  }

  .submit {
    border: none;
    outline: none;
    background-color: royalblue;
    padding: 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 16px;
    transform: 0.3s ease;
  }

  .submit:hover {
    background-color: rgb(56, 90, 194);
  }

  @keyframes pulse {
    from {
      transform: scale(0.9);
      opacity: 1;
    }

    to {
      transform: scale(1.8);
      opacity: 0;
    }
  }
`;

export default Register;