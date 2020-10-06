import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { setAuthState } from "../store/actions";
import { connect } from "react-redux";

const dbEmails = ["bidonhome@gmail.com"];

function Login({ setAuthState}) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dbEmails.includes(email)) {
      setAuthState({ email });
    } else {
      alert("User not exist");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fff",
          borderRadius: 4,
          padding: 20,
          boxShadow: "10px 10px 6px -9px rgba(0,0,0,0.75)",
          border: "1px solid",
        }}
      >
        <h1>Login</h1>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 10 }}
          label="Email"
          required
        />
        <Button color="primary" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default connect(null, { setAuthState })(Login)
