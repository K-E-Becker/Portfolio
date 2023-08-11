import React, { useState, useRef } from "react";

import { TextField, Box, Button } from "@mui/material";

import emailjs from "@emailjs/browser";

function Contact() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const form = useRef();

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_94cqixi",
        "template_p557ddp",
        form.current,
        "C6M4dy_EqdKcAmUtZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          handleReset();
          alert(
            "Thank you for your interest!  I will get back to you as soon as possible!"
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <form ref={form} onSubmit={handleSubmit}>
        <Box
          component="form1"
          sx={{
            display: "flex",
            alignItems: "center",
            "& .MuiTextField-root": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              label="Name"
              name="from_name"
              id="outlined-size-small"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              size="small"
            />
          </div>
          <div>
            <TextField
              label="Email"
              name="user_email"
              id="outlined-size-small"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              size="small"
            />
          </div>
        </Box>
        <Box
          component="form2"
          sx={{
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            "& .MuiTextField-root": { m: 1, width: "92ch" },
            "& .MuiButton-root": { mt: 2, ml: 1, mr: 5 },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="Your Message"
              label="Your Message"
              name="message"
              multiline
              rows={10}
              value={Message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <Button variant="outlined" onClick={handleSubmit}>
              Submit
            </Button>

            <Button variant="outlined" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </Box>
      </form>
    </div>
  );
}

export default Contact;
