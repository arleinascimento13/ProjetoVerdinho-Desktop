// src/layouts/MainLayout.tsx

import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"; // <- renderiza o conteúdo da rota filha

const MainLayout: React.FC = () => {
	return (
		<div>
			<Sidebar />
			<div style={{ marginLeft: "250px" }}>
				<Outlet /> {/* Aqui vão as rotas filhas */}
			</div>
		</div>
	);
};

export default MainLayout;
