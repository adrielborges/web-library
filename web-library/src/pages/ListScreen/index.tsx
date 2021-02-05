import React, { useCallback, useEffect, useState } from 'react';

import { BsSearch } from 'react-icons/bs';
import { DebounceInput } from 'react-debounce-input';
import { FaArrowLeft } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { Container, TopBar, InputWrap, Main, CardBook, Button } from './styles';

import api from '../../services/api';
import noImg from '../../assets/no-img.png';

interface ResponseApi {
  totalItems: number;
  items?: IBook[];
}

interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[] | undefined;
    pageCount: number;
    description: string | undefined;
    imageLinks?: {
      smallThumbnail: string;
    };
  };

  saleInfo: {
    listPrice?: {
      amount: Number;
    };
  };
}

const ListScreen: React.FC = () => {
  const [books, setBooks] = useState<IBook[]>([]);
  const [searchInputValue, setSearchInputValue] = useState('');

  const [settings, setSettings] = useState({
    numberOfVisibleBooks: 10,
    currentPage: 0,
    totalBooks: 0,
  });

  const { numberOfVisibleBooks, currentPage, totalBooks } = settings;

  const toastElementError = useCallback(
    (message: string) => toast.error(message),
    [],
  );

  const handleFechBooks = useCallback(
    async (
      value: string,
      startIndex: Number,
      maxResults: Number,
    ): Promise<ResponseApi> => {
      const { data } = await api.get<ResponseApi>(
        `/volumes?q=${value}&startIndex=${startIndex}&maxResults=${maxResults}`,
      );

      return data;
    },
    [],
  );

  const handleStoreBooks = useCallback(
    async (searchValue: string) => {
      try {
        const { totalItems, items } = await handleFechBooks(
          searchValue,
          0,
          numberOfVisibleBooks,
        );

        if (items) {
          setBooks(items);

          setSearchInputValue(searchValue);

          setSettings({
            ...settings,
            currentPage: 1,
            totalBooks: totalItems,
          });
        } else {
          toastElementError('O livro não pode ser encontrado.');
        }
      } catch (err) {
        toastElementError(
          'Não foi possível buscar pelo livro, tente novamente!',
        );
      }
    },
    [handleFechBooks, toastElementError, numberOfVisibleBooks, settings],
  );

  const handleMoreStoreBooks = useCallback(async () => {
    try {
      const { items } = await handleFechBooks(
        searchInputValue,
        currentPage * numberOfVisibleBooks,
        numberOfVisibleBooks,
      );

      if (items) {
        setBooks([...books, ...items]);

        setSettings({
          ...settings,
          currentPage: currentPage + 1,
        });
      }
    } catch (err) {
      toastElementError('Não foi possível carregar mais livros.');
    }
  }, [
    books,
    handleFechBooks,
    searchInputValue,
    toastElementError,
    numberOfVisibleBooks,
    currentPage,
    settings,
  ]);

  return (
    <Container>
      <ToastContainer />
      <TopBar>
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <InputWrap>
          <DebounceInput
            minLength={3}
            debounceTimeout={1000}
            onChange={e => handleStoreBooks(e.target.value)}
            placeholder="Digite o livro que procura"
          />
        </InputWrap>
        <span>
          <BsSearch />
        </span>
      </TopBar>

      <Main>
        {books.map(book => (
          <CardBook key={book.id} to={`/list/book/${book.id}`}>
            <img
              src={
                book.volumeInfo.imageLinks
                  ? book.volumeInfo.imageLinks.smallThumbnail
                  : noImg
              }
              alt={book.volumeInfo.title}
            />
          </CardBook>
        ))}
      </Main>

      {!(books.length === 0) && books.length !== totalBooks && (
        <Button type="button" onClick={handleMoreStoreBooks}>
          Carregar mais...
        </Button>
      )}
    </Container>
  );
};

export default ListScreen;
