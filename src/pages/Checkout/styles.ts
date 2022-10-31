import styled from "@emotion/styled";

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  section.checkout-address {
    flex: 1.25;
  }
  section {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

    > .box-container {
      width: 100%;
      background: ${(props) => props.theme.colors.card};
      padding: 2.5rem;
      border-radius: 6px 44px 6px 44px;
      &:not(.box-checkout-coffees) {
        border-radius: 6px;
      }
      .title-box-checkout {
        display: flex;
        align-items: flex-start;
        gap: 0.5rem;
        margin-bottom: 2rem;

        > svg {
          color: ${(props) => props.theme.colors.yellow[700]};
        }

        h4 {
          font-family: "Roboto", sans-serif !important;
          color: ${(props) => props.theme.colors.subtitle};
          font-size: ${(props) => props.theme.font.size.lg};
        }

        span {
          font-size: ${(props) => props.theme.font.size.md};
        }
      }

      .group-payment {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 0.75rem;

        input[type="radio"] {
          opacity: 0;
          position: fixed;
          width: 0;
        }

        input[type="radio"]:checked + label {
        border: 1px solid ${(props) => props.theme.colors.purple[500]};
      }

        label {
          flex: 1;
          background: ${(props) => props.theme.colors.background};
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-transform: uppercase;
          padding: 1rem;
          font-size: ${(props) => props.theme.font.size.sm};

          border-radius: 6px;
          border: 1px solid transparent;
          transition: all 0.4s;
          cursor: pointer;

          &:hover {
            background: ${(props) => props.theme.colors.hover};
          }
        }
      }

      #dataClient {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: center;
        gap: 1rem;

        > div {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;

          input:first-of-type {
            flex: .5;
          }

          input#adjunct {
            flex: 1;
          }

          input#city {
            flex: 0.7;
          }

          input#uf {
            flex: 0.25;
          }
        }
        input {
          width: 100%;
          background: ${(props) => props.theme.colors.input};
          border: 1px solid ${(props) => props.theme.colors.hover};
          padding: 0.75rem;
          border-radius: 0.25rem;
          font-size: ${(props) => props.theme.font.size.md};
          box-shadow: unset;

          &::placeholder {
            color: ${(props) => props.theme.colors.label};
          }

          &:focus {
            border: 1px solid ${(props) => props.theme.colors.yellow[700]};
          }

          &:first-of-type {
            width: 40%;
          }
        }


      }
    }
  }
`;
