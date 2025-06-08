import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./routers/MainRouter";
import { MenuBar } from "./components/MenuBar/MenuBar";

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-[#E1E1E1]">
        <MenuBar
          name="Seu Nome"
          position="Sua Posição"
          onClick={() => console.log("Foto clicada")}
        />
        <div className="flex-1 overflow-y-auto">
          <MainRouter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
