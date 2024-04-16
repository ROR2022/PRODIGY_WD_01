import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import MyOffCanvas from "./MyOffCanvas";
import { useState } from "react";
import BasicNav from "./BasicNav";
import logoProdigy from "../assets/logoProdigy.jpeg";

const MyNavbar = () => {
  const [showOffCanvas, setShowOffCanvas] = useState(false);
  const handleShowOffCanvas = () => setShowOffCanvas(true);
  return (
    <>
    {!showOffCanvas? (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <div>
            <img src={logoProdigy} alt="logoProdigy" className="rounded-circle" style={{width:'60px'}} />
          <span className="ms-2">Internship Prodigy Infotech</span>
          </div>
          </Navbar.Brand>
        <Navbar.Toggle
          onClick={handleShowOffCanvas}
          aria-controls="basic-navbar-nav"
        />
        
          <Navbar.Collapse id="basic-navbar-nav">
            <BasicNav isOffcanvas={false} />
          </Navbar.Collapse>
        
        
      </Container>
    </Navbar>
    ):
    <MyOffCanvas show={showOffCanvas} setShow={setShowOffCanvas} />
  }
    </>
  );
};

export default MyNavbar;
