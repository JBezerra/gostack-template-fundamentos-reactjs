import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;

export const Button = styled.div`
  width: calc(100% + 30px);
  height: 30px;

  color: #fff;
  background-color: #ff872c;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2ms;

  &:hover {
    background-color: #ff990c;
  }
`;
