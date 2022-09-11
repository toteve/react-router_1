import { Navbar, Container } from "react-bootstrap";
// importar el componente Link de la libreria react-router-dom
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand>Dogstel</Navbar.Brand>
          {/* Hacemos uso del componente Links para indicar adonde ir al seleccionar cada opcion */}
          <Link to="/" className="text-white ms-3 text-decoration-none">
            Home
          </Link>
          <Link to="/planes" className="text-white ms-3 text-decoration-none">
            Planes
          </Link>
        </Container>
      </Navbar>
    </>
  );
}
