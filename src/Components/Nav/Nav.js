import React from 'react'
import './Nav.css'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";

function Nav() {
  const MyButton = styled(Button)({
    // variant: "outlined",
    background: "black",
    color: "#0DFDD7",
    fontWeight: 600,
  });
  return (
    <div className="navbar">
      <Stack direction="column" spacing={1} sx={{ width: "140px" }}>
        <MyButton>About Me</MyButton>
        <MyButton>Resume</MyButton>
        <MyButton>Skills</MyButton>
        <MyButton>Projects</MyButton>
        <MyButton>Contact Me</MyButton>
      </Stack>

    </div>
  );
}

export default Nav