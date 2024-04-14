import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from "flowbite-react";

export default function SignUp() {
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
        <form className="w-full max-w-md">
          <div className="flex flex-col gap-4">
            <Label value="Your username" />
            <TextInput type="text" placeholder="Username" id="username" />
          </div>
          <div className="flex flex-col gap-4">
            <Label value="Your email" />
            <TextInput type="text" placeholder="Email" id="email" />
          </div>
          <div className="flex flex-col gap-4">
            <Label value="Your password" />
            <TextInput type="text" placeholder="Password" id="password" />
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
        <span >Already have an account?</span>
        <Link to="/signin" className="text-indigo-400">
          Sign In
        </Link>
      </div>
    </div>
  );
}
