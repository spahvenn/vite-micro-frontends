import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar.tsx";
import { Container } from "@mui/material";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <NavigationBar />
      <Container
        maxWidth="lg"
        sx={{
          pb: "64px",
          pt: 3,
        }}
      >
        <Outlet />
      </Container>
    </>
  );
}
