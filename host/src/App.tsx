import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import React, { Suspense } from "react";
const Button = React.lazy(() => import("remoteApp/Button"));

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
            <Button></Button>
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
