import { useEffect, useState } from 'react';
import PeopleSearch from '../../components/PeopleSearch/PeopleSearch';
import { Person, searchPeopleService } from '../../services/SearchPeopleService';


export default function SearchPeople() {
  const [pessoas, setPessoas] = useState<Person[]>([]);
  const [allPessoas, setAllPessoas] = useState<Person[]>([]);

  useEffect(() => {
    const fetchPessoas = async () => {
      try {
        const response = await searchPeopleService.getAllPeople();
        setPessoas(response);
        setAllPessoas(response);
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
