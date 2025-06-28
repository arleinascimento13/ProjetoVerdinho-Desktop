import { FormAnimals } from "../../components/FormAnimals/FormAnimals";
import { VoltarButton } from "../../components/VoltarButton/VoltarButton";

export const CadastroAnimais = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-col">
                <div className="m-1">
                    <VoltarButton to="" />
                </div>
                <FormAnimals />
            </div>
        </div>
    );
}