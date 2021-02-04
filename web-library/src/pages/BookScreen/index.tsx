import React from 'react';
import { Container } from './styles';

const BookScreen: React.FC = () => {
  return (
    <Container>
      <div>
        <div style={{ display: 'flex' }}>
          <img src="" alt="imagem livro" />

          <div>
            <h2>titulo livro</h2>
            <span>by: autor</span>

            <div>
              <span>$preço</span>
              <span>Rate stars</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex' }}>
          <span>paginas </span>

          <div>
            <button type="button">Buy</button>
            <button type="button">Favorited</button>
          </div>
        </div>
      </div>

      <div>
        <p>
          description Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque, nobis perferendis! Repellat fuga eaque corrupti
          repellendus quam impedit ipsum soluta, iusto non dolorem! Aut deserunt
          dolor eveniet sint sequi obcaecati!
        </p>
      </div>
    </Container>
  );
};

export default BookScreen;
