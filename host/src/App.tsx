import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import React, { Suspense } from "react";
const AboutPage = React.lazy(() => import("remoteApp/AboutPage"));

// TODO: mitä sisältöä sovellukseen?
// TODO: parempi ulkoasu

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <div>hello</div> },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>loading</div>}>
            <AboutPage />
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
