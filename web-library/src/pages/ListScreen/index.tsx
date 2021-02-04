import React, { useCallback, useState } from 'react';

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

  const handleFechBooks = useCallback(async (query: string) => {
    const response = await api.get(`/volumes?q=${query}`);

    setBooks(response.data.items);
  }, []);

  return (
    <Container>
      <button type="button" onClick={() => handleFechBooks('design')}>
        fecth data
      </button>

      {books.map(book => (
        <CardBook key={book.id}>
          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="test" />
        </CardBook>
      ))}
    </Container>
  );
};

export default ListScreen;
