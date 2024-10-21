import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CustmerNavbar from "../Component/CustmerNavbar";
import data from "../Data/data";
import "../Pages/BookList.css";
import { useAuth } from "../Store/AuthContext";
import "../index.css";

/**
 * The login component renders a login form that allows users to login to their accounts.
 * It uses the useAuth hook from the AuthContext to get the login function.
 * The component also uses the useNavigate hook from react-router-dom to redirect the user to the home page after a successful login.
 * The form data is validated using the useState hook to store the email and password values.
 * If the user enters invalid credentials, an alert is displayed.
 * If the user enters valid credentials, the login function is called with the user object from the data.json file.
 * The component also renders a link to the forgot password page and a link to the sign up page.
 */
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = data.users;

    const user = users.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      login(user);
      navigate("/"); // Redirect to home page after login
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <CustmerNavbar darkTheme={true} />
      <Container fluid className="user1 py-4" style={{ minHeight: "calc(100vh - 144px)" }}>
        <Row className="d-flex justify-content-center align-items-center py-2">
          <Col className="d-flex justify-content-center align-items-center">
            <form className="form" onSubmit={handleSubmit}>
              <p className="title">Login</p>
              <p className="message">
                Welcome back! Please login to your account.
              </p>

              <label>
                <input
                  required
                  placeholder=""
                  type="email"
                  className="input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  required
                  placeholder=""
                  type="password"
                  className="input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span>Password</span>
              </label>

              <Button variant="link" as={Link} to="/forgot-password">
                Forgot password?
              </Button>

              <Button variant="orange" type="submit">
                Login
              </Button>

              <p className="signin">
                Don't have an account? <Link to="/register">Sign up</Link>
              </p>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
