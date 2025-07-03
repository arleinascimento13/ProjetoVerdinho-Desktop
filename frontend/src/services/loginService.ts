import api, { setBasicAuth, clearBasicAuth } from "./apiService";

interface AuthCredentials {
	username: string;
	password: string;
}

class User {
	username: string;
	token: string;
	constructor(username: string, token: string) {
		this.username = username;
		this.token = token;
	}
}

const login = async (credentials: AuthCredentials): Promise<User | null> => {
	setBasicAuth(credentials.username, credentials.password);
	try {
		const response = await api.post("user/authenticate");

		if (response.status === 200) {
			const token = response.data.token as string;

			clearBasicAuth(); // se for usar Bearer depois

			const userAuthenticated = new User(credentials.username, token);
			localStorage.setItem("user", JSON.stringify(userAuthenticated));

			return userAuthenticated;
		}
	} catch (error: unknown) {
		console.error("Erro no login:", error?.response?.status || error.message);

		if (error.response?.status === 401) {
			localStorage.removeItem("token");
		}

		logout();
		return null;
	}
};

const logout = (): void => {
	clearBasicAuth();
};

const clearBasicAuth = (): void => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
};

export function isAuthenticated(): boolean {
	const token = localStorage.getItem("token");
	return !!token;
}

export default { login, logout, isAuthenticated };
