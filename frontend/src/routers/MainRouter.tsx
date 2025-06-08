import { useRoutes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import  SearchDomesticos  from "../pages/SearchDomesticos/SearchDomesticos";


export const MainRouter = () => {
  const routes = useRoutes([
    { path: "/", element: <Dashboard /> },
    { path: "/pesquisa", element: <SearchDomesticos /> },
    { path: "/ocorrencia", element: <div>Ocorrência</div> },
    { path: "/domesticos", element: <div>Domésticos</div> },
    { path: "/silvestres", element: <div>Silvestres</div> },
  ]);

  return routes;
};
