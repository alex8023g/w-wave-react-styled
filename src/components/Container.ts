import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 94px 15px;
  max-width: 1140px;
  @media (max-width: 1139px) {
    padding: 94px 100px;
  }
  @media (max-width: 1023px) {
    padding: 94px 114px;
  }
  @media (max-width: 767px) {
    padding: 54px 32px;
  }
`;
