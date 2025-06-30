import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    login: string;
    senha: string;
}
export const LoginCard = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const [submitted, setSubmitted] = useState(false);

    const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }
    const handleError = () => {
        setSubmitted(true);
    }

    return (
        <form onSubmit={handleSubmit(handleFormSubmit, handleError)}>
            <div className="flex flex-col items-center justify-center h-screen">
                <div className="bg-white rounded-lg shadow-md w-[400px] h-[500px] flex flex-col justify-center p-4">
                    <p className="text-2xl font-bold mb-6 text-center">Login</p>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Login</label>
                        <input
                            type="text"
                            {...register("login", { required: "Login é obrigatório" })}
                            className={`w-full p-2 border rounded ${errors.login ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.login && <p className="text-red-500 text-xs mt-1">{errors.login.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
                        <input
                            type="password"
                            {...register("senha", { required: "Senha é obrigatória" })}
                            className={`w-full p-2 border rounded ${errors.senha ? 'border-red-500' : 'border-gray-300'}`}
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
    )
}