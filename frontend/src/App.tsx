import { BrowserRouter } from "react-router-dom";
// import { MainRouter } from "./routers/MainRouter";
// import { MenuBar } from "./components/MenuBar/MenuBar";
import { Providers } from "./utils/providers";
import { AppLayout } from "./layout/AppLayout";

function App() {
	return (
		<BrowserRouter>
			<Providers>
				<AppLayout />
			</Providers>
		</BrowserRouter>
	);
}

export default App;
