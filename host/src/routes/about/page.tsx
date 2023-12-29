import React, { Suspense, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
const AboutPage = React.lazy(() => import("remoteApp/AboutPage"));

export default function About() {
  const [counter, setCounter] = useState(0);
  return (
    <Suspense fallback={<div>loading</div>}>
      <Button variant="contained" onClick={() => setCounter(counter + 1)}>
        Host button
      </Button>
      <Typography gutterBottom>host button clicked {counter} times</Typography>
      <Typography>Area inside the black border is a microfrontend</Typography>
      <Box sx={{ border: "1px solid black", padding: "10px" }}>
        <AboutPage hostCounter={counter} />
      </Box>
    </Suspense>
  );
}
