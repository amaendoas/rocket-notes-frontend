import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
  "header"
  "content";

  main {
    grid-area: content;
    overflow-y: auto;
  }

  .tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`

export const Form = styled.form`
  width: clamp(30rem, 30rem + 10vw, 60rem);
  margin: 3.8rem auto;


  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 36px;

    a {
      font-size: 20px;
      color: ${({theme}) => theme.COLORS.GRAY_100};
    }
  }
`