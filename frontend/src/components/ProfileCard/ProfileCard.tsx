import React, { useEffect, useState } from 'react';
import { searchPeopleService, Person, Animal } from '../../services/SearchPeopleService';

interface ProfileCardProps {
  personId?: string;
  onAddAnimal?: () => void;
}

export default function ProfileCard({ personId, onAddAnimal }: ProfileCardProps) {
  const [person, setPerson] = useState<Person | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Dados fictícios para visualização
    const fakePerson = {
      id: '1',
      nome: 'Maria da Silva',
      cpf: '123.456.789-00',
      telefone: '(11) 91234-5678',
      endereco: 'Rua das Flores, 123 - Centro, São Paulo - SP',
      imagem: 'https://randomuser.me/api/portraits/women/44.jpg',
      multas: '150,00 ',
      animais: [
        {
          id: 'a1',
          nome: 'Rex',
          especie: 'Cachorro',
          peso: '25kg',
          imagem: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=facearea&w=256&h=256&facepad=2',
        },
        {
          id: 'a2',
          nome: 'Mimi',
          especie: 'Gato',
          peso: '5kg',
          imagem: 'https://images.unsplash.com/photo-1518715308788-3005759c41c8?auto=format&fit=facearea&w=256&h=256&facepad=2',
        },
        {
          id: 'a3',
          nome: 'Tico',
          especie: 'Pássaro',
          peso: '0.5kg',
          imagem: 'https://images.unsplash.com/photo-1555685812-8f1b6c4d7c9e?auto=format&fit=facearea&w=256&h=256&facepad=2',
        },
        {
          id: 'a4',
          nome: 'Lola',
          especie: 'Coelho',
          peso: '2kg',
          imagem: 'https://images.unsplash.com/photo-1555685812-8f1b6c4d7c9e?auto=format&fit=facearea&w=256&h=256&facepad=2',
        }
      ],
    };
    setPerson(fakePerson);
    setLoading(false);
    setError(null);
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8 w-[1200px] mx-auto mt-8 border border-blue-200">
        <div className="flex items-center justify-center h-32">
          <div className="text-lg text-gray-600">Carregando dados...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8 w-[1200px] mx-auto mt-8 border border-blue-200">
        <div className="flex items-center justify-center h-32">
          <div className="text-lg text-red-600">{error}</div>
        </div>
      </div>
    );
  }

  if (!person) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-8 w-[1200px] mx-auto mt-8 border border-blue-200">
        <div className="flex items-center justify-center h-32">
          <div className="text-lg text-gray-600">Pessoa não encontrada</div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 w-[1200px] h-[720px] mx-auto mt-8 border border-blue-200">
      <div className="flex flex-col m-4">
        <div className="flex items-start gap-8 mb-4">
          <img
            src={person.imagem}
            alt={person.nome}
            className="w-40 h-40 object-cover rounded-xl border-2 border-black"
          />
          <div>
            <div className='flex flex-col items-start'>
              <p className="text-2xl font-bold">{person.nome}</p>
              <div className="text-gray-700 flex gap-3">
                <p>{person.cpf}</p>
                <p>{person.telefone}</p>
              </div>
            </div>
            <div className='flex flex-col'>
              <div className="mt-1 flex items-center">
                <p className="text-xl font-bold">R$ {person.multas} - multas</p>
              </div>
              <div className="text-gray-700">
                {person.endereco}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Animais Cadastrados</h3>
          <div className="divide-y divide-gray-300">
            {person.animais.map((animal) => (
              <div key={animal.id} className="flex items-center gap-4 py-3">
                <img
                  src={animal.imagem}
                  alt={animal.nome}
                  className="w-14 h-14 object-cover rounded-md border"
                />
                <span className="font-semibold">
                  {animal.nome} - {animal.especie} - {animal.peso}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full mt-8 bg-[#232C39] text-white font-bold flex justify-center items-center py-4 shadow hover:bg-[#1a202c] transition-colors text-lg rounded-lg'>
          <button
            className=""
            onClick={onAddAnimal}
          >
            Cadastrar um novo animal +
          </button>
        </div>
      </div>
    </div>
  );
} 