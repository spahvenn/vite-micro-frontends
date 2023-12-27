import { Button, Typography } from "@mui/material";
import { useState } from "react";

export const AboutPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        remote button
      </Button>
      <Typography>Button clicked {counter} times</Typography>
    </>
  );
};
export default AboutPage;
