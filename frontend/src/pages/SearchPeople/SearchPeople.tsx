import { useEffect, useState } from 'react';
import axios from 'axios';
import PeopleSearch, { Person } from '../../components/PeopleSearch/PeopleSearch';
import { VoltarButton } from '../../components/VoltarButton/VoltarButton';

export default function SearchPeople() {
  const [pessoas, setPessoas] = useState<Person[]>([]);
  const [allPessoas, setAllPessoas] = useState<Person[]>([]);

  useEffect(() => {
    const fetchPessoas = async () => {
      try {
        const response = await axios.get<Person[]>('http://193.123.111.195:3569/api/v1/pessoa?secret-key=boladeraxixe');
        setPessoas(response.data);
        setAllPessoas(response.data);
      } catch (error) {
        console.error('Erro ao buscar pessoas:', error);
      }
    };

    fetchPessoas();
  }, []);

  const handleSearch = (query: string) => {
    const resultados = allPessoas.filter(pessoa =>
      pessoa.nome.toLowerCase().includes(query.toLowerCase())
    );
    setPessoas(resultados);
  };

  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='justify-center items-center'>
          <PeopleSearch
            titulo="Pesquisar Pessoas"
            pessoas={pessoas}
            onSearch={handleSearch} 
          />
        </div>
      
    </div>
  );
}
