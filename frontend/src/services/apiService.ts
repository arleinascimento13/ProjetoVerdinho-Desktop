import axios from "axios";

let basicAuthHeader: string | null = null;

const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export function setBasicAuth(username: string, password: string): void {
	basicAuthHeader = `Basic ${btoa(`${username}:${password}`)}`;
}

export function clearBasicAuth(): void {
	basicAuthHeader = null;
}

api.interceptors.request.use((config) => {
	if (basicAuthHeader) {
		config.headers = {
			...config.headers,
			Authorization: basicAuthHeader,
		};
	}
	return config;
});

export default api;
