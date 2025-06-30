import { BrowserRouter } from "react-router-dom";
import { MainRouter } from "./routers/MainRouter";
import { MenuBar } from "./components/MenuBar/MenuBar";
import { Providers } from "./utils/providers";
;

function App() {
  return (
    <BrowserRouter>
        <Providers>
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
        </Providers>
    </BrowserRouter>
  );
}

export default App;
