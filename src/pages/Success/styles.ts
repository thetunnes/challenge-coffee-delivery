import styled from "@emotion/styled";

export const SuccessContainer = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.yellow[700]};
  }

  .data-order-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;

    .data-order {
      flex: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
      padding: 2.5rem;
      // https://gist.github.com/stereokai/36dc0095b9d24ce93b045e2ddc60d7a0
      border: double 1px transparent;
      border-radius: 6px 36px;
      background-image: linear-gradient(white, white), radial-gradient(circle at top left, #dbac2c, #8047f8);
      background-origin: border-box;
      background-clip: padding-box, border-box;

      .box-timer-delivery {
        .icon {
          background: ${props => props.theme.colors.yellow[500]};
        }
      }
      .box-address {
        .icon {
          background: ${props => props.theme.colors.purple[500]};
        }
      }
      .box-payment {
        .icon {
          background: ${props => props.theme.colors.yellow[700]};
        }
      }

      > div {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .icon {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          svg {
            font-size: 1rem;
            color: white;
          }
        }
      }
    }
  }
`;
