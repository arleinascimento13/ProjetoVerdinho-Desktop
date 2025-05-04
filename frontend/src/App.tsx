
import ChartsOverviewDemo from "./components/Graficos/Graficos";
import { MenuBar } from "./components/MenuBar/MenuBar";


export default function App() {
	return (
		<div className="absolute w-full h-screen bg-[#E1E1E1] flex ">
			
			<MenuBar 
			name="Breno"
			position="Desenvolvedor Frontend"
			imgurl=""
			onClick={() => console.log("MenuBar clicked")}
			/>
			
			<ChartsOverviewDemo />
		</div>
	);
}
