import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import userService from "../../services/loginService"; // ajuste o caminho se necessário
import { useState } from "react";

interface FormData {
	login: string;
	senha: string;
}

export const LoginCard = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();
	const navigate = useNavigate();
	const [errorMsg, setErrorMsg] = useState("");

	const handleFormSubmit = async (data: FormData) => {
		const user = await userService.login({ username: data.login, password: data.senha });

		if (user) {
			localStorage.setItem("token", user.token);
			localStorage.setItem("user", user.username);
			navigate("/dashboard"); // ou qualquer rota pós-login
		} else {
			setErrorMsg("Login ou senha inválidos.");
		}
	};

	const handleError = (errors) => {
		console.error("Erros de validação:", errors);
	};

	return (
		<form onSubmit={handleSubmit(handleFormSubmit, handleError)}>
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="bg-white rounded-lg shadow-md w-[400px] h-[500px] flex flex-col justify-center p-4">
					<p className="text-2xl font-bold mb-6 text-center">Login</p>

					{errorMsg && <p className="text-red-500 text-sm text-center mb-4">{errorMsg}</p>}

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">Login</label>
						<input
							type="text"
							{...register("login", { required: "Login é obrigatório" })}
							className={`w-full p-2 border rounded ${
								errors.login ? "border-red-500" : "border-gray-300"
							}`}
						/>
						{errors.login && <p className="text-red-500 text-xs mt-1">{errors.login.message}</p>}
					</div>

					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
						<input
							type="password"
							{...register("senha", { required: "Senha é obrigatória" })}
							className={`w-full p-2 border rounded ${
								errors.senha ? "border-red-500" : "border-gray-300"
							}`}
						/>
						{errors.senha && <p className="text-red-500 text-xs mt-1">{errors.senha.message}</p>}
					</div>

					<button
						type="submit"
						className="w-full bg-[#1F2937] text-white py-2 rounded hover:bg-blue-950 transition duration-200"
					>
						Entrar
					</button>
				</div>
			</div>
		</form>
	);
};
