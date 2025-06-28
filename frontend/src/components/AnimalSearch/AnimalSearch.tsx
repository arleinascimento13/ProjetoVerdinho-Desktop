import React, { useState } from 'react';
import lupa from './assets/lupa.png'

export interface Animal {
  id: string;
  nome: string;
  especie: string;
  peso: string;
  imagem: string;
  infoExtra?: string;
}

interface AnimalSearchProps {
  titulo: string;
  animais: Animal[];
  onSearch: (query: string) => void;
  onAddOcorrencia: () => void;
}

const AnimalSearch: React.FC<AnimalSearchProps> = ({
  titulo,
  animais,
  onSearch,
  onAddOcorrencia
}) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="p-4 bg-white h-[700px] w-[1200px] rounded-3xl">
      <p className="text-2xl font-bold mb-4">{titulo}</p>
     <form onSubmit={handleSearch} className="flex gap-2 mb-3">
  <div className="relative flex-1">
    <input
      className="w-full border border-[#525252] rounded p-2 pr-10" // pr-10 para espaço do ícone
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Pesquisar..."
    />
    <button 
      type="submit" 
      className="absolute inset-y-0 right-2 flex items-center justify-center"
    >
      <img src={lupa} alt="Pesquisar" className="w-5 h-5" />
    </button>
  </div>
  
  <button
    type="button"
    className="bg-[#0F1E32] text-white rounded px-4"
    onClick={onAddOcorrencia}
  >
    Ocorrência +
  </button>
</form>
      <div>
        <p className="font-semibold mb-3">Resultado ({animais.length})</p>
        <div className="overflow-y-auto max-h-[450px]">
          {animais.map(animal => (
            <div key={animal.id} className="flex w-[1110px] items-center gap-4 mb-2 border-b border-[#CDCDCD] pb-2">
              <img src={animal.imagem} alt={animal.nome} className="w-14 h-14 rounded border-[#12431D] border-3" />
              <div>
                <span className="font-bold">{animal.nome}</span> - {animal.especie} - {animal.peso}
                {animal.infoExtra && <span className="text-gray-500"> - {animal.infoExtra}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimalSearch; 