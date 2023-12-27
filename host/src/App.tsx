import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import React, { Suspense } from "react";
import { Box, Typography } from "@mui/material";
const AboutPage = React.lazy(() => import("remoteApp/AboutPage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <div>This is part of the container application.</div>,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>loading</div>}>
            <Typography>
              Area inside the black border is a microfrontend
            </Typography>
            <Box sx={{ border: "1px solid black", padding: "10px" }}>
              <AboutPage />
            </Box>
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
