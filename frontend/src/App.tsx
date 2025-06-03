
import GraficosCard from "./components/Graphics/Graficos";
import { MenuBar } from "./components/MenuBar/MenuBar";
import AnimaisDomesticosPage from "./pages/AnimaisDomésticos/AnimaisDomésticos";


export default function App() {
	return (
		<div className="absolute w-full h-screen bg-[#E1E1E1] flex ">
			
			<MenuBar 
			name="Breno"
			position="Desenvolvedor Frontend"
			imgurl=""
			onClick={() => console.log("MenuBar clicked")}
			/>
		
			<GraficosCard />

		{/* <div className="flex-1 flex items-center justify-center">
			<AnimaisDomesticosPage />
		</div> */}
		</div>
	);
}
