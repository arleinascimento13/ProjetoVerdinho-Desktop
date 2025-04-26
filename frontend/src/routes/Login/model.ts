import api from "../../services/apiService"; // ajuste o path conforme sua estrutura

export function login(cpf: string, senha: string) {
	return api.post(`/auth/login`, null, {
		params: { login: cpf, senha: senha },
	});
}
     