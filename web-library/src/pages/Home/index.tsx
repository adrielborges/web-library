import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to Web Library!</h1>
      <Link to="/list">Comece Agora!</Link>
    </div>
  );
};

export default Home;
