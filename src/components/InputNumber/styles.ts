import styled from "@emotion/styled";

export const InputNumberContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) => props.theme.colors.button};

  padding: 0.5rem;
  border-radius: 6px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      transition: filter 0.4s;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.colors.purple[700]};
      }
    }
  }

  .valueNumber {
    background: none;
    border: 0;
    max-width: 2rem;
    box-shadow: none;
    font-size: ${props => props.theme.font.size.lg};
    text-align: center;

    & [type="number"] {
      -moz-appearance: textfield;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
