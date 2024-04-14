import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Alert, Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage(["All fields are required"]);
    }
    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success){
        return setErrorMessage(data.message);
      }
    } catch (error) {}
  };
  return (
    <div className="min-h-screen mt-20 text-center">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white text-center"
      >
        <span className="px-2 py-1 bg-indigo-400 text-white rounded-lg">
          Then?
        </span>
      </Link>
      <p className="p-4 font-semibold">
        Welcome to the coolest collaborative story writing community out there,
        SignUp below to get started!
      </p>
      <div className="flex justify-center">
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <Label value="Your username" />
            <TextInput
              type="text"
              placeholder="Username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label value="Your email" />
            <TextInput
              type="email"
              placeholder="Email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Label value="Your password" />
            <TextInput
              type="password"
              placeholder="Password"
              id="password"
              onChange={handleChange}
            />
          </div>
          <br />
          <Button
            color="gray"
            className="w-full hover:bg-blend-color-burn"
            type="submit"
          >
            Sign Up
          </Button>
        </form>
      </div>
      <div className="p-2">
        <span>Already have an account?</span>
        <Link to="/signin" className="text-indigo-400">
          Sign In
        </Link>
      </div>
      {errorMessage && (
        <Alert className="mt-5 " color="white">
          {errorMessage}
        </Alert>
      )}
    </div>
  );
}
