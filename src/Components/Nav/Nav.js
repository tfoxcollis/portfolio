import React from 'react'
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";
import { border } from '@mui/system';
import { shouldSkipGeneratingVar } from '@mui/material';

function Nav() {
  const MyButton = styled(Button)({
    // variant: "outlined",
    background: "black",
    color: "#8edf34",
    fontWeight: 600,
  });
  return (
    <Stack direction="column" spacing={1} sx={{ width: "150px" }}>
      <MyButton>About Me</MyButton>
      <MyButton>Resume</MyButton>
      <MyButton>Skills</MyButton>
      <MyButton>Projects</MyButton>
      <MyButton>Contact Me</MyButton>
    </Stack>
  );
}

export default Nav