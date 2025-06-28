import { SubmitHandler, useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import { useState } from 'react';
import cloudimg from './assets/cloud.png';

type Inputs = {
    nome: string;
    cpf: string;
    telefone: string;
    cep: string;
    logradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    complemento?: string;
}

export const FormPeople = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm<Inputs>();
    const [submitted, setSubmitted] = useState(false);

    const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }

    const handleError = () => {
        setSubmitted(true);
    }

    const handleCancel = () => {
        reset();
        setSubmitted(false);
    };

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: (acceptedFiles) => {
            setSelectedFile(acceptedFiles[0]);
        },
    });

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit, handleError)} className="p-4 bg-white w-[1200px] rounded-3xl">
                <p className="text-4xl font-bold">Formulário de Registro Pessoa</p>
                <div className="flex flex-col m-2">

                    <div className='flex justify-between mb-2 gap-4'>
                        <div className='flex flex-col w-1/2 pr-2'>
                            <label className="block font-bold mb-1">Nome Completo</label>
                            <input {...register('nome', {required: true, minLength: 3, maxLength: 255})}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o nome completo'
                            />
                            {submitted && errors.nome?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                            {submitted && errors.nome?.type === 'minLength' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Mínimo de 3 caracteres</span>
                            )}
                            {submitted && errors.nome?.type === 'maxLength' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Máximo de 255 caracteres</span>
                            )}
                        </div>
                        <div className='flex flex-col w-1/2 pl-2'>
                            <label className="block font-bold mb-1">Cpf</label>
                            <input {...register('cpf', { required: true })}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o CPF'
                            />
                            {submitted && errors.cpf?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                    </div>

                    <div className='flex justify-between mb-2 gap-4'>
                        <div className='flex flex-col w-1/2 pr-2'>
                            <label className="block font-bold mb-1">Telefone</label>
                            <input {...register('telefone', { required: true })}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o telefone'
                            />
                            {submitted && errors.telefone?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                        <div className='flex flex-col w-1/2 pl-2'>
                            <label className="block font-bold mb-1">Cep</label>
                            <input {...register('cep', { required: true })}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o CEP'
                            />
                            {submitted && errors.cep?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                    </div>

                    <div className='flex justify-between mb-2 gap-4'>
                        <div className='flex flex-col w-1/2 pr-2'>
                            <label className="block font-bold mb-1">Logradouro</label>
                            <input {...register('logradouro', { required: true })}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o logradouro'
                            />
                            {submitted && errors.logradouro?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                        <div className='flex flex-col w-1/2 pl-2'>
                            <label className="block font-bold mb-1">Bairro</label>
                            <input {...register('bairro', { required: true })}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o bairro'
                            />
                            {submitted && errors.bairro?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                    </div>

                    <div className='flex justify-between mb-2 gap-4'>
                        <div className='flex flex-col w-1/2 pr-2'>
                            <label className="block font-bold mb-1">Cidade</label>
                            <input {...register('cidade', { required: true })}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite a cidade'
                            />
                            {submitted && errors.cidade?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                        <div className='flex flex-col w-1/2 pl-2'>
                            <label className="block font-bold mb-1">Estado</label>
                            <input {...register('estado', { required: true })}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o estado'
                            />
                            {submitted && errors.estado?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                    </div>

                    <div className='flex flex-col mb-2'>
                        <div className='flex gap-2 mb-1'>
                            <label className="block font-bold ">Complemento </label> (Opcional)
                        </div>
                        <input {...register('complemento')}
                            className='w-full p-2 border-2 border-gray-300 rounded-md'
                            placeholder='Digite o complemento (opcional)'
                        />
                    </div>

                    <div className="mb-3">
                        <label className="block font-bold">Foto do usuário</label>
                        <div
                            {...getRootProps()}
                            className="border-2 border-dashed border-blue-400 rounded-md w-full h-[100px] flex flex-col items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50"
                        >
                            <input {...getInputProps()} />
                            <img src={cloudimg} alt="Upload" className="h-12 mb-2 mt-2" />
                            {selectedFile ? (
                                <p className="font-semibold">{selectedFile.name}</p>
                            ) : (
                                <p className="text-md font-semibold text-[#797979]">
                                    Arraste e solte os arquivos aqui ou clique para navegar
                                </p>
                            )}
                        </div>
                    </div>
                    
                    <div className="flex justify-end gap-3 flex-wrap mt-2">
                        <div className="w-[100px] h-[45px] border-2 border-gray-300 hover:border-orange-300 rounded-lg flex justify-center items-center">
                            <button type="button" onClick={handleCancel} className="font-bold text-[#1F2937] w-full h-full">Cancelar</button>
                        </div>
                        <div className="w-[150px] h-[45px] bg-[#1F2937] rounded-lg flex justify-center items-center">
                            <button type="submit" className="text-white font-bold w-full h-full">Enviar Registro</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}