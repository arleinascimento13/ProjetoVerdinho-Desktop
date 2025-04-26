// import { useState } from "react";
// import { login } from "./model";
import { useNavigate } from "react-router-dom";
// import { login as loginRequest } from "./model";

export default function LoginView() {
	// const [cpf, setCpf] = useState("");
	// const [senha, setSenha] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		navigate("/main/home");

		// try {
		// 	const response = await login(cpf, senha);
		// 	// Armazenando os dados do usuário no localStorage (pode ser alterado para um estado global)
		// 	localStorage.setItem("user", JSON.stringify(response.data));

		// 	// Redireciona para a página Home após o login

		// } catch (error: string) {
		// 	console.error(error);
		// }
	};

	return (
		<div className="container mt-5">
			<div className="row justify-content-center">
				<div className="col-md-4">
					<div className="card shadow-sm">
						<div className="card-body">
							<h3 className="card-title mb-4 text-center">Login</h3>
							<div className="mb-3">
								<label className="form-label">CPF</label>
								<input
									type="text"
									className="form-control"
									name="cpf"
									onChange={(e) => {
										setCpf(e.target.value);
									}}
									required
								/>
							</div>
							<div className="mb-3">
								<label className="form-label">Senha</label>
								<input
									type="password"
									className="form-control"
									name="senha"
									onChange={(e) => {
										setSenha(e.target.value);
									}}
									required
								/>
							</div>
							<button
								type="submit"
								className="btn btn-primary w-100"
								onClick={(e) => {
									handleLogin(e);
								}}
							>
								Login
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
