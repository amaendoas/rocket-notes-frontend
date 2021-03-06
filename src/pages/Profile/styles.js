import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    background: ${({theme}) => theme.COLORS.BACKGROUND_900};

    display: flex;
    align-items: center;
    padding: 0 clamp(2rem, 2rem + 10vw, 12.4rem);

    svg {
      color: ${({theme}) => theme.COLORS.GRAY_100};
      font-size: 24px;
    }
  }
`

export const Form = styled.form`
  max-width: 340px;
  margin: -86px auto 0;

  > div:nth-child(4){
    margin-top: 24px;
  }
`

export const Avatar = styled.div`
  position: relative;
  margin: 0 auto 32px;
  width: 18.6rem;
  height: 18.6rem;
  
  > img {
    object-fit: cover;
    width: 186px;
    height: 186px;
    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({theme}) => theme.COLORS.ORANGE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({theme}) => theme.COLORS.BACKGROUND_800};;
    }
  }
`