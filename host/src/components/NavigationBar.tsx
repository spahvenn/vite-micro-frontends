import { AppBar, Box, Container, Grid } from "@mui/material";
import { NavigationItem } from "./NavigationItem.tsx";

export default function NavigationBar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12}>
            <Box sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <NavigationItem to={"/"}>Home</NavigationItem>
                <NavigationItem to={"/about"}>About</NavigationItem>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
