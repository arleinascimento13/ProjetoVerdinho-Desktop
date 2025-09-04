import { MenuBar } from "../components/MenuBar/MenuBar";
import { MainRouter } from "../routers/MainRouter";
import { useLocation } from "react-router-dom";

export const AppLayout = () => {
	const location = useLocation();

	const hideMenu = location.pathname === "/login";

	return (
		<div className="flex h-screen bg-[#E1E1E1]">
			{!hideMenu && (
				<MenuBar name="Seu Nome" position="Sua Posição" onClick={() => console.log("Foto clicada")} />
			)}
			<div className="flex-1 overflow-y-auto">
				<MainRouter />
			</div>
		</div>
	);
};

export default AppLayout;
