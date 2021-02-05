import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
  justify-content: center;
`;
export const TopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    text-decoration: none;
  }
`;

export const InputWrap = styled.span`
  input {
    width: 200px;
    height: 30px;
    font-weight: 600;

    border: none;
    border-bottom: 2.2px solid #000;
    background: #fbe250;
    text-align: center;
    color: #000;

    :focus {
      border: none;
      outline: none;
      background: #cab640;
      color: #000;
    }

    ::placeholder {
      text-align: center;
      color: #000;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardBook = styled(Link)`
  margin: 10px 10px;

  img {
    width: 140px;
    height: 200px;
  }
`;

export const Button = styled.button`
  background: #485ee1;
  color: #fff;
  font-weight: bold;
`;
