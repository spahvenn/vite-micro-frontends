import { Button, Typography } from "@mui/material";
import { useState } from "react";

type Props = {
  hostCounter: number;
};
export const AboutPage = ({ hostCounter }: Props) => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        remote button
      </Button>
      <Typography>Button clicked {counter} times</Typography>
      <Typography>Host button clicked {hostCounter} times</Typography>
    </>
  );
};
export default AboutPage;
