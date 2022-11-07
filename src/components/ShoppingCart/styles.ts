import styled from "@emotion/styled";

export const CartContainer = styled.section`
  width: 100%;

  .box-checkout-coffees {
    ul {
      li {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        gap: 1.25rem;
        padding: 1.75rem 0;

        time {
          font-weight: bold;
        }

        .info-coffee-cart {
          display: flex;
          align-items: flex-start;
          gap: 1.25rem;

          img {
            width: 64px;
            height: 64px;
          }

          .selected-coffee {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          p {
            font-size: ${(props) => props.theme.font.size.lg};
          }

          form {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            button {
              flex: 1;
              background: ${(props) => props.theme.colors.button};
              border: 0;
              display: flex;
              align-items: center;
              gap: 0.25rem;
              border-radius: 6px;
              font-size: ${(props) => props.theme.font.size.lg};
              padding: 0.5rem;
              /* &:not([type="submit"]) {
                padding: 0;
                box-shadow: unset;
              } */
            }
          }
        }

        & + li {
          border-top: 1px solid ${(props) => props.theme.colors.button};
        }
      }
    }

    .box-price-coffee {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.75rem;

      p, b {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &:not(b) {
          font-size: ${(props) => props.theme.font.size.md};
          span {
            font-size: ${(props) => props.theme.font.size.lg};
          }
        }

        &:not(p) {
          font-size: ${(props) => props.theme.font.size.xl};
          color: ${(props) => props.theme.colors.subtitle};

        }
      }
    }

    > button[type="submit"] {
      width: 100%;
      background: ${props => props.theme.colors.yellow[500]};
      color: ${props => props.theme.colors.white};
      font-size: ${props => props.theme.font.size.md};
      font-weight: bold;
      text-align: center;
      padding: 0.75rem;

      border: 0;
      border-radius: 6px;

      margin-top: 1.5rem;
      cursor: pointer;

      transition: background 0.4s ease-in-out;

      &:hover {
        background: ${(props) => props.theme.colors.yellow[700]};
      }
    }

    .notHaveCoffeesInCart {
      margin: 0 auto;
      text-align: center;
      
      a {
        text-decoration: none;
        color: ${props => props.theme.colors.purple[500]};
        transition: all 0.2s;

        &:hover {
          color: ${props => props.theme.colors.purple[700]};
          text-decoration: underline;
        }
      }
    }
  }
`;
