import React from 'react'
import './Nav.css'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";

function Nav() {
  const MyButton = styled(Button)({
    background: "black",
    color: "#0DFDD7",
    fontWeight: 'lighter',
  });
  return (
    <div className="navbar">
      <Stack direction="column" spacing={1} sx={{ width: "140px" }}>
        <MyButton href="#about">About Me </MyButton>
        <MyButton href='/resume'>Resume</MyButton>
        <MyButton href="skills">Skills</MyButton>
        <MyButton href="#proj-container">Projects</MyButton>
        <MyButton href="#contactContainer">Contact Me</MyButton>
      </Stack>

    </div>
  );
}

export default Nav