import AnimalSearch, { Animal } from '../../components/AnimalSearch/AnimalSearch';
import { useState } from 'react';

// Lista de animais domésticos mockada
const animaisMock: Animal[] = [
  {
    id: '1',
    nome: 'Bob',
    especie: 'Cachorro',
    peso: '22kg',
    imagem: 'https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg'
  },
  {
    id: '2',
    nome: 'Tob',
    especie: 'Cachorro',
    peso: '12kg',
    imagem: 'https://images.dog.ceo/breeds/terrier-norwich/n02094258_3840.jpg'
  },
  {
    id: '3',
    nome: 'Magali',
    especie: 'Gato',
    peso: '3kg',
    imagem: 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg'
  },
  {
    id: '4',
    nome: 'Garfield',
    especie: 'Gato',
    peso: '4,5kg',
    imagem: 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg'
  },
    {
        id: '5',
        nome: 'Pipoca',
        especie: 'Coelho',
        peso: '1,5kg',
        imagem: 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg'
    },
    {
        id: '6',
        nome: 'Nina',
        especie: 'Hamster',
        peso: '0,2kg',
        imagem: 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg'
    },
    {
        id: '7',
        nome: 'Pepe',
        especie: 'Pássaro',
        peso: '0,1kg',
        imagem: 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg'
    },
    {
        id: '8',
        nome: 'Tico',
        especie: 'Peixe',
        peso: '0,05kg',
        imagem: 'https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg'
    },
  // Adicione mais animais se quiser
];

export default function SearchDomesticos() {
  const [animais, setAnimais] = useState<Animal[]>(animaisMock);

  // Função de busca simples
  const handleSearch = (query: string) => {
    setAnimais(
      animaisMock.filter(animal =>
        animal.nome.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  // Função para adicionar ocorrência (exemplo)
  const handleAddOcorrencia = () => {
    alert('Adicionar ocorrência!');
  };

  return (
    <AnimalSearch
      titulo="Pesquisa de animais domésticos"
      animais={animais}
      onSearch={handleSearch}
      onAddOcorrencia={handleAddOcorrencia}
    />
  );
} 