import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import CustmerNavbar from "../Component/CustmerNavbar";
import "../Pages/BookList.css";
import data from "../Data/data";

  const Signup = () => {
    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setError("");
  
      // Basic validation
      if (
        !formData.firstname ||
        !formData.lastname ||
        !formData.email ||
        !formData.password
      ) {
        setError("All fields are required");
        return;
      }
  
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
  
      // Add user to data
  
      
      const newUser = {
        id: uuidv4(),
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
      };
    
  
      data.users.push( newUser );
      // Redirect to login page after successful signup
      toast.success("Signup successful!");
      navigate("/login");
    };
  

  return (
    <div>
      <CustmerNavbar darkTheme={true} />
      <Container fluid className="user1">
        <Row className="h-100 py-5">
          <Col className="d-flex justify-content-center align-items-center">
            <form className="form" onSubmit={handleSubmit}>
              <p className="title">Register </p>
              <p className="message">
                Signup now and get full access to our app.
              </p>
              <div className="flex">
                <label>
                  <input
                    required
                    placeholder=""
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
                  className="input"
                />
                <span>Confirm password</span>
              </label>

              {error && <p className="text-danger fs-6">{error}</p>}

              <Button variant="orange" type="submit">
                Submit
              </Button>

              <Button
                variant="link"
                type="button"
                as={Link}
                to="/login"
                style={{ color: "black" }}
              >
                Already have an account?{" "}
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Signup;
