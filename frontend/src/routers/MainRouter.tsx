import { useRoutes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import SearchPeople from "../pages/SearchPeople/SearchPeople";
import { CadastroPessoas } from "../pages/CadastroPessoas/CadastroPessoas";
import { CadastroAnimais } from "../pages/CadastroAnimais/CadastroAnimais";
import { OcorrenciaFormPage } from "../pages/Ocorrencia/OcorrenciaFormPage";
import ProfileCard from "../components/ProfileCard";


export const MainRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/pesquisa", element: <SearchPeople/>  },
    { path: "/ocorrencia", element: <OcorrenciaFormPage/>},
    { path: "/relatorios", element: <ProfileCard />},
    {path: "/cadastro-pessoa", element: <CadastroPessoas /> },
    {path: "/cadastro-animal", element: <CadastroAnimais />},
    {path: "/perfil", element: <ProfileCard /> }
  ]);

  return routes;
};
