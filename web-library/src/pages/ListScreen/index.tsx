import React, { useCallback, useEffect, useState } from 'react';

import { BsSearch } from 'react-icons/bs';
import { Container, CardBook } from './styles';

import api from '../../services/api';

interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;

    description: string;
    imageLinks: {
      smallThumbnail: string;
    };
  };
}

const ListScreen: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [searchBooks, setSearchBooks] = useState('');
  const [loading, setLoading] = useState(false);

  useCallback(async () => {
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
        <input
          value={searchBooks}
          onChange={e => setSearchBooks(e.target.value)}
          type="text"
        />
        <BsSearch />
      </header>
      {searchBooks.length
        ? 'Carregando!'
        : books.map(book => (
            <CardBook key={book.id}>
              <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="test" />
            </CardBook>
          ))}
    </Container>
  );
};

export default ListScreen;
