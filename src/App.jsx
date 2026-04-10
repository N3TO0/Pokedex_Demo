import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page_Home from "./pages/Page_Home/Page_Home";
import Page_Form from "./pages/Page_Form/Page_Form";

function App() {
  return <div className="content_main">
    <div className="borda_fundo"></div>
    <BrowserRouter>
      <Routes>
        {/* URL inicial: mostra a lista de Pokémons */}
        <Route path="/" element={<Page_Home />} />
        
        {/* URL /cadastro: mostra o seu formulário */}
        <Route path="/cadastro" element={<Page_Form />} />
      </Routes>
    </BrowserRouter>
    <div className="borda_fundo"></div>
  </div>;
}

export default App;