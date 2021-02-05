import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Welcome to Web Library!</h1>
      <Link to="/list">Comece Agora!</Link>
    </Container>
  );
};

export default Home;
