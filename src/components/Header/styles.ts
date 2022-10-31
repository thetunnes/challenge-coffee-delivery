import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  a {
    text-decoration: none;
  }

  > nav {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    a {
      position: relative;
      padding: 0.5rem;
      border-radius: 8px;

      &:first-of-type {
        color: ${props => props.theme.colors.purple[700]};
        background: ${props => props.theme.colors.purple[200]};
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      &:last-of-type {
        background: ${props => props.theme.colors.yellow[200]};
      }

      .amount-coffees {
        width: 1.25rem;
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        right: -8px;
        top: -8px;
        background: ${props => props.theme.colors.yellow[700]};
        color: ${props => props.theme.colors.white};
        border-radius: 50%;
        font-size: ${props => props.theme.font.size.sm};
      }

    }
  }

  @media screen and (max-width: 384px) {
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem 0;
  }
`