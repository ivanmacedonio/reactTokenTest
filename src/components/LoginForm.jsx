import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./styleLogin.css";
import { postUser, getUser } from "../api/fetch";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const res = await postUser(data);
    if (res.status === 201) {
      const token = res.data.access_token;
      const token_refresh = res.data.refresh_token;
      const user = await getUser(token);
      console.log(user);
      if (user.status === 200) {
        navigate("/lobby");
      } else {
        alert("eror");
      }
    } else {
      alert("Error");
    }
  };

  return (
    <>
      <form className="formcontainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          {" "}
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            {...register("email")}
          />
        </div>
        <div className="container">
          {" "}
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            {...register("password")}
          />
        </div>
        <div className="container">
          <Button variant="contained" id="buttonadd" type="submit">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};
