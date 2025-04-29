import { Card } from "./components/Card/Card";


export default function App() {
	return (
		<div className="w-full h-screen>">
			<Card 
				type="pessoas"
				title="Pessoas Cadastradas"
				count={3000000000}
				onClick={() => console.log("Clicked Domestico")}
				showButton={true}
			/>
		</div>
	);
}
