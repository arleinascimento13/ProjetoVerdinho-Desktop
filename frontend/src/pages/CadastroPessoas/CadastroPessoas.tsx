import { FormPeople } from "../../components/FormPeople/FormPeople";
import { VoltarButton } from "../../components/VoltarButton/VoltarButton";


export const CadastroPessoas = () => {
    return (
        <div className="flex flex-col items-center min-h-screen">
            <div className="flex flex-col">
                <div className="m-1 mb-1">
                    <VoltarButton to="/pesquisa" />
                </div>
                    <FormPeople />
            </div>
        </div>
    );
}