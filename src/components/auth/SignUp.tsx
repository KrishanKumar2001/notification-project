// Signup.tsx
import React, { useContext, useState } from "react";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { PayloadProps } from "../types/PayloadType";
import { UserContextApi } from "../../context/AuthContext";
import Carousal from "../carousal/Carousal";

type FormSubmitEvent = React.FormEvent<HTMLFormElement>;



const Signup = () => {
  const contextValue=useContext(UserContextApi)
  const signup=contextValue?.signup
  
  const [formData, setFormData] = useState<PayloadProps>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    password: "",
    domain: "",
    imageUrl: "",
    like:false,
    comment:[]
  });

  const handleSubmit = (event: FormSubmitEvent) => {
    event.preventDefault();
    if(signup){
      signup(formData)
    }
    
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section className="main-container">
    <article className="inner-container">
      <div className="carousal-container">
        <Carousal />
      </div>
      <div className="signup-container">
    <div className="signup-main-container">
      <div className="form-container">
        <h2 className="signup">SignUp</h2>
        <form onSubmit={handleSubmit} className="form-inner-container">
          <div className="inline-container">
            <div>
              <TextField
                id="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                label="First Name"
              />
            </div>
            <div>
              <TextField
                id="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                label="Last Name"
              />
            </div>
          </div>
          <div className="inline-container">
            <div>
              <TextField
                type="date"
                id="text"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                required
                label="DOB"
              />
            </div>
            <div>
              <TextField
                id="text"
                name="domain"
                value={formData.domain}
                onChange={handleInputChange}
                label="Domain"
                required
              />
            </div>
          </div>
          <div>
            <TextField
              id="text-line"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              label="Email"
            />
          </div>
          <div>
            <TextField
              id="text-line"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              label="Password"
            />
          </div>

          <div>
            <TextField
              id="text-line"
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              required
              label="Image url"
            />
          </div>
          <div>
            <Button
              style={{ width: "100%", background: "#434db8" }}
              variant="contained"
              type="submit" // Add type submit to trigger form submission
            >
              Signup
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div>
      </article>
    </section>
  );
};

export default Signup;
