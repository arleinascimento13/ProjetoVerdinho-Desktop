import { useRoutes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import SearchPeople from "../pages/SearchPeople/SearchPeople";
import { CadastroPessoas } from "../pages/CadastroPessoas/CadastroPessoas";
import { CadastroAnimais } from "../pages/CadastroAnimais/CadastroAnimais";
import { OcorrenciaFormPage } from "../pages/Ocorrencia/OcorrenciaFormPage";
import ProfileCard from "../components/ProfileCard";
import { LoginCard } from "../components/LoginCard/LoginCard";
import { ProtectedRoute } from "../components/ProtectedRoute/ProtectedRoute";

export const MainRouter = () => {
	const routes = useRoutes([
		{ path: "/login", element: <LoginCard /> },
		{
			path: "/dashboard",
			element: (
				<ProtectedRoute>
					<Dashboard />
				</ProtectedRoute>
			),
		},
		{
			path: "/pesquisa",
			element: (
				<ProtectedRoute>
					<SearchPeople />
				</ProtectedRoute>
			),
		},
		{
			path: "/ocorrencia",
			element: (
				<ProtectedRoute>
					<OcorrenciaFormPage />
				</ProtectedRoute>
			),
		},
		{
			path: "/relatorios",
			element: (
				<ProtectedRoute>
					<div>Relatórios</div>
				</ProtectedRoute>
			),
		},
		{
			path: "/cadastro-pessoa",
			element: (
				<ProtectedRoute>
					<CadastroPessoas />
				</ProtectedRoute>
			),
		},
		{
			path: "/cadastro-animal",
			element: (
				<ProtectedRoute>
					<CadastroAnimais />
				</ProtectedRoute>
			),
		},
		{
			path: "/perfil",
			element: (
				<ProtectedRoute>
					<ProfileCard />
				</ProtectedRoute>
			),
		},
		{
			path: "/",
			element: <LoginCard />,
		},
	]);

	return routes;
};
