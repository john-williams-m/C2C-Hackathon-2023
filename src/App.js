import { Box, Container } from "@mui/material";
import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Footer from "./components/shared/components/Footer";
import NavBar from "./components/shared/components/NavBar";
import Sponsors from "./pages/Sponsors";
import TimeLine from "./pages/TimeLine";
import Tracks from "./pages/Tracks";


export default function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Container maxWidth={"xl"} disableGutters sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/timeline" element={<TimeLine />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
          <Box marginTop={'auto'} >
            <Footer />
          </Box>
        </Container>
      </BrowserRouter>
    </Fragment>
  )
}