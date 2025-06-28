import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

type Inputs = {
    descricao: string;
    data: string;
    raca: string;
    rua: string;
    cep: string;
    bairro: string;
    cidade: string;
    nome?: string;
    telefone?: string;
    cpf?: string;
}

export const FormOcorrencia = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm<Inputs>();
    const [submitted, setSubmitted] = useState(false);

    const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
        setSubmitted(true);
        console.log(data)
    }

    const handleError = () => {
        setSubmitted(true);
    };

    const handleCancel = () => {
        reset();
        setSubmitted(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit, handleError)} className="p-4 bg-white w-[1200px] rounded-3xl">
                <p className='text-4xl font-bold'> Formulário de Ocorrência</p>
                <div className='flex flex-col m-2'>

                    <div>
                        <div className='flex flex-col mb-1'>
                            <label className='block font-bold'> Descrição</label>
                        </div>
                        <textarea
                            {...register('descricao', { required: true })}
                            placeholder='Descreva a ocorrência...'
                            className='w-full h-[90px] p-2 border-2 border-gray-300 rounded-md'
                            style={{ resize: 'none' }}
                        />
                        {submitted && errors.descricao?.type === 'required' && (
                            <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                        )}
                    </div>

                    <div className='flex justify-between mb-2 gap-4'>
                        <div className='flex flex-col w-1/2 pr-2'>
                            <label className='block font-bold mb-1'>Data da Ocorrência</label>
                            <input {...register('data', { required: true })}
                                type="date"
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Selecione a data da ocorrência'
                            />
                            {submitted && errors.data?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>

                        <div className='flex flex-col w-1/2 pl-2'>
                            <label className='block font-bold mb-1'>Espécie do Animal</label>
                            <input {...register('raca', { required: true })}
                                type='text'
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite a espécie do animal'
                            />
                            {submitted && errors.raca?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                    </div>

                    <div className='flex justify-between mb-2 gap-4'>
                        <div className='flex flex-col w-1/2 pr-2'>
                            <label className='block font-bold mb-1'>Rua</label>
                            <input {...register('rua', { required: true })}
                                type='text'
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite a rua'
                            />
                            {submitted && errors.rua?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                        <div className='flex flex-col w-1/2 pl-2'>
                            <label className='block font-bold mb-1'>Bairro</label>
                            <input {...register('bairro', { required: true })}
                                type='text'
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o bairro'
                            />
                            {submitted && errors.bairro?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                    </div>

                    <div className='flex justify-between mb-3 gap-4'>
                        <div className='flex flex-col w-1/2 pr-2'>
                            <label className='block font-bold mb-1'>Cidade</label>
                            <input {...register('cidade', { required: true })}
                                type='text'
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite a cidade'
                            />
                            {submitted && errors.cidade?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                        <div className='flex flex-col w-1/2 pl-2'>
                            <label className='block font-bold mb-1'>Cep</label>
                            <input {...register('cep', { required: true })}
                                type='text'
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o CEP'
                            />
                            {submitted && errors.cep?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col mb-2'>
                        <div className='flex gap-2 mb-1'>
                            <label className='block font-bold mb-1'>Nome da Testemunha</label> (Opcional)
                        </div>
                        <input {...register('nome')}
                            type='text'
                            className='w-full p-2 border-2 border-gray-300 rounded-md'
                            placeholder='Digite o nome da testemunha'
                        />
                    </div>

                    <div className='flex justify-between mb-3 gap-4'>
                        <div className='flex flex-col w-1/2 pr-2'>
                            <div className='flex gap-2 mb-1'>
                                <label className='block font-bold mb-1'>Telefone</label> (Opcional)
                            </div>
                            <input {...register('telefone')}
                                type='text'
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o número de telefone'
                            />
                        </div>
                        <div className='flex flex-col w-1/2 pl-2'>
                        <div className='flex gap-2 mb-1'>
                            <label className='block font-bold mb-1'>Cpf</label> (opcional)
                        </div>
                            <input {...register('cpf')}
                                type='text'
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o Cpf'
                            />
                        </div>
                    </div>

                    <div className="flex justify-end gap-3">
                        <div className="w-[100px] h-[45px] border-2 border-gray-300 hover:border-orange-300 rounded-lg flex justify-center items-center">
                            <button type="button" onClick={handleCancel} className="font-bold text-[#1F2937] w-full h-full">Cancelar</button>
                        </div>
                        <div className="w-[150px] h-[45px] bg-[#1F2937] rounded-lg flex justify-center items-center">
                            <button type="submit" className="text-white font-bold">Enviar Registro</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}