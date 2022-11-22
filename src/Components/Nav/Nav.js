import React from 'react'
import './Nav.css'
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";
import { HashLink } from 'react-router-hash-link';
import Divider from '@mui/material/Divider';

function Nav() {
  const MyButton = styled(HashLink)({
    background: "black",
    color: "#0DFDD7",
    fontWeight: 'lighter',
    textDecoration: 'none',
    textAlign: 'center',
  });
  return (
    <div className="navbar">
      <Stack
        direction="column"
        spacing={1} 
        sx={{ width: "140px" }} 
        divider={<Divider orientation="vertical" flexItem />}>
        <MyButton smooth to="/#about">About Me </MyButton>
        <MyButton smooth to='/resume'>Resume</MyButton>
        <MyButton smooth to="/#skills">Skills</MyButton>
        <MyButton smooth to="/#projContainer">Projects</MyButton>
        <MyButton smooth to="/#contactContainer">Contact Me</MyButton>
      </Stack>

    </div>
  );
}

export default Nav