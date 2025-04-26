import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./routes/Login";
import Pet from "./routes/Pet";
import MainLayout from "./components/MainLayout";
import Home from "./routes/Home";

export default function App() {
	return (
		<Routes>
			{/* Se o usuário não estiver autenticado, ele será redirecionado para o login */}
			<Route path="/" element={<Navigate to="/auth" />} />

			{/* Página de Login */}
			<Route path="/auth" element={<LoginPage />} />

			{/* Rotas que requerem autenticação */}
			<Route path="/main" element={<MainLayout />}>
				<Route path="home" element={<Home />} />
				<Route path="pet" element={<Pet />} />
			</Route>
		</Routes>
	);
}
