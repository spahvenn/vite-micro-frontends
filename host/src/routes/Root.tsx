import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar.tsx";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <NavigationBar />
      <Outlet />
    </>
  );
}
