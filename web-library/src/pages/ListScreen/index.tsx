import React, { useCallback, useEffect, useState } from 'react';

import { BsSearch } from 'react-icons/bs';
import { DebounceInput } from 'react-debounce-input';
import { Container, Main, CardBook } from './styles';

import api from '../../services/api';

interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;

    description: string;
    imageLinks: {
      smallThumbnail?: string;
    };
  };
}

const ListScreen: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [searchBooks, setSearchBooks] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFechBooks = useCallback(async () => {
    const response = await api.get(`/volumes?q=${searchBooks}`);
    setBooks(response.data.items);

    setLoading(false);
  }, [searchBooks]);

  return (
    <Container>
      {/* <button type="button" onClick={() => handleFechBooks('design')}>
        fecth data
      </button> */}
      <header>
        <DebounceInput
          minLength={2}
          debounceTimeout={1000}
          onChange={e => {
            setSearchBooks(e.target.value);
            handleFechBooks();
          }}
        />
        <BsSearch />
      </header>
      <Main>
        {books.map(book => (
          <CardBook key={book.id}>
            <img
              src={
                !book.volumeInfo.imageLinks.smallThumbnail
                  ? 'http://www.ccta.ufpb.br/labeet/contents/acervos/categorias/cordofones/udecra/sem-imagem.jpg/@@images/image.jpeg'
                  : book.volumeInfo.imageLinks.smallThumbnail
              }
              alt="test"
            />
          </CardBook>
        ))}
      </Main>
      Carregar mais...
    </Container>
  );
};

export default ListScreen;
