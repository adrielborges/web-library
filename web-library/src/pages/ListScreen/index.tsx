import React, { useCallback, useState } from 'react';

// import { Container } from './styles';
import api from './../../services/api';

interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string;

    description: string;
    imageLinks: {
      smallThumbnail: string;
    }
  }

}

const ListScreen: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);

  const handleFechBooks = useCallback(async (query: string) => {
    //const response = await api.get(`/volumes?q=${query}&key=AIzaSyDwkIwOxFLHYVy34G-UzPlbvssEd_2k5zE`);
    const response = await api.get(`/volumes?q=flowers+inauthor:keyes&key=AIzaSyDwkIwOxFLHYVy34G-UzPlbvssEd_2k5zE`);

    setBooks(response.data.items)
  }, [])

  return (
  <div >
    <button type="button" onClick={()=>handleFechBooks('design')}>fecth data</button>

    {books.map(book => (
      <div key={book.id}>
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="test" />
      </div>
    ))}
  </div>
  );
}

export default ListScreen;