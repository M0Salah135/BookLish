import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";
import styled from "styled-components";
import { Row } from "react-bootstrap";
import loginImg from "../Assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import CustmerNavbar from "../Component/CustmerNavbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fetch user data from JSON server
    fetch("http://localhost:5000/users")
    .then((response) => response.json())
    .then((users) => {
      // Find the user based on email and password
      const user = users.find(
        (user) => user.email === email && user.password === password
      );
      alert(email);

      if (user) {
        alert(`Welcome back, ${user.firstname}!`);
        // Redirect to dashboard or another page after successful login
        navigate("/");
      } else {
        alert("Invalid email or password. Please try again.");
      }
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
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
              <form className="form" onSubmit={handleLogin}>
                <p className="title">Login</p>
                <p className="message">Welcome back! Please login to your account.</p>

                <label>
                  <input required placeholder="" type="email" className="input"  value={email} onChange={(e) => setEmail(e.target.value)} />
                  <span>Email</span>
                </label>

                <label>
                  <input required placeholder="" type="password" className="input"  value={password}  onChange={(e) => setPassword(e.target.value)}/>
                  <span>Password</span>
                </label>

                <Button variant="link" as={Link} to="/forgot-password">
                  Forgot password?
                </Button>

                <button className="submit">Login</button>

                <p className="signin">
                  Don't have an account?{" "}
                  <Link to="/register">Sign up</Link>
                </p>
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
    transition: 0.3s ease;
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

export default Login;