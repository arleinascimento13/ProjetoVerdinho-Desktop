import React, { useState, useEffect } from 'react';
import lupa from './assets/lupa.png'
import { useNavigate } from 'react-router-dom';
import { searchPeopleService, Person } from '../../services/SearchPeopleService';

interface PeopleSearchProps {
  titulo: string;
  onSearch?: (query: string) => void; // busca temporária rsrs...
}

const PeopleSearch: React.FC<PeopleSearchProps> = ({
  titulo,
  onSearch,
}) => {
  const [query, setQuery] = useState('');
  const [pessoas, setPessoas] = useState<Person[]>([]);
  const [allPessoas, setAllPessoas] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Carregar todas as pessoas na montagem do componente
  useEffect(() => {
    const fetchPessoas = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await searchPeopleService.getAllPeople();
        setPessoas(response);
        setAllPessoas(response);
      } catch (err) {
        console.error('Erro ao buscar pessoas:', err);
        setError('Erro ao carregar pessoas. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    fetchPessoas();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) {
      setPessoas(allPessoas);
      return;
    }

    const resultados = allPessoas.filter(pessoa =>
      pessoa.nome.toLowerCase().includes(query.toLowerCase()) ||
      pessoa.cpf.includes(query) ||
      pessoa.telefone.includes(query)
    );
    
    setPessoas(resultados);
    
    // Se houver callback externo, chamá-lo
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleCadastro = () => {
    navigate('/cadastro-pessoa');
  };

  return (
    <div className="p-4 bg-white h-[700px] w-[1200px] rounded-3xl">
      <p className="text-2xl font-bold mb-4">{titulo}</p>
      <form onSubmit={handleSearch} className="flex gap-2 mb-3">
        <div className="relative flex-1">
          <input
            className="w-full border border-[#525252] rounded p-2 pr-10"
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
          className="bg-[#0F1E32] text-white rounded font-semibold px-4"
          onClick={handleCadastro}
        >
          Cadastrar +
        </button>
      </form>
      <div>
        <p className="font-semibold mb-3">Resultado ({pessoas.length})</p>
        <div className="overflow-y-auto max-h-[450px]">
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <div className="text-gray-600">Carregando pessoas...</div>
            </div>
          ) : error ? (
            <div className="flex items-center justify-center h-32">
              <div className="text-red-600">{error}</div>
            </div>
          ) : pessoas.length === 0 ? (
            <div className="flex items-center justify-center h-32">
              <div className="text-gray-600">
                {query ? 'Nenhuma pessoa encontrada para esta pesquisa.' : 'Nenhuma pessoa cadastrada.'}
              </div>
            </div>
          ) : (
            pessoas.map(pessoa => (
              <div key={pessoa.id} className="flex w-[1110px] items-center gap-4 mb-2 border-b border-[#CDCDCD] pb-2">
                <img src={pessoa.imagem} alt={pessoa.nome} className="w-14 h-14 rounded border-[#12431D] border-3" />
                <div>
                  <span className="font-bold">{pessoa.nome}</span> - CPF: {pessoa.cpf} - {pessoa.telefone}
                  {pessoa.endereco && <span className="text-gray-500"> - {pessoa.endereco}</span>}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default PeopleSearch;
