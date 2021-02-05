import React, { useState, useEffect } from 'react';
import { BsSearch, BsHeart, BsHeartFill } from 'react-icons/bs';
import { FaArrowLeft } from 'react-icons/fa';

import StarRating from 'react-svg-star-rating';
import { useParams, Link } from 'react-router-dom';

import formatsCurrencyValue from '../../utils/formatsCurrencyValue';

import api from '../../services/api';
import noImg from '../../assets/no-img.png';

import {
  Container,
  Button,
  TopBar,
  BookWrap,
  BookImageWrap,
  BookInfoWrap,
  ButtonWrap,
  ButtonFavorited,
  DescriptionWrap,
  BookInfoContainer,
} from './styles';

interface IBook {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    pageCount: number;
    description?: string;
    imageLinks?: {
      smallThumbnail: string;
    };
  };

  saleInfo: {
    listPrice: {
      amount: number;
    };
  };
}

interface Params {
  id: string;
}

const BookScreen: React.FC = () => {
  const [favorited, setFavorited] = useState(false);
  const [like, setLike] = useState(false);
  const [book, setBook] = useState<IBook>({
    id: '',
    volumeInfo: {
      title: '',
      authors: [],
      pageCount: 0,
      description: '',
      imageLinks: {
        smallThumbnail: '',
      },
    },

    saleInfo: {
      listPrice: {
        amount: 0,
      },
    },
  });

  const { id } = useParams<Params>();

  useEffect(() => {
    const loadBook = async () => {
      const { data } = await api.get<IBook>(`/volumes/${id}`);

      setBook(data);
    };

    loadBook();
  }, [id]);

  return (
    <Container>
      <TopBar>
        <Link to="/list">
          <FaArrowLeft />
        </Link>
        <h3>Livro</h3>
        <span>
          <BsSearch />
        </span>
      </TopBar>

      <BookWrap>
        <BookImageWrap>
          <img
            src={
              book.volumeInfo.imageLinks
                ? book.volumeInfo.imageLinks.smallThumbnail
                : noImg
            }
            alt="imagem livro"
          />
          <span>
            {book.volumeInfo.pageCount}
            <span>Páginas</span>
          </span>
        </BookImageWrap>

        <BookInfoContainer>
          <h2>{book.volumeInfo.title}</h2>
          <BookInfoWrap>
            <span>
              Autor:
              {book.volumeInfo.authors &&
                book.volumeInfo.authors.map(author => <span>{author}</span>)}
            </span>

            <div>
              <span>
                <strong>
                  {book.saleInfo.listPrice
                    ? formatsCurrencyValue(book.saleInfo.listPrice.amount)
                    : 'Sem preço'}
                </strong>
              </span>

              <StarRating activeColor="#000" />
            </div>
          </BookInfoWrap>

          <ButtonWrap>
            <Button type="button" onClick={() => setLike(!like)}>
              {like ? 'Curtiu' : 'Curtir'}
            </Button>
            <ButtonFavorited
              type="button"
              onClick={() => setFavorited(!favorited)}
            >
              {!favorited ? <BsHeart /> : <BsHeartFill />}
            </ButtonFavorited>
          </ButtonWrap>
        </BookInfoContainer>
      </BookWrap>

      <h4>Sinopse</h4>
      <DescriptionWrap>
        <p>{book.volumeInfo.description}</p>
      </DescriptionWrap>
    </Container>
  );
};

export default BookScreen;
