import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { SubmitHandler, useForm } from "react-hook-form";
import cloudimg from './assets/cloud.png';
import remover from './assets/remover.png';

type Inputs = {
    nome: string;
    cor: string;
    peso?: string;
    raca: string;
    descricao?: string;
}

export const FormAnimals = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm<Inputs>();
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
        setSubmitted(true);
        console.log(data);
        console.log('Fotos selecionadas:', selectedFiles);
    };

    const handleError = () => {
        setSubmitted(true);
    };

    const handleCancel = () => {
        reset();
        setSelectedFiles([]);
        setSubmitted(false);
    };

    const handleRemoveFile = (index: number) => {
        setSelectedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
    };

    const { getRootProps, getInputProps } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: (acceptedFiles) => {
            const totalFiles = selectedFiles.length + acceptedFiles.length;
            if (totalFiles <= 3) {
                setSelectedFiles((prev) => [...prev, ...acceptedFiles]);
            } else {
                const availableSlots = 3 - selectedFiles.length;
                setSelectedFiles((prev) => [...prev, ...acceptedFiles.slice(0, availableSlots)]);
            }
        },
    });

    return (
        <div>
            <form onSubmit={handleSubmit(handleFormSubmit, handleError)} className="p-4 bg-white w-[1200px] rounded-3xl">
                <p className="text-4xl font-bold">Formulário de Registro Animal</p>
                <div className="flex flex-col m-2">

                    {/* Nome e Cor */}
                    <div className='flex justify-between mb-2 gap-4'>
                        <div className='flex flex-col w-1/2 pr-2'>
                            <label className="block font-bold mb-1">Nome Completo</label>
                            <input {...register('nome', { required: true })}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o nome do animal'
                            />
                            {submitted && errors.nome?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                        <div className='flex flex-col w-1/2 pl-2'>
                            <label className="block font-bold mb-1">Cor</label>
                            <input {...register('cor', { required: true })}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite a cor do animal'
                            />
                            {submitted && errors.cor?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                    </div>

                    {/* Peso e Raça */}
                    <div className='flex justify-between mb-2 gap-4'>
                        <div className='flex flex-col w-1/2 pr-2'>
                            <div className="flex gap-2 mb-1">
                                <label className="block font-bold ">Peso (kg)</label> (Opcional)
                            </div>
                            <input {...register('peso')}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite o peso do animal (opcional)'
                            />
                        </div>
                        <div className='flex flex-col w-1/2 pl-2'>
                            <label className="block font-bold mb-1">Espécie do Animal</label>
                            <input {...register('raca', { required: true })}
                                className='w-full p-2 border-2 border-gray-300 rounded-md'
                                placeholder='Digite a espécie do animal'
                            />
                            {submitted && errors.raca?.type === 'required' && (
                                <span className="text-red-500 text-sm mt-1 m-0 p-0 block">Item obrigatório</span>
                            )}
                        </div>
                    </div>

                    {/* Descrição */}
                    <div className='flex flex-col mb-2'>
                        <div className='flex gap-2 mb-1'>
                            <label className="block font-bold ">Descrição</label> (Opcional)
                        </div>
                        <textarea
                            {...register('descricao')}
                            className="w-full h-[120px] p-2 border-2 border-gray-300 rounded-md resize-none"
                            style={{ resize: 'none' }}
                            placeholder='Digite uma descrição (opcional)'
                        />
                    </div>
                    <div className="flex justify-between ">

                        {/* Upload de Fotos */}
                        <div className="mb-4">
                            <label className="block font-bold mb-1">Foto do Animal ({selectedFiles.length}/3)</label>
                            <div
                                {...getRootProps()}
                                className={`border-2 border-dashed border-blue-400 rounded-md w-[550px] h-[180px] flex flex-col items-center justify-center text-blue-600 cursor-pointer hover:bg-blue-50 ${selectedFiles.length >= 3 ? 'opacity-50 pointer-events-none' : ''}`}
                            >
                                <input {...getInputProps()} />
                                <img src={cloudimg} alt="Upload" className="h-12" />
                                <p className="text-md font-semibold text-[#797979]">
                                    {selectedFiles.length < 3
                                        ? 'Arraste e solte os arquivos aqui ou clique para navegar'
                                        : 'Limite de 3 fotos atingido'}
                                </p>

                            </div>

                        </div>

                        <div>
                            <label className="block font-bold mb-1">Arquivos Selecionados</label>
                            <div className="border-2 border-gray-300 w-[550px] h-[180px] rounded-md flex justify-center items-center">
                                {selectedFiles.length > 0 && (
                                    <ul className="text-sm text-gray-700 w-full h-full flex flex-col justify-center px-3 pt-4 ">
                                        {selectedFiles.map((file, index) => (
                                            <li key={index} className="flex flex-col items-center justify-between mb-2">
                                                <div  className="flex items-center justify-between w-full">
                                                    <span>{file.name}</span>
                                                    <button
                                                        type="button"
                                                        onClick={() => handleRemoveFile(index)}
                                                        className="bg-red-500 p-2 rounded-md text-xs"
                                                    >
                                                        <img src={remover} className="w-6 h-6" alt="Remover" />
                                                    </button>
                                                </div>
                                                <div className="w-full h-[1px] bg-gray-300"></div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>

                    </div>
                    {/* Botões */}
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
    )
}
