import "bootstrap/dist/css/bootstrap.min.css";
// importamos el componente BrowserRouter de la libreria react-router-dom instalada
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
// Importamos las vistas (que estan en /views) que se van a enlazar a las rutas a definir con Route
import Home from "./views/Home.jsx";
import Planes from "./views/Planes.jsx";
import NotFound from "./views/NotFound";


function App() {
  return (
    <div className="App">
      {/* hacemos uso del componente BrowseRouter importado, para envolver toda la aplicacion */}
      <BrowserRouter>
        {/* llamada al componente de Navegacion Navbar importado de /components */}
        <Navbar />
        {/* Routes envuelve las diversas rutas, cada ruta se define con Route asociada a una vista importada */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
