import { Navigate } from "react-router-dom";
import loginService from "../../services/loginService";

interface Props {
	children: JSX.Element;
}

export const ProtectedRoute = ({ children }: Props) => {
	return loginService.isAuthenticated() ? children : <Navigate to="/login" />;
};
