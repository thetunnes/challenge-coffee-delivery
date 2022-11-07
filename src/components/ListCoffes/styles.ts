import styled from "@emotion/styled";

export const ListCoffeeContainer = styled.div`
  h2 {
    font-size: ${(props) => props.theme.font.size["4xl"]};
    line-height: ${(props) => props.theme.font.lineHeight.sm};
    margin: 2rem 0;
  }

  .not-found-coffees {
    margin: 3rem auto;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.25rem;

    > svg {
      color: ${props => props.theme.colors.yellow[500]};
      font-size: 1.5rem;
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: stretch;
    justify-content: center;
    grid-gap: 2.5rem 2rem;
    margin: 3rem auto;

    > div {
      flex: 1;
      background: ${(props) => props.theme.colors.card};
      border-top-right-radius: 36px;
      border-bottom-left-radius: 36px;
      border-top-left-radius: 6px;
      border-bottom-right-radius: 6px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 0 1.25rem;
      text-align: center;

      img {
        margin-top: -1.5rem;
        margin-bottom: 0.75rem;
      }

      h3 {
        font-size: ${({ theme }) => theme.font.size.xl};
        line-height: ${({ theme }) => theme.font.lineHeight.sm};
      }

      p {
        font-size: ${({ theme }) => theme.font.size.md};
        color: ${({ theme }) => theme.colors.label};
      }

      .list-tags-coffee {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        span {
          font-size: ${(props) => props.theme.font.size.xs};
          line-height: ${(props) => props.theme.font.lineHeight.sm};
          color: ${(props) => props.theme.colors.yellow[700]};
          background: ${(props) => props.theme.colors.yellow[200]};
          padding: 0.25rem 0.5rem;
          border-radius: 100px;
        }
      }

      .box-amount-coffee {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 1.5rem auto;
        
        h5 {
          font-size: ${({ theme }) => theme.font.size.xl};
        }

        > form {
          display: flex;
          align-items: center;
          gap: 0.5rem;

          button[type="submit"] {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 0;
            background: ${(props) => props.theme.colors.purple[700]};
            padding: 0.5rem;
            border-radius: 8px;

            cursor: pointer;
            transition: background 0.4s ease-in;

            &:hover {
              background: ${(props) => props.theme.colors.purple[500]};
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    main {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }

  @media screen and (max-width: 512px) {
    main {
      grid-template-columns: 1fr;
    }
  }
`;
