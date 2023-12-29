import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root.tsx";
import About from "./routes/about/page.tsx";

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
        element: <About />,
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
