import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0px 0px;
  min-height: 100vh;
  background: #f0f0f0;
`;

export const TopBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  background: #fbe250;

  a {
    margin-left: 10px;
    text-decoration: none;
  }
  span {
    margin-right: 10px;
  }
`;

export const BookWrap = styled.div`
  display: flex;
  background: #fbe250;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 15px;
`;

export const BookImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  img {
    box-shadow: 0px 10px 5px rgba(0, 0, 0, 0.3);
  }

  span {
    margin: 15px 0;
    text-align: center;
    color: #858585;
    span {
      margin-left: 10px;
    }
  }
`;

export const BookInfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
`;
export const BookInfoWrap = styled.div`
  span {
    margin-bottom: 105px;
  }
  div {
  }
`;
export const ButtonWrap = styled.div`
  display: flex;
  flex-direction: row;
  button {
    border: none;
    outline: none;
    cursor: pointer;
  }
  button + button {
    margin-left: 5px;
  }
`;

export const ButtonFavorited = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 0, 53, 100);

  height: 30px;
  width: 30px;

  border-radius: 50%;

  svg {
    text-align: center;
    color: #f0f0f0;
    font-size: 15px;
    font-weight: bold;
  }
`;

export const Button = styled.button`
  border-radius: 15px;
  background: #485ee1;
  color: #fff;
  font-weight: bold;
`;

export const DescriptionWrap = styled.div`
  display: flex;
  justify-content: center;
  background: #f0f0f0;
  min-width: 98.2vw;
  height: 100%;
  min-height: 100vh;

  p {
    text-align: justify;
    width: 95%;
  }
`;
