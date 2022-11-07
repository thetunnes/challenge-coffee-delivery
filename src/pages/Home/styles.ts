import styled from "@emotion/styled";

export const HomeContainer = styled.div`
  .main-banner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3rem;
    margin: 3rem auto;

    .main-banner-text {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;
      gap: 1rem;

      h1 {
        font-size: ${(props) => props.theme.font.size["5xl"]};
        font-weight: 700;
        color: ${(props) => props.theme.colors.title};
        line-height: ${(props) => props.theme.font.lineHeight.sm};
      }

      p {
        font-size: ${(props) => props.theme.font.size.xl};
        line-height: ${(props) => props.theme.font.lineHeight.sm};
      }
    }

    img {
     width: 50%;
     height: auto;
     object-fit: contain;
    }
  }

  @media screen and (max-width: 768px) {
    .main-banner {
      flex-direction: column-reverse;
      align-items: center;
      gap: 1.5rem;

      .main-banner-text {
        align-items: center;

        h1 {
          text-align: center;
        }
      }

      img {
        width: 70%;
      }
    }
  }

  @media screen and (max-width: 512px) {
    .main-banner {

      img {
        width: 90%;
      }
    }
  }
`;

export const DetailsCoffeeDelivery = styled.div`
  margin-top: 2rem;

  display: grid;
  grid-template-columns: 0.75fr 1fr;
  align-items: center;
  justify-content: space-between;
  grid-gap: 1.25rem 2.5rem;

  div {
    display: flex;
    align-items: center;

    gap: 0.75rem;

    &:first-of-type {
      label {
        background: ${(props) => props.theme.colors.yellow[700]};
      }
    }
    &:nth-of-type(2) {
      label {
        background: ${(props) => props.theme.colors.text};
      }
    }
    &:nth-of-type(3) {
      label {
        background: ${(props) => props.theme.colors.yellow[500]};
      }
    }
    &:last-child {
      label {
        background: ${(props) => props.theme.colors.purple[500]};
      }
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      border-radius: 50%;
    }

    span {
      text-align: center;
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
