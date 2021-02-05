import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  a {
    text-decoration: none;
    background: #3e3e3e;
    color: #fff;

    padding: 10px 15px;

    border-radius: 15px;

    transition: all 0.7s ease-out;

    :hover {
      background-color: #c0c0c0;
    }
  }
`;
