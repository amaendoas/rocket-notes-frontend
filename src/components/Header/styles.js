import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;
  border-bottom: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  @media (max-width: 700px) {
    padding: 0 20px;
  }
`

export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > img {
    object-fit: cover;
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
    strong {
      font-size: 18px;
      color: ${({theme}) => theme.COLORS.WHITE};
    }
  }

  @media (max-width: 700px) {
    > div {
      margin-left: 8px;
      span {
        font-size: 12px;
      }
  
      strong {
        font-size: 14px;
      }
    }

    img {
      width: 46px;
      height: 46px;
    }

  }
  
  @media (max-width: 440px) {

    > div {
      margin-left: 0px;
    }
    img {
      display: none;
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  > svg {
    color: ${({theme}) => theme.COLORS.GRAY_100};
    font-size: 36px;
  }

  @media (max-width: 700px) {
    > svg {
      font-size: 24px;
    }
  }
`